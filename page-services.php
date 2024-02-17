<?php get_header() ?>

<main id="main">
  <?php  
    get_template_part( "template-parts/hero-section" );

    get_template_part( "template-parts/featured-services" );

    get_template_part( 'template-parts/blog' ) ;

    get_template_part( 'template-parts/features' ) ;

    get_template_part( 'template-parts/testimonials' ) ;
  ?>
</main>

<?php get_footer() ?>