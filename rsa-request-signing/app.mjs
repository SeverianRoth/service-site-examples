const enc = new TextEncoder();
const el = id => document.getElementById(id);
const bytes = (body, path, timestamp) => enc.encode(body + path + timestamp);
const rsa = { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' };
let keyPair;

async function run() {
  el('run').disabled = true;
  el('summary').textContent = 'Signing and verifying sample requests…';
  el('results').replaceChildren();
  el('count').textContent = '— / 8';
  window.sampleResult = undefined;
  try {
    const body = el('body').value, path = el('path').value, timestamp = el('timestamp').value;
    JSON.parse(body);
    if (!path.startsWith('/') || !/^\d{10}$/.test(timestamp)) throw new Error('Use a path beginning with / and a 10-digit timestamp in seconds.');
    el('payload').textContent = body + path + timestamp;
    keyPair ||= await crypto.subtle.generateKey(rsa, false, ['sign', 'verify']);
    const payload = bytes(body, path, timestamp);
    const signature = await crypto.subtle.sign(rsa.name, keyPair.privateKey, payload);
    const check = (data, sig = signature, key = keyPair.publicKey) => crypto.subtle.verify(rsa.name, key, sig, data);
    const cases = [
      ['Original request', 'Exact signed bytes verify', await check(payload)],
      ['Added JSON whitespace', 'Same JSON value, changed bytes: rejected', !await check(bytes(body + ' ', path, timestamp))],
      ['Changed request body', 'Altered content: rejected', !await check(bytes('{"changed":' + body + '}', path, timestamp))],
      ['Changed endpoint path', 'Path mismatch: rejected', !await check(bytes(body, path + '/changed', timestamp))],
      ['Milliseconds instead of seconds', 'Timestamp mismatch: rejected', !await check(bytes(body, path, timestamp + '000'))],
    ];
    const doubleHashSignature = await crypto.subtle.sign(rsa.name, keyPair.privateKey, await crypto.subtle.digest('SHA-256', payload));
    cases.push(['Accidental double hashing', 'Pre-hashed payload: rejected', !await check(payload, doubleHashSignature)]);
    const wrongKey = await crypto.subtle.generateKey(rsa, false, ['sign', 'verify']);
    cases.push(['Different public key', 'Key-pair mismatch: rejected', !await check(payload, signature, wrongKey.publicKey)]);
    const response = await fetch('conformance-vector.json');
    if (!response.ok) throw new Error('Cross-runtime verification sample could not load.');
    const fixture = await response.json();
    const decode = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const spki = decode(fixture.publicKey.replace(/-----(?:BEGIN|END) PUBLIC KEY-----|\s/g, ''));
    const fixtureKey = await crypto.subtle.importKey('spki', spki, rsa, false, ['verify']);
    cases.push(['Node.js → browser verification', 'Independent backend signature: verified', await check(bytes(fixture.body, fixture.path, fixture.timestamp), decode(fixture.signature), fixtureKey)]);
    for (const [name, detail, passed] of cases) {
      const row = document.createElement('li');
      if (!passed) row.className = 'fail';
      const mark = document.createElement('span'); mark.className = 'mark'; mark.textContent = passed ? '✓' : '!';
      const text = document.createElement('div'), title = document.createElement('strong'), note = document.createElement('small');
      title.textContent = name; note.textContent = detail; text.append(title, note); row.append(mark, text); el('results').append(row);
    }
    const passed = cases.filter(c => c[2]).length;
    el('count').textContent = passed + ' / 8';
    el('summary').textContent = passed + ' of 8 checks passed · local cryptographic verification';
    window.sampleResult = { passed, total: 8, cases: cases.map(([name, detail, pass]) => ({name, detail, pass})) };
  } catch (error) {
    el('summary').textContent = error.message;
    window.sampleResult = { error: error.message };
  } finally { el('run').disabled = false; }
}
el('run').addEventListener('click', run);
