import { Injectable, Logger } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

export interface OdooPartnerData {
  name: string
  email?: string
  phone?: string
  active?: boolean
}

@Injectable()
export class OdooService {
  private readonly logger = new Logger(OdooService.name)

  private odooUrl: string
  private db: string
  private login: string
  private password: string
  private apiKey: string
  private sessionId: string | null = null

  private axios: AxiosInstance

  constructor() {
    this.odooUrl = process.env.ODOO_URL || ''
    this.db = process.env.ODOO_DB || ''
    this.login = process.env.ODOO_LOGIN || ''
    this.password = process.env.ODOO_PASSWORD || ''
    this.apiKey = ''
    this.axios = axios.create({
      baseURL: this.odooUrl,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  /**
   * Lấy API key từ Odoo bằng endpoint /odoo_connect
   */
  async getApiKey(): Promise<string> {
    if (this.apiKey)
      return this.apiKey

    const url = '/odoo_connect'
    this.logger.log(`Đang lấy API key từ Odoo: ${url}`)

    try {
      const response = await this.axios.get(url, {
        headers: {
          login: this.login,
          password: this.password,
          db: this.db,
        },
      })

      let data: any
      try {
        if (typeof response.data === 'string') {
          data = JSON.parse(response.data)
        }
        else {
          data = response.data
        }
      }
      catch (err) {
        data = response.data
      }

      this.apiKey = data.apiKey
      return this.apiKey
    }
    catch (error) {
      this.logger.error('Lỗi khi lấy API key:', error)
      throw error
    }
  }

  /**
   * Gọi Odoo API chung, sử dụng API key
   */
  async callOdooApi(
    httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE',
    model: string,
    recordId: number | null = null,
    body: any = {},
  ) {
    const apiKey = await this.getApiKey()
    const url = recordId ? `/send_request?model=${model}&Id=${recordId}` : `/send_request?model=${model}`

    try {
      const response = await this.axios.request({
        method: httpMethod,
        url,
        headers: {
          'api-key': apiKey,
          'login': this.login,
          'password': this.password,
        },
        data: body,
      })

      const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data
      if (typeof data === 'string' && data.includes('<html>')) {
        throw new Error(`Lỗi từ Odoo: ${data}`)
      }
      return data.records || data['New resource'] || data['Updated resource'] || data['Resource deleted'] || data
    }
    catch (error) {
      this.logger.error(`Gọi Odoo API [${httpMethod}] ${url} thất bại:`, error.response?.data || error.message)
      if (error.response?.status === 401) {
        this.apiKey = null // Xóa API key để lấy lại
      }
      throw error
    }
  }

  /**
   * Tìm Partner trong Odoo bằng email
   */
  async findPartnerByEmail(email: string): Promise<any | null> {
    if (!email)
      return null

    this.logger.log(`Tìm partner theo email: ${email}`)
    try {
      const response = await this.callOdooApi('GET', 'res.partner', null, {
        fields: ['id', 'name', 'email'],
        domain: [['email', '=', email]],
      })
      return response && response.length > 0 ? response[0] : null
    }
    catch (error) {
      this.logger.error(`Tìm partner theo email ${email} thất bại:`, error.message)
      return null
    }
  }

  /**
   * Tạo hoặc cập nhật Partner trong Odoo
   */
  async syncPartner(data: OdooPartnerData): Promise<{ id: number }> {
    this.logger.log(`Đồng bộ partner ${data.name} (${data.email}) với Odoo.`)
    const existingPartner = await this.findPartnerByEmail(data.email)

    const values = {
      name: data.name,
      ...(data.email && { email: data.email }),
      ...(data.phone && { phone: data.phone }),
      ...(data.active !== undefined && { active: data.active }),
    }

    if (existingPartner) {
      this.logger.log(`Tìm thấy partner (ID: ${existingPartner.id}). Đang cập nhật...`)
      return await this.callOdooApi('PUT', 'res.partner', existingPartner.id, {
        fields: ['id', 'name', 'email', 'phone'],
        values,
      })
    }
    else {
      this.logger.log(`Không tìm thấy partner. Đang tạo mới...`)
      return await this.callOdooApi('POST', 'res.partner', null, {
        fields: ['id', 'name', 'email', 'phone'],
        values,
      })
    }
  }

  /**
   * Vô hiệu hóa Partner trong Odoo
   */
  async deactivatePartnerByEmail(email: string): Promise<void> {
    const partner = await this.findPartnerByEmail(email)
    if (partner) {
      this.logger.log(`Vô hiệu hóa partner ID ${partner.id} trong Odoo.`)
      await this.callOdooApi('PUT', 'res.partner', partner.id, {
        fields: ['id', 'active'],
        values: { active: false },
      })
    }
    else {
      this.logger.warn(`Không tìm thấy partner với email ${email} để vô hiệu hóa.`)
    }
  }
}
