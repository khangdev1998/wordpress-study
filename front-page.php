<?php get_header() ?>

<main id="main">
  <?php  
    get_template_part( "template-parts/hero-homepage" );

    get_template_part( "template-parts/featured-services" );

    get_template_part( 'template-parts/about-us' ) ;

    get_template_part( 'template-parts/blog' ) ;

    get_template_part( 'template-parts/call-to-action' ) ;

    get_template_part( 'template-parts/features' ) ;

    get_template_part( 'template-parts/testimonials' ) ;

    get_template_part( 'template-parts/faq' ); 
  ?>
</main>

<?php get_footer() ?>