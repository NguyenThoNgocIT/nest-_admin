import { z } from 'zod';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { createZodDto } from '~/common/function';

// DTO cho Variant
export class VariantDto {
  @ApiProperty({ description: 'Tên biến thể (ví dụ: kích thước, màu sắc)', example: 'Kích thước mặc định' })
  option1: string;

  @ApiProperty({ description: 'Giá của biến thể', example: '29.99' })
  price: string;

  @ApiProperty({ description: 'Mã SKU của biến thể', example: 'SP001' })
  sku: string;
}

// Schema Zod cho Variant
const VariantSchema = z.object({
  option1: z.string().min(1, 'Tên biến thể là bắt buộc'),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, 'Giá phải là số hợp lệ'),
  sku: z.string().min(1, 'SKU là bắt buộc'),
});

// DTO cho Image
export class ImageDto {
  @ApiProperty({ description: 'URL của hình ảnh', example: 'https://example.com/image.jpg' })
  src: string;
}

// Schema Zod cho Image
const ImageSchema = z.object({
  src: z.string().url('URL hình ảnh không hợp lệ'),
});

// DTO cho CreateProduct
export class CreateProductDto extends createZodDto(
  z.object({
    title: z.string().min(1, 'Tiêu đề là bắt buộc'),
    body_html: z.string().optional(),
    vendor: z.string().optional(),
    product_type: z.string().optional(),
    status: z.enum(['active', 'draft', 'archived']).optional().default('draft'),
    variants: z.array(VariantSchema).optional().default([]),
    images: z.array(ImageSchema).optional().default([]),
  })
) {
  @ApiProperty({ description: 'Tiêu đề sản phẩm', example: 'Sản phẩm mẫu' })
  title: string;

  @ApiPropertyOptional({ description: 'Mô tả HTML của sản phẩm', example: '<p>Mô tả sản phẩm mẫu</p>' })
  body_html?: string;

  @ApiPropertyOptional({ description: 'Nhà cung cấp', example: 'Nhà cung cấp' })
  vendor?: string;

  @ApiPropertyOptional({ description: 'Loại sản phẩm', example: 'Loại sản phẩm' })
  product_type?: string;

  @ApiPropertyOptional({ description: 'Trạng thái sản phẩm', example: 'active', enum: ['active', 'draft', 'archived'] })
  status?: 'active' | 'draft' | 'archived';

  @ApiPropertyOptional({ description: 'Danh sách biến thể', type: [VariantDto] })
  variants?: VariantDto[];

  @ApiPropertyOptional({ description: 'Danh sách hình ảnh', type: [ImageDto] })
  images?: ImageDto[];
}