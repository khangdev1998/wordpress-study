<?php
// Khai báo hằng số gốc thư mục
define('MYTHEME_DIR', get_template_directory());
define('MYTHEME_URL', get_template_directory_uri());
define('MYTHEME_CSS_DIR', MYTHEME_URL . '/css');
define('MYTHEME_IMG_DIR', MYTHEME_URL . '/images');
define('MYTHEME_JS_DIR', MYTHEME_URL . '/build');
define('MYTHEME_VENDOR_DIR', MYTHEME_URL . '/vendor');

// Connect file stlye css
function web_enqueue_styles() {
    // Google Fonts
    wp_enqueue_style('web-google-fonts', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap', array(), null);

    // Vendor CSS Files
    wp_enqueue_style('web-bootstrap', MYTHEME_VENDOR_DIR . '/bootstrap/css/bootstrap.min.css', array(), '5.0.0');
    wp_enqueue_style('web-bootstrap-icons', MYTHEME_VENDOR_DIR . '/bootstrap-icons/bootstrap-icons.css', array(), '1.4.0');
    wp_enqueue_style('web-fontawesome', MYTHEME_VENDOR_DIR . '/fontawesome-free/css/all.min.css', array(), '5.15.3');
    wp_enqueue_style('web-glightbox', MYTHEME_VENDOR_DIR . '/glightbox/css/glightbox.min.css', array(), '3.0.1');
    wp_enqueue_style('web-swiper', MYTHEME_VENDOR_DIR . '/swiper/swiper-bundle.min.css', array(), '6.5.0');
    
    // Template Main CSS File
    wp_enqueue_style('web-main-style', MYTHEME_CSS_DIR . '/main.css', array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'web_enqueue_styles');

// Connect files js
function web_enqueue_script() {
    wp_enqueue_script('web-bootstrap', MYTHEME_VENDOR_DIR . '/bootstrap/js/bootstrap.bundle.min.js', array('jquery'), '5.0.0', true);
    wp_enqueue_script('web-purecounter', MYTHEME_VENDOR_DIR . '/purecounter/purecounter_vanilla.js', array(), '1.0.0', true);
    wp_enqueue_script('web-glightbox', MYTHEME_VENDOR_DIR . '/glightbox/js/glightbox.min.js', array(), '3.0.1', true);
    wp_enqueue_script('web-swiper', MYTHEME_VENDOR_DIR . '/swiper/swiper-bundle.min.js', array(), '6.5.0', true);
    wp_enqueue_script('web-aos', MYTHEME_VENDOR_DIR . '/aos/aos.js', array(), '2.3.1', true);
    wp_enqueue_script('web-php-email-form', MYTHEME_VENDOR_DIR . '/php-email-form/validate.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script( 'main-js', MYTHEME_JS_DIR . '/index.js', array('jquery'), '1.0.0', true );
}
add_action('wp_enqueue_scripts', 'web_enqueue_script');

// Register menu
function my_custom_theme_setup() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
    register_nav_menu('footer-page', __('Footer Menu Page'));
    register_nav_menu('footer-blog', __('Footer Menu Blog'));
}
add_action( 'after_setup_theme', 'my_custom_theme_setup' );

// Register widgets
function my_custom_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'text-domain' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'text-domain' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'my_custom_widgets_init' );

// Thêm Mã Kích Hoạt Ảnh Đại Diện
function theme_setup() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'theme_setup' );

// Custom css editor post
function mytheme_add_editor_styles() {
    add_theme_support( 'editor-styles' ); // Bật tính năng style cho editor
    add_editor_style( 'edit.css' ); // Tên file CSS mà bạn muốn sử dụng cho trình soạn thảo
}
add_action( 'after_setup_theme', 'mytheme_add_editor_styles' );

// Breadcrums
function mytheme_breadcrumbs() {
    // Khởi tạo biến $breadcrumbs là mảng rỗng
    $breadcrumbs = array();
    
    // Thêm trang chủ
    $breadcrumbs[] = '<li><a href="' . home_url() . '">Home</a></li>';
    
    // Kiểm tra nếu không phải là trang chủ
    if (!is_front_page()) {
        // Thêm tiêu đề của trang hiện tại
        $breadcrumbs[] = '<li>' . get_the_title() . '</li>';
    }
    
    // Chuyển mảng thành chuỗi và in ra
    echo '<ol>' . implode('', $breadcrumbs) . '</ol>';
}

// Nav menu custom li a, thêm một class vào mục menu chỉ định
function add_specific_menu_location_atts( $atts, $item, $args ) {
    // Kiểm tra xem mục menu này có phải là mục cuối cùng không
    if (is_a($item, 'WP_Post') && in_array('active-quote', $item->classes)) {
        $atts['class'] = 'get-a-quote';
    }
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3 );

// Kiểm tra xem menu của wordpress nào có submenu nó sẽ thêm icon vào item đó
function add_arrow_to_menu_item($title, $item) {
    if (in_array('menu-item-has-children', $item->classes)) {
      $title = $title . '<i class="bi bi-chevron-down dropdown-indicator"></i>';
    }
    return $title;
  }
  add_filter('nav_menu_item_title', 'add_arrow_to_menu_item', 10, 4);
// Cách 2 dùng class #header-menu .menu-item-has-children > a:after {}

// test
function mytheme_footer_widgets_init() {
    register_sidebar( array(
        'name'          => 'Footer Desc',
        'id'            => 'footer_desc',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'mytheme_footer_widgets_init' );

?>