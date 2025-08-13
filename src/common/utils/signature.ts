// common/utils/signature.ts
import * as crypto from 'crypto';

export function generateSignature(params: any, body: any, path: string): string {
    const appSecret = process.env.TIKTOK_SHOP_SECRET;
    
    // Sort parameters
    const sortedParams = Object.keys(params)
        .sort()
        .reduce((result, key) => {
            result[key] = params[key];
            return result;
        }, {});

    // Create query string
    const queryString = Object.keys(sortedParams)
        .map(key => `${key}=${sortedParams[key]}`)
        .join('&');

    // Create signature string
    const bodyStr = typeof body === 'string' ? body : JSON.stringify(body || {});
    const signatureString = `${path}?${queryString}${bodyStr}`;

    // Generate HMAC SHA256
    return crypto
        .createHmac('sha256', appSecret)
        .update(signatureString)
        .digest('hex');
}