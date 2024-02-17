  <!-- ======= Frequently Asked Questions Section ======= -->
  <section id="faq" class="faq">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <span><?php echo esc_html( get_field('faq_caption') ); ?></span>
        <h2><?php echo esc_html( get_field('faq_caption') ); ?></h2>
      </div>

      <?php if ( have_rows( 'accordion_content' ) ): ?>
      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-10">
          <div class="accordion accordion-flush" id="faqlist">
            <?php while ( have_rows( 'accordion_content' ) ) : the_row(); ?>
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#faq-content-<?php echo get_row_index(); ?>">
                  <i class="bi bi-question-circle question-icon"></i>
                  <?php echo esc_html( get_sub_field( 'faq_question' ) ); ?>
                </button>
              </h3>
              <div id="faq-content-<?php echo get_row_index(); ?>" class="accordion-collapse collapse"
                data-bs-parent="#faqlist">
                <div class="accordion-body">
                  <?php echo wp_kses_post( get_sub_field( 'faq_answer' ) ); ?>
                </div>
              </div>
            </div><!-- # Faq item-->
            <?php endwhile; ?>
          </div>
        </div>
      </div>
      <?php endif; ?>
    </div>
  </section><!-- End Frequently Asked Questions Section -->