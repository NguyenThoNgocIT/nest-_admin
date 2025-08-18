import { z } from 'zod';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { createZodDto } from '~/common/function';

// Schema Zod cho Address
const AddressSchema = z.object({
  id: z.number().int().positive('ID địa chỉ phải là số dương').optional(),
  address1: z.string().min(1, 'Địa chỉ dòng 1 là bắt buộc').optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  company: z.string().optional(),
  country_code: z.string().length(2, 'Mã quốc gia phải là 2 ký tự (ISO 3166-1 alpha-2)').optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.string().regex(/^\+\d{10,15}$/, 'Số điện thoại phải là định dạng quốc tế').optional(),
  province: z.string().optional(),
  zip: z.string().optional(),
}).refine(
  (data) => {
    if (Object.keys(data).length > 0) {
      return data.address1 && data.country_code;
    }
    return true;
  },
  { message: 'address1 và country_code là bắt buộc nếu địa chỉ được cung cấp' }
);

// DTO cho Address
export class AddressDto {
  @ApiPropertyOptional({ description: 'ID địa chỉ (dùng khi cập nhật)', example: 987654321 })
  id?: number;

  @ApiPropertyOptional({ description: 'Địa chỉ dòng 1 (số nhà, tên đường)', example: '123 Main St' })
  address1?: string;

  @ApiPropertyOptional({ description: 'Địa chỉ dòng 2 (căn hộ, tòa nhà)', example: 'Apt 4B' })
  address2?: string;

  @ApiPropertyOptional({ description: 'Thành phố', example: 'Kabul' })
  city?: string;

  @ApiPropertyOptional({ description: 'Tên công ty (dành cho khách hàng B2B)', example: 'Acme Corp' })
  company?: string;

  @ApiPropertyOptional({ description: 'Mã quốc gia (ISO 3166-1 alpha-2, ví dụ: VN, AF, US)', example: 'AF' })
  country_code?: string;

  @ApiPropertyOptional({ description: 'Tên người liên hệ tại địa chỉ', example: 'John' })
  first_name?: string;

  @ApiPropertyOptional({ description: 'Họ người liên hệ tại địa chỉ', example: 'Doe' })
  last_name?: string;

  @ApiPropertyOptional({ description: 'Số điện thoại (định dạng quốc tế, ví dụ: +84912345678)', example: '+93712345678' })
  phone?: string;

  @ApiPropertyOptional({ description: 'Mã tỉnh/thành (ví dụ: KBL cho Kabul, SG cho Sài Gòn)', example: 'KBL' })
  province?: string;

  @ApiPropertyOptional({ description: 'Mã bưu điện (phụ thuộc vào quốc gia)', example: '1001' })
  zip?: string;
}

// Schema Zod cho Metafield
const MetafieldSchema = z.object({
  id: z.number().int().positive('ID metafield phải là số dương').optional(),
  namespace: z.string().min(1, 'Namespace là bắt buộc'),
  key: z.string().min(1, 'Key là bắt buộc'),
  value: z.string().min(1, 'Value là bắt buộc'),
  type: z.enum([
    'single_line_text_field',
    'multi_line_text_field',
    'number_integer',
    'number_decimal',
    'boolean',
    'date',
    'date_time',
    'json',
  ], { message: 'Type metafield không hợp lệ' }),
});

// DTO cho Metafield
export class MetafieldDto {
  @ApiPropertyOptional({ description: 'ID metafield (dùng khi cập nhật)', example: 1122334455 })
  id?: number;

  @ApiProperty({ description: 'Namespace của metafield (nhóm dữ liệu)', example: 'custom' })
  namespace: string;

  @ApiProperty({ description: 'Key của metafield (tên trường)', example: 'loyalty_status' })
  key: string;

  @ApiProperty({ description: 'Value của metafield (giá trị dữ liệu)', example: 'Gold' })
  value: string;

