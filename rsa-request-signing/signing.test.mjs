import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync, sign, constants, createHash } from 'node:crypto';
import { signRequest, verifyRequest, requestBytes } from './request-signing.mjs';

const keys = generateKeyPairSync('rsa', { modulusLength: 2048 });
const body = '{"msg":"hello — ceramic"}', path = '/oauth2/test_sign', timestamp = '1788825600';
const signature = signRequest(body, path, timestamp, keys.privateKey);

test('unchanged UTF-8 body, path and seconds verify', () => {
  assert.equal(verifyRequest(body, path, timestamp, signature, keys.publicKey), true);
});
for (const [name, b, p, t] of [
  ['whitespace', body + ' ', path, timestamp],
  ['body', '{"msg":"changed"}', path, timestamp],
  ['path', body, '/oauth2/other', timestamp],
  ['milliseconds', body, path, timestamp + '000'],
]) test(name + ' mismatch fails verification', () => {
  assert.equal(verifyRequest(b, p, t, signature, keys.publicKey), false);
});
test('pre-hashing causes a double-hash mismatch', () => {
  const hash = createHash('sha256').update(requestBytes(body, path, timestamp)).digest();
  const wrong = sign('sha256', hash, {key: keys.privateKey, padding: constants.RSA_PKCS1_PADDING}).toString('base64');
  assert.equal(verifyRequest(body, path, timestamp, wrong, keys.publicKey), false);
});
test('wrong key fails verification', () => {
  const other = generateKeyPairSync('rsa', {modulusLength: 2048});
  assert.equal(verifyRequest(body, path, timestamp, signature, other.publicKey), false);
});
test('altered signature fails verification', () => {
  const altered = Buffer.from(signature, 'base64'); altered[0] ^= 1;
  assert.equal(verifyRequest(body, path, timestamp, altered.toString('base64'), keys.publicKey), false);
});
