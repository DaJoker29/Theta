<?php 
    set_include_path('./templates');
    include 'head.php';
    include 'sidebar.php';
    /*  Start of Content */
    include '$template-content.php'; //Replace $template with page name
    /*  End of Content */
    include 'footer.php';
    include 'scripts.php';
    include 'close.php';
?>