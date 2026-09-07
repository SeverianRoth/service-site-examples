# Implementation and provenance

These service-site demos use WordPress 7.1 and the official Twenty Twenty-Five 1.5 parent theme, both GPL-2.0-or-later. The maintained WordPress Playground runtime loads the included blueprints with PHP 8.3. Small child themes supply layout, styling and browser interactions. WordPress supplies the CMS and editing environment.

The 3D service example uses original SVG illustrations and a portfolio filter. The equipment and intake examples adapt existing project-owned layout foundations with fictional sample branding. Each is a homepage and enquiry VERTICAL SLICE. Form actions preview sample state locally.

Sources: https://wordpress.org/download/releases/ ; https://wordpress.org/themes/twentytwentyfive/ ; https://developer.wordpress.org/themes/advanced-topics/child-themes/ ; https://wordpress.github.io/wordpress-playground/blueprints/using-blueprints/ .

WordPress and Twenty Twenty-Five are actively maintained official projects; the pinned theme was updated 20 May 2026 and WordPress 7.1 released 2 September 2026. Playground is an actively maintained official hosted runtime without a user-pinnable hosted deployment version. Rendering checks reuse Playwright 1.60.0 (Apache-2.0) and headless Chromium. All three actual WordPress instances and their sample interactions were exercised before publication.

The Welter homepage concept and fictional Open Table nonprofit example reuse the same pinned WordPress child-theme builder. Both are homepage VERTICAL SLICE examples, with project filtering, a donation-choice preview or volunteer routing. Welter images load from the foundation's existing public image URLs; those third-party images are not included in the GPL code license. The Open Table illustration is original SVG.
