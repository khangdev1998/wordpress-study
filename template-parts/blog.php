 <!-- ======= Services Section ======= -->
 <section id="service" class="services pt-0">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <span>My blog</span>
        <h2>My blog</h2>
      </div>

      <!-- row -->
      <div class="row gy-4">
        <?php
        $args = array(
            'posts_per_page' => 6, // Số lượng bài viết bạn muốn hiển thị
            // 'category_name' => 'your-category-slug', // Thêm dòng này nếu bạn muốn lọc bài viết theo danh mục
        );

        $query = new WP_Query($args);

        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
        ?>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="card">
            <div class="card-img">
              <?php
              if (has_post_thumbnail()) {
                  the_post_thumbnail('full', array('class' => 'img-fluid'));
              } else {
                  // Nếu bài viết không có ảnh đại diện, sử dụng ảnh mặc định
                  echo '<img src="' . MYTHEME_IMG_DIR . '/storage-service.jpg" alt="" class="img-fluid">';
              }
              ?>
            </div>
            <h3><a href="<?php the_permalink(); ?>" class="stretched-link"><?php the_title(); ?></a></h3>
            <span><?php the_excerpt(); ?></span>
          </div>
        </div><!-- End Card Item -->
        <?php
      endwhile;
      wp_reset_postdata();
  else :
  ?>
        <p>No posts found.</p>
        <?php endif; ?>
      </div>
      <!-- row -->

    </div>
  </section><!-- End Services Section -->