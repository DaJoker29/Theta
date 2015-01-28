<!-- Start of Sidebar -->
<div class="sidebar">
    <!-- Header -->
    <header class="site-header">
        <a href="<?php bloginfo( 'url' ); ?>"p><h2 class="site-title"><?php bloginfo( 'name' ); ?></h2></a>
        <!-- <span class="site-tagline">Connect. Develop. Evolve.</span> -->
    </header>
    <!-- Nav -->
    <?php 
        $args = array(
            'container' => 'nav',
            'menu_class' => 'site-nav',
            'depth' =>  1,
            'before' => '<li class="nav-link">',
            'after' => '</li>'
        );

        wp_nav_menu($args); 

    ?>
</div>
<!-- End of Sidebar -->