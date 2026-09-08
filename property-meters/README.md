# Property and connected meters

Interactive example by Severian Roth. Select a property, inspect its meters, and add or disconnect a sample meter. All example data stays in browser memory.

This is a small React Flow demonstration for the parent-property and connected-meter view requested in the Bubble forum. Existing Bubble records are not accessed. The proposed customer implementation uses the buyer's existing Enhancio ReactFlow plugin.

Reuses the original project built and tested on 7 September: @xyflow/react 12.11.6, React/react-dom 19.2.8 and esbuild 0.28.2, all MIT licensed and pinned in the included lockfile. Existing implementation and native Windows dependencies were reused; no library replacement or paid plugin installation. The commercial Enhancio plugin is not included. Native Windows Chrome checks passed: correct connected meters, click details, add/remove, property switching, empty state and mobile layout; no page errors.

Open index.html in a browser. For the included source, npm ci followed by npm run build generates dist/index.html. Original project-owned source is MIT licensed. Third-party notices are provided in THIRD-PARTY-LICENSES.txt.
