import z from 'zod'
import { createZodDto } from '../..'


export class ProductListzDto extends createZodDto(
    z
        .object({
            status: z.string().optional(),
            seller_skus: z.string().array().optional(),
            create_time_ge: z.number().optional(),
            create_time_le: z.number().optional(),
            update_time_ge: z.number().optional(),
            update_time_le: z.number().optional(),
            category_version: z.string().optional(),
            listing_quality_tiers: z.string().array().optional(),
            listing_platforms: z.string().array().optional(),
            audit_status: z.string().array().optional(),
            sku_ids: z.string().array().optional()
        })

) { }
export class createProductDto extends createZodDto(
    z
        .object({
            save_mode: z.string().optional(),
            description: z.string(),
            category_id: z.string(),
            brand_id: z.string().optional(),
            main_images: z.object(
                {
                    uri: z.string()
                }
            ).array(),
            skus: z.object(
                {
                    id: z.string().optional(),
                    sales_attributes: z.object(
                        {
                            id: z.string().optional(),
                            name: z.string().optional(),
                            value_id: z.string().optional(),
                            value_name: z.string().optional(),
                            sku_img: z.object(
                                {
                                    uri: z.string().optional()
                                }
                            ),
                            supplementary_sku_images: z.object(
                                {
                                    uri: z.string()
                                }
                            ).array()
                        }
                    ).array().optional(),
                    seller_sku: z.string().optional(),
                    price: z.object(
                        {
                            amount: z.string().optional(),
                            currency: z.string(),
                            sale_price: z.string().optional()
                        }
                    ),
                    external_sku_id: z.string().optional(),
                    identifier_code: z.object(
                        {
                            code: z.string(),
                            type: z.string()
                        }
                    ).optional(),
                    inventory: z.object({
                        warehouse_id: z.string(),
                        quantity: z.number()
                    }).array().optional(),
                    combined_skus: z.object(
                        {
                            product_id: z.string(),
                            sku_id: z.string(),
                            sku_count: z.number()
                        }
                    ).array().optional(),
                    sku_unit_count: z.string().optional(),
                    external_urls: z.string().array().optional(),
                    extra_identifier_codes: z.string().array().optional(),
                    pre_sale: z.object(
                        {
                            type: z.string(),
                            fulfillment_type: z.object(
                                {
                                    handling_duration_days: z.number(),
                                    release_date: z.number()
                                }
                            )
                        }
                    ).optional(),
                    list_price: z.object({
                        amount: z.string(),
                        currency: z.string()
                    }).optional(),
                    external_list_prices: z.object({
                        source: z.string(),
                        amount: z.string(),
                        currency: z.string()
                    }).array().optional(),
                }
            ).array(),
            title: z.string(),
            is_cod_allowed: z.boolean().optional(),
            certifications: z.object({
                id: z.string(),
                images: z.object(
                    {
                        uri: z.string()
                    }
                ).array().optional(),
                files: z.object({
                    id: z.string(),
                    name: z.string(),
                    format: z.string()
                }).array().optional(),
                expiration_date: z.number()
            }).array().optional(),
            package_weight: z.object(
                {
                    value: z.string(),
                    unit: z.string()
                }
            ),
            product_attributes: z.object(
                {
                    id: z.string(),
                    values: z.object(
                        {
                            id: z.string(),
                            name: z.string()
                        }
                    ).array()
                }
            ).array().optional(),
            size_chart: z.object(
                {
                    image: z.object(
                        {
                            uri: z.string()
                        }
                    ).optional(),
                    template: z.object(
                        {
                            id: z.string()
                        }
                    )
                }
            ).optional(),
            package_dimensions: z.object({
                length: z.string(),
                width: z.string(),
                height: z.string(),
                unit: z.string(),
            }).optional(),
            external_product_id: z.string().optional(),
            delivery_option_ids: z.string().array().optional(),
            video: z.object(
                {
                    id: z.string()
                }
            ).optional(),
            category_version: z.string().optional(),
            manufacturer_ids: z.string().array().optional(),
            responsible_person_ids: z.string().array().optional(),
            listing_platforms: z.string().array().optional(),
            shipping_insurance_requirement: z.string().optional(),
            is_pre_owned: z.boolean().optional(),
            minimum_order_quantity: z.number().optional()
        })

) { }




export class createProductToShop extends createZodDto(
    z
        .object({
            product_id: z.string().min(2),
            warehouses: z.object(
                {
                    "warehouse_id": z.string(),
                    "stock": z.number().min(1)
                }
            ).array()
        })

) { }

export class syncProductFromTIktok extends createZodDto(
    z
        .object({
            warehouse_id: z.string().min(2),
        })

) { }