  @ApiProperty({
    description: 'Type của metafield',
    example: 'single_line_text_field',
    enum: [
      'single_line_text_field',
      'multi_line_text_field',
      'number_integer',
      'number_decimal',
      'boolean',
      'date',
      'date_time',
      'json',
    ],
  })
  type: 'single_line_text_field' | 'multi_line_text_field' | 'number_integer' | 'number_decimal' | 'boolean' | 'date' | 'date_time' | 'json';
}

// Schema Zod cho Marketing Consent
const MarketingConsentSchema = z.object({
  state: z.enum(['subscribed', 'not_subscribed', 'pending'], { message: 'Trạng thái marketing không hợp lệ' }),
  opt_in_level: z.enum(['single_opt_in', 'confirmed_opt_in', 'unknown']).optional(),
consent_updated_at: z.string().datetime().optional(),});

// DTO cho Marketing Consent
export class MarketingConsentDto {
  @ApiProperty({
    description: 'Trạng thái marketing (subscribed: đồng ý, not_subscribed: không đồng ý, pending: chờ xác nhận)',
    example: 'subscribed',
    enum: ['subscribed', 'not_subscribed', 'pending'],
  })
  state: 'subscribed' | 'not_subscribed' | 'pending';

  @ApiPropertyOptional({
    description: 'Mức độ đồng ý (single_opt_in: đồng ý trực tiếp, confirmed_opt_in: cần xác nhận)',
    example: 'single_opt_in',
    enum: ['single_opt_in', 'confirmed_opt_in', 'unknown'],
  })
  opt_in_level?: 'single_opt_in' | 'confirmed_opt_in' | 'unknown';

  // @ApiPropertyOptional({ description: 'Ngày cập nhật đồng ý (ISO 8601)', example: '2025-08-18T22:18:00Z' })
  // consent_updated_at?: string;
}

// Schema Zod cho CreateCustomer (base schema without refine)
const BaseCustomerSchema = z.object({
  first_name: z.string().min(1, 'Tên là bắt buộc').optional(),
  last_name: z.string().optional(),
  email: z.string().email('Email không hợp lệ').optional(),
  phone: z.string().regex(/^\+\d{10,15}$/, 'Số điện thoại phải là định dạng quốc tế').optional(),
  addresses: z.array(AddressSchema).optional().default([]),
  note: z.string().optional(),
  tags: z.string().optional(),
  tax_exempt: z.boolean().optional(),
  metafields: z.array(MetafieldSchema).optional().default([]),
  marketing_opt_in_level: z.enum(['single_opt_in', 'confirmed_opt_in', 'unknown']).optional(),
  email_marketing_consent: MarketingConsentSchema.optional(),
  sms_marketing_consent: MarketingConsentSchema.optional(),
});

// Schema Zod cho CreateCustomer (with refine)
const CreateCustomerSchema = BaseCustomerSchema.refine(
  (data) => data.email || data.phone,
  { message: 'Cần cung cấp ít nhất email hoặc phone' }
);

// DTO cho CreateCustomer
export class CreateCustomerDto extends createZodDto(CreateCustomerSchema) {
  @ApiPropertyOptional({ description: 'Tên khách hàng (lấy từ form đăng ký)', example: 'John' })
  first_name?: string;

  @ApiPropertyOptional({ description: 'Họ khách hàng (lấy từ form đăng ký)', example: 'Doe' })
  last_name?: string;

  @ApiPropertyOptional({ description: 'Email khách hàng (phải hợp lệ)', example: 'john.doe@example.com' })
  email?: string;

  @ApiPropertyOptional({ description: 'Số điện thoại (định dạng quốc tế, ví dụ: +84912345678)', example: '+93712345678' })
  phone?: string;

  @ApiPropertyOptional({
    description: 'Danh sách địa chỉ (lấy từ form, ví dụ: địa chỉ giao hàng)',
    type: [AddressDto],
    default: [],
  })
  addresses?: AddressDto[];

