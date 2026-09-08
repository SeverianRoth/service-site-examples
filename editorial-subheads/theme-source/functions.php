<?php
add_action('wp_enqueue_scripts',function(){wp_enqueue_style('sr-editorial',get_stylesheet_uri(),array(),'1.0.0');});
add_filter('show_admin_bar','__return_false');
// This demonstration uses the classic editor so the existing Subtitle field is visible directly beneath the title.
add_filter('use_block_editor_for_post','__return_false');
function sr_editorial_subtitle($id){
    $text=apply_filters('plugins/wp_subtitle/get_subtitle','',array('post_id'=>$id));
    return $text!==''?'<p class="subtitle" data-subtitle="'.absint($id).'">'.esc_html(wp_strip_all_tags($text)).'</p>':'';
}
add_shortcode('sr_editorial',function(){
    ob_start();
    $home=home_url('/');
    ?><div class="proofbar"><span>WORDPRESS DEMO · Severian Roth</span><a href="<?php echo esc_url(admin_url('post.php?post=101&action=edit')); ?>" data-edit-subhead>Edit featured subhead ↗</a></div><div class="shell"><header class="masthead"><a class="brand" href="<?php echo esc_url($home); ?>">FIELDNOTES</a><span>IDEAS, WITH A LITTLE MORE CONTEXT</span></header><?php
    if(is_single()){
        $id=get_queried_object_id();
        ?><main class="article"><a class="back" href="<?php echo esc_url($home); ?>">← Back to the magazine</a><p class="eyebrow">The journal / Editorial</p><h1><?php echo esc_html(get_the_title($id)); ?></h1><?php echo sr_editorial_subtitle($id); ?><div class="prose"><?php echo wpautop(wp_kses_post(get_post_field('post_content',$id))); ?></div></main><?php
    }else{
        ?><main><section class="intro"><div class="eyebrow">The editorial workflow</div><h1>Give every story<br>a second line.</h1><p>A clear subhead travels with an article—from the magazine to the story. Write it once. Keep it connected.</p></section><div class="sectionline"><span>THE LATEST / 01—03</span><a href="<?php echo esc_url(admin_url('post.php?post=101&action=edit')); ?>" data-edit-subhead>Edit the featured subhead ↗</a></div><section class="magazine" aria-label="Magazine articles"><?php
        $q=new WP_Query(array('post_type'=>'post','post_status'=>'publish','post__in'=>array(101,102,103),'orderby'=>'post__in','posts_per_page'=>3));
        foreach($q->posts as $i=>$post){
            $id=$post->ID;$art=array('one','two','three')[$i];
            ?><article class="card <?php echo $i===0?'feature':''; ?>"><div class="art <?php echo esc_attr($art); ?>" aria-hidden="true"><span><?php echo esc_html(sprintf('%02d',$i+1)); ?></span></div><p class="eyebrow">Journal / <?php echo esc_html(array('Editorial','Practice','Perspective')[$i]); ?></p><h2><a data-article="<?php echo absint($id); ?>" href="<?php echo esc_url(get_permalink($id)); ?>"><?php echo esc_html(get_the_title($id)); ?></a></h2><?php echo sr_editorial_subtitle($id); ?><a class="read" href="<?php echo esc_url(get_permalink($id)); ?>">Read the story ↗</a></article><?php
        }
        wp_reset_postdata();
        ?></section><section class="note"><h2>One field. Both views.</h2><p>Edit the featured post’s Subtitle field, save it, then open the magazine and the full article. The same saved text appears beneath both titles.</p></section></main><?php
    }
    ?><footer class="footer"><span>FIELDNOTES · Editorial layout example</span><a href="https://severianroth.github.io/service-site-examples/editorial-subheads/theme.zip">Download the child theme ↗</a></footer></div><?php
    return ob_get_clean();
});
