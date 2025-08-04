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
   * Lấy sessionId từ Odoo để xác thực cho các request sau.
   */
  private async getSessionId(): Promise<string> {
    if (this.sessionId)
      return this.sessionId
    const authUrl = `/api/auth/get_token`
    this.logger.log(`Đang lấy session_id từ Odoo: ${authUrl}`)

    try {
      const response = await this.axios.post(authUrl, {
        jsonrpc: '2.0',
        params: {
          login: this.login,
          password: this.password,
          db: this.db,
          api_key: this.apiKey,
        },
      })
      // Tùy thuộc vào response Odoo, lấy session_id
      const sessionId = response.data?.result?.session_id
      if (!sessionId)
        throw new Error('Không lấy được session_id từ Odoo.')
      this.sessionId = sessionId
      return sessionId
    }
    catch (error) {
      this.logger.error('Odoo authentication failed:', error.response?.data || error.message)
      throw new Error('Could not authenticate with Odoo.')
    }
  }

  /**
   * Gọi Odoo API chung, xác thực qua sessionId.
   */
  private async callOdooApi(
    httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE',
    model: string,
    recordId: number | null = null,
    body: any = {},
  ) {
    const sessionId = await this.getSessionId()
    let url = `/api/${model}`
    if (recordId)
      url += `/${recordId}`

    try {
      const response = await this.axios.request({
        method: httpMethod,
        url,
        headers: {
          'Session-Id': sessionId,
        },
        data: body,
      })

      // Xử lý dữ liệu trả về tùy thuộc vào cấu trúc Odoo của bạn
      return response.data?.result || response.data
    }
    catch (error) {
      this.logger.error(
        `Failed to call Odoo API [${httpMethod}] ${url}:`,
        error.response?.data || error.message,
      )
      // Nếu session hết hạn, xóa để lần sau lấy lại
      if (
        error.response?.status === 401
        || (typeof error.response?.data === 'string'
          && error.response.data.includes('Invalid Session'))
      ) {
        this.sessionId = null
      }
      throw error
    }
  }

  /**
   * Tìm kiếm Partner trong Odoo bằng email
   */
  async findPartnerByEmail(email: string): Promise<any | null> {
    if (!email)
      return null

    this.logger.log('Fetching all partners from Odoo to find by email (performance warning)...')
    const response = await this.callOdooApi('GET', 'res.partner', null, {
      fields: ['id', 'name', 'email'],
    })

    if (!Array.isArray(response))
      return null

    return response.find((p: any) => p.email === email) || null
  }

  /**
   * Tạo hoặc Cập nhật một Partner trong Odoo.
   */
  async syncPartner(data: OdooPartnerData): Promise<{ id: number }> {
    this.logger.log(`Syncing partner ${data.name} (${data.email}) to Odoo.`)
    const existingPartner = await this.findPartnerByEmail(data.email)

    if (existingPartner) {
      const partnerId = existingPartner.id
      this.logger.log(`Partner found (ID: ${partnerId}). Updating...`)
      const result = await this.callOdooApi('PUT', 'res.partner', partnerId, { values: data })
      return Array.isArray(result) ? result[0] : result
    }
    else {
      this.logger.log(`Partner not found. Creating...`)
      const result = await this.callOdooApi('POST', 'res.partner', null, { values: data })
      return Array.isArray(result) ? result[0] : result
    }
  }

  /**
   * Vô hiệu hóa một Partner trong Odoo bằng cách set active = false.
   */
  async deactivatePartnerByEmail(email: string): Promise<void> {
    const partner = await this.findPartnerByEmail(email)
    if (partner) {
      this.logger.log(`Deactivating partner ID ${partner.id} in Odoo.`)
      await this.callOdooApi('PUT', 'res.partner', partner.id, { values: { active: false } })
    }
    else {
      this.logger.warn(`Tried to deactivate a partner with email ${email}, but not found in Odoo.`)
    }
  }
}
