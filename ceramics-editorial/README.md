# Ceramics editorial work sample

One small independent editorial exercise for the live Ceramics Now freelance editorial role. It contains a six-image selection, original draft and edited copy, source-backed captions and a WordPress handoff. It is not a published client assignment, an artist statement, or a replacement website for the publication.

Reuse: the existing portfolio's responsive document and download patterns are adapted using semantic HTML and native CSS. WordPress handoff uses maintained core image, heading and paragraph blocks; it adds no plugin or custom publishing engine. The existing working editorial-subheads example provides the separate WordPress implementation proof. The core blocks are verified with WordPress 7.1 (GPLv2 or later), via the existing official Playground runtime, rather than a new editor implementation.

Images and metadata: the official Cleveland Museum of Art Open Access API supplied four CC0 image/record pairs, and the Metropolitan Museum of Art Collection API supplied two explicitly public-domain Open Access image/record pairs. `sources.json` preserves object URLs, exact image URLs, image hashes, accessions and collection credits. Original museum images are included unchanged. The caption for Vase with face includes both makers from the Met's constituents list. Original editorial copy, layout and sequencing are by Severian Roth. No artist or museum endorsement is claimed.

`captions.csv` lists the six images in the intended page/social order. `wordpress-blocks.html` contains core WordPress blocks with matching captions and source links. The image files can be imported into the receiving publication's media library, replacing the sample URLs. `editorial-package.zip` contains the six images and these handoff files.
