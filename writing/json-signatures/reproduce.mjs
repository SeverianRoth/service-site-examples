// Run from this repository: node writing/json-signatures/reproduce.mjs
// Local experiment only. The temporary private key is never written to disk.
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { signRequest, verifyRequest } from '../../rsa-request-signing/request-signing.mjs';

const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
const path = '/experiment';
const timestamp = '1788825600';
const compact = JSON.stringify({ msg: 'hello' });
const spaced = JSON.stringify({ msg: 'hello' }, null, 2);
assert.deepEqual(JSON.parse(compact), JSON.parse(spaced));
const signature = signRequest(compact, path, timestamp, privateKey);

const server = createServer(async (request, response) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const received = Buffer.concat(chunks);
  const verified = verifyRequest(received.toString('utf8'), request.url,
    request.headers['x-demo-timestamp'], request.headers['x-demo-signature'], publicKey);
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ verified, receivedBytes: received.length,
    equalsSignedBody: received.equals(Buffer.from(compact, 'utf8')) }));
});
server.listen(0, '127.0.0.1');
await once(server, 'listening');
const results = [];
try {
  for (const [name, body, expected] of [
    ['Original serialized body', compact, true],
    ['Same JSON, pretty-printed', spaced, false],
  ]) {
    const response = await fetch(`http://127.0.0.1:${server.address().port}${path}`, {
      method: 'POST', body,
      headers: { 'content-type': 'application/json', 'x-demo-timestamp': timestamp,
        'x-demo-signature': signature },
    });
    const result = await response.json();
    assert.equal(result.verified, expected);
    assert.equal(result.equalsSignedBody, expected);
    assert.equal(result.receivedBytes, Buffer.byteLength(body, 'utf8'));
    results.push({ name, ...result });
  }
  console.log(JSON.stringify({ node: process.version, openSSL: process.versions.openssl,
    parsedObjectsEqual: true, requests: results, externalRequests: 0,
    privateKeysPersisted: false }, null, 2));
} finally {
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
}
