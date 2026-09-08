// Local compatibility sample. Uses Node's OpenSSL-backed RSA implementation.
import { constants, sign, verify } from 'node:crypto';

export function requestBytes(body, path, timestamp) {
  return Buffer.from(body + path + String(timestamp), 'utf8');
}

export function signRequest(body, path, timestamp, privateKey) {
  return sign('sha256', requestBytes(body, path, timestamp), {
    key: privateKey, padding: constants.RSA_PKCS1_PADDING,
  }).toString('base64');
}

export function verifyRequest(body, path, timestamp, signature, publicKey) {
  return verify('sha256', requestBytes(body, path, timestamp), {
    key: publicKey, padding: constants.RSA_PKCS1_PADDING,
  }, Buffer.from(signature, 'base64'));
}
