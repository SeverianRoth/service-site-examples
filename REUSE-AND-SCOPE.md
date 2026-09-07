# Implementation and provenance

These service-site demos use WordPress 7.1 and the official Twenty Twenty-Five 1.5 parent theme, both GPL-2.0-or-later. The maintained WordPress Playground runtime loads the included blueprints with PHP 8.3. Small child themes supply layout, styling and browser interactions. WordPress supplies the CMS and editing environment.

The 3D service example uses original SVG illustrations and a portfolio filter. The equipment and intake examples adapt existing project-owned layout foundations with fictional sample branding. Each is a homepage and enquiry VERTICAL SLICE. Form actions preview sample state locally.

Sources: https://wordpress.org/download/releases/ ; https://wordpress.org/themes/twentytwentyfive/ ; https://developer.wordpress.org/themes/advanced-topics/child-themes/ ; https://wordpress.github.io/wordpress-playground/blueprints/using-blueprints/ .

WordPress and Twenty Twenty-Five are actively maintained official projects; the pinned theme was updated 20 May 2026 and WordPress 7.1 released 2 September 2026. Playground is an actively maintained official hosted runtime without a user-pinnable hosted deployment version. Rendering checks reuse Playwright 1.60.0 (Apache-2.0) and headless Chromium. All three actual WordPress instances and their sample interactions were exercised before publication.

The Welter homepage concept and fictional Open Table nonprofit example reuse the same pinned WordPress child-theme builder. Both are homepage VERTICAL SLICE examples, with project filtering, a donation-choice preview or volunteer routing. Welter images load from the foundation's existing public image URLs; those third-party images are not included in the GPL code license. The Open Table illustration is original SVG.

The STEEL-ONE homepage concept reuses the same pinned WordPress child-theme builder and project-owned styles. It is a homepage and project-brief VERTICAL SLICE with an original architectural SVG illustration, project selection and a local enquiry preview. All four responsive widths and the actual WordPress project-brief interaction passed before publication.

The Triple Double homepage is an original HTML/CSS/JavaScript design VERTICAL SLICE. It reuses the native Playwright rendering workflow and uses psd-tools 1.19.0 (MIT, published 2 September 2026) with Pillow 12.3.0 (MIT-CMU, published 1 July 2026) to package named rendered components into layered PSDs. Both maintained upstream packages were verified through PyPI and official documentation; no custom PSD encoder was implemented. Company photography loads from its public portfolio URLs and is outside the code license. Each breakpoint PSD includes its typography, palette and button specifications; editable text and layout remain in the included frontend source.
