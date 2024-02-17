<?php get_header(); ?>

<?php 
// Đặt biến một lần trước loop
if ( has_post_thumbnail() ) {
    $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
    set_query_var('hero_image_url', $thumbnail_url);
}
$title = get_the_title();
set_query_var('hero_title', $title);

get_template_part('template-parts/hero-section');
?>

<?php if ( have_posts() ) : ?>
<div class="container-custom">
  <?php while ( have_posts() ) : the_post(); ?>
  <article class="post my-5">
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
    <div>
      <span>Published on: <?php echo get_the_date(); ?></span>
      <span>Author: <?php echo get_the_author(); ?></span>
    </div>
  </article>
  <?php endwhile; ?>
</div>
<?php else : ?>
<p>No post found.</p>
<?php endif; ?>

<?php get_footer(); ?>