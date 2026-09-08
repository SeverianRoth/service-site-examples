import fs from 'node:fs';
import { generateKeyPairSync } from 'node:crypto';
import { signRequest } from './request-signing.mjs';
const {privateKey, publicKey} = generateKeyPairSync('rsa', {modulusLength: 2048});
const body = '{"msg":"hello — ceramic"}', path = '/oauth2/test_sign', timestamp = '1788825600';
const vector = {body, path, timestamp, publicKey: publicKey.export({type: 'spki', format: 'pem'}), signature: signRequest(body, path, timestamp, privateKey), runtime: process.version, openssl: process.versions.openssl};
fs.writeFileSync(new URL('conformance-vector.json', import.meta.url), JSON.stringify(vector, null, 2) + '\n');
console.log(JSON.stringify({runtime: process.version, openssl: process.versions.openssl, platform: process.platform, privateKeyPersisted: false}));
