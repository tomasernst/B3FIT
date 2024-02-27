import crypto from 'crypto';
require('dotenv').config();

const secret = process.env.SECRET_KEY;

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha512', [salt, password].join('/')).update(secret).digest('hex')
}