# Fieldnotes — editorial subheads

Small working proof for a WordPress brief requesting one editable subhead displayed on both the magazine listing and the full article.

Open the WordPress preview, select **Edit featured subhead**, change the **Subtitle** field and update the post. Return to the magazine and open the story to see the same saved value. The preview has three example posts. The fast HTML pages are previews; editing runs in the WordPress instance.

## Reuse and scope

- WP Subtitle **3.4.2**, GPLv2, official package: https://downloads.wordpress.org/plugin/wp-subtitle.3.4.2.zip . Package SHA-256: `51e8549a7480a0836b556f2fe438cbc68bace6be5a3af7ec95e943c7da1f4bda`. WordPress.org lists 10,000+ installations and an update six months before this check. Its maintained field, save handling and public subtitle API are reused without modification.
- Twenty Twenty-Five **1.5**, GPLv2 or later, supplies the parent theme. The small child theme owns the editorial layout and calls WP Subtitle’s existing retrieval filter.
- WordPress **7.1**, PHP **8.3**; the included blueprints reproduce the example. The demo enables the classic post editor to show the Subtitle field directly below the title.
- The deliverable is the subtitle behavior and display adapter. Integration with the buyer’s Enfold Magazine element needs the buyer’s existing theme and staging site. No Enfold source is bundled, and Enfold compatibility is not claimed as tested. Other plugin repairs in that brief need the installed plugins and reproducible faults.

Source: `theme-source/`. Installable child theme: `theme.zip`. Child-theme source is supplied under GPLv2 or later. Upstream plugins and the parent theme are downloaded from WordPress.org by the blueprint and retain their licenses.
