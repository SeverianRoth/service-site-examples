# RSA request signing work sample

An original, runnable local sample of exact-byte RSA request signing. Open the page, run the eight checks, and change the sample JSON to try another request. The private test key exists only in memory. The downloadable Node.js sample uses the built-in OpenSSL-backed `node:crypto` module; the interactive page uses browser Web Crypto. No hand-written cryptography or external package is used.

The sample assembles UTF-8 request body + endpoint path + seconds timestamp, then signs with RSA-SHA256 / PKCS#1 v1.5. Whitespace, changed content/path/timestamp, double hashing and a wrong public key all invalidate the original signature. A separate Node.js signature is verified by the browser.

The concatenation format follows the public [BIGO access-guide reference](https://github.com/yothen/Bigo-Open-Api/tree/a2cf90217af47b7ba246a3d19b7d689620f104e0). That repository's official affiliation is unverified. The store's supplied reseller documentation is the source for its actual integration. This sample does not contact BIGO or demonstrate a live recharge.

Run the backend checks with `node --test signing.test.mjs`. Run `node make-vector.mjs` to generate a new public verification sample without persisting its private key. Serve this folder over localhost or HTTPS to run the page.

Reuse: the small adapter wraps [Node.js crypto](https://nodejs.org/api/crypto.html) and [Web Crypto](https://www.w3.org/TR/WebCryptoAPI/), using their RSA implementations. Node.js is maintained and MIT licensed, with OpenSSL's separately bundled license. Verified with Node.js 22.14.0 / OpenSSL 3.0.15+quic, Chrome 153.0.8010.28, and an independent OpenSSL 3.0.13 command-line verifier. [Test report](test-report.json): eight backend checks and eight browser checks passed; four responsive widths checked. No code from the unlicensed reference repository is copied or bundled. The remaining store work uses the existing WooCommerce order model and its bundled Action Scheduler after reviewing the actual plugin and supplied API docs.

Original sample source by Severian Roth, 2026. MIT License: permission is granted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this sample, provided this notice is included. The sample is provided without warranty.
