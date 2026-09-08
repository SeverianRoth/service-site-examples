# FlipsAura discovery concept

Small frontend proof for the public freelance marketplace brief. Category and city filters compose; sorting retains both filters. A selected vendor carries into an enquiry with date, guest count and event type. This local preview sends no message, makes no booking and stores no personal information. All vendor names, prices and artwork are original sample data.

Reuse: adapts this repository's existing `modeling/app.js` category-filter and `FormData` enquiry-preview patterns (source commit `bc553205187a069f1169193b9a32629917b8e9ef`), plus native HTML controls, constraint validation and DOM APIs. No library is required for this small interaction. Existing project-owned code is reused; no third-party assets are bundled. There is no replacement marketplace backend or claim of completed production integration. The proposed paid work applies the category correction to the buyer's current Next.js code and existing data/API path after access.

Current site inspection on 8 September 2026 showed catering, photography and makeup entries alongside a banquet listing under `/categories/venues`. This is an observed rendered result, not a claim about its unseen code. The prototype demonstrates the intended category behavior independently.
