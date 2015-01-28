<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php wp_title() ?></title>
    <link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" />
    <link rel="stylesheet" href="<?php echo bloginfo( 'template_directory' ) . '/stylesheets/application.css'; ?>">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <?php wp_head(); ?>
</head>
<!-- Start of Body -->
<body>
