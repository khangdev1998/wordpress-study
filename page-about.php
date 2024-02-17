<?php get_header() ?>

<main id="main">
  <?php  
    get_template_part('template-parts/hero-section') ; 
     
    get_template_part('template-parts/about-us') ;

    get_template_part('template-parts/stats-counter') ;

    get_template_part('template-parts/our-team') ;

    get_template_part('template-parts/testimonials') ;

    get_template_part('template-parts/faq') ;
  ?>
</main>

<?php get_footer() ?>