  @ApiPropertyOptional({ description: 'Ghi chú về khách hàng (ví dụ: trạng thái VIP)', example: 'VIP customer' })
  note?: string;

  @ApiPropertyOptional({ description: 'Tags của khách hàng (phân tách bằng dấu phẩy)', example: 'VIP,Loyal' })
  tags?: string;

  @ApiPropertyOptional({ description: 'Miễn thuế hay không', example: true })
  tax_exempt?: boolean;

  @ApiPropertyOptional({ description: 'Danh sách metafields (dữ liệu tùy chỉnh)', type: [MetafieldDto], default: [] })
  metafields?: MetafieldDto[];

  @ApiPropertyOptional({
    description: 'Mức độ đồng ý marketing',
    example: 'single_opt_in',
    enum: ['single_opt_in', 'confirmed_opt_in', 'unknown'],
  })
  marketing_opt_in_level?: 'single_opt_in' | 'confirmed_opt_in' | 'unknown';

  @ApiPropertyOptional({ description: 'Đồng ý email marketing', type: MarketingConsentDto })
  email_marketing_consent?: MarketingConsentDto;

  @ApiPropertyOptional({ description: 'Đồng ý SMS marketing', type: MarketingConsentDto })
  sms_marketing_consent?: MarketingConsentDto;
}

// Schema Zod cho UpdateCustomer
const UpdateCustomerSchema = BaseCustomerSchema.extend({
  id: z.number().int().positive('ID khách hàng phải là số dương'),
}).refine(
  (data) => data.email || data.phone,
  { message: 'Cần cung cấp ít nhất email hoặc phone' }
);

// DTO cho UpdateCustomer
export class UpdateCustomerDto extends createZodDto(UpdateCustomerSchema) {
  @ApiProperty({ description: 'ID khách hàng (lấy từ response tạo khách hàng)', example: 123456789 })
  id: number;

  @ApiPropertyOptional({ description: 'Tên khách hàng (lấy từ form chỉnh sửa)', example: 'John' })
  first_name?: string;

  @ApiPropertyOptional({ description: 'Họ khách hàng (lấy từ form chỉnh sửa)', example: 'Doe' })
  last_name?: string;

  @ApiPropertyOptional({ description: 'Email khách hàng (phải hợp lệ)', example: 'john.doe.updated@example.com' })
  email?: string;

  @ApiPropertyOptional({ description: 'Số điện thoại (định dạng quốc tế)', example: '+93712345678' })
  phone?: string;

  @ApiPropertyOptional({
    description: 'Danh sách địa chỉ (cập nhật địa chỉ hiện có hoặc thêm mới)',
    type: [AddressDto],
    default: [],
  })
  addresses?: AddressDto[];

  @ApiPropertyOptional({ description: 'Ghi chú về khách hàng (cập nhật)', example: 'Updated VIP customer note' })
  note?: string;

  @ApiPropertyOptional({ description: 'Tags của khách hàng (phân tách bằng dấu phẩy)', example: 'VIP,Loyal,Updated' })
  tags?: string;

  @ApiPropertyOptional({ description: 'Miễn thuế hay không', example: true })
  tax_exempt?: boolean;

  @ApiPropertyOptional({ description: 'Danh sách metafields (cập nhật hoặc thêm mới)', type: [MetafieldDto], default: [] })
  metafields?: MetafieldDto[];

  @ApiPropertyOptional({
    description: 'Mức độ đồng ý marketing',
    example: 'single_opt_in',
    enum: ['single_opt_in', 'confirmed_opt_in', 'unknown'],
  })
  marketing_opt_in_level?: 'single_opt_in' | 'confirmed_opt_in' | 'unknown';

  @ApiPropertyOptional({ description: 'Đồng ý email marketing', type: MarketingConsentDto })
  email_marketing_consent?: MarketingConsentDto;

  @ApiPropertyOptional({ description: 'Đồng ý SMS marketing', type: MarketingConsentDto })
  sms_marketing_consent?: MarketingConsentDto;
}
