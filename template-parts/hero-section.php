<?php 
// Kiểm tra nếu đây là trang bài viết và sử dụng get_query_var nếu có
if (is_single() && get_query_var('hero_image_url')) {
    $image_url = get_query_var('hero_image_url');
} else {
    // Nếu không phải trang bài viết, sử dụng ảnh đại diện của trang
    $image_url = get_the_post_thumbnail_url(null, 'full');
}
?>
<!-- ======= Breadcrumbs ======= -->
<div class="breadcrumbs">
  <div class="page-header d-flex align-items-center"
    style="background-image: url('<?php echo esc_url($image_url); ?>');">
    <div class="container position-relative">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 text-center">
          <h2 class="title"><?php echo get_query_var('hero_title'); ?></h2>
        </div>
      </div>
    </div>
  </div>
  <nav>
    <div class="container">
      <?php mytheme_breadcrumbs(); ?>
    </div>
  </nav>
</div><!-- End Breadcrumbs -->