<?php 

   /**
    * Enqueue scripts
    *
    * @param string $handle Script name
    * @param string $src Script url
    * @param array $deps (optional) Array of script names on which this script depends
    * @param string|bool $ver (optional) Script version (used for cache busting), set to null to disable
    * @param bool $in_footer (optional) Whether to enqueue the script before </head> or before </body>
    */
   function theta_scripts() {
       wp_enqueue_script( 'main', get_template_directory_uri() . '/script.js', array( 'jquery' ), false, true);
   }

   add_action( 'wp_enqueue_scripts', 'theta_scripts' );

   /**
    * Add .btn class to Edit Link
    * 
    * 
    */

    function theta_edit_post_link($output) {
        $output = str_replace('class="post-edit-link"', 'class="post-edit-link btn"', $output);
        return $output;
    }

    add_filter('edit_post_link', 'theta_edit_post_link' );
?>