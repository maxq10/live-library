<?php

/**
 * @file
 * template.php
 */

// Add the meta viewport tag to every page
function library_bootstrap_theme_preprocess_html(&$vars) {
	$viewport = array(
	  '#tag' => 'meta', 
	  '#attributes' => array(
		'name' => 'viewport', 
		'content' => 'width=device-width, initial-scale=1.0, user-scalable=yes',
	  ),
	);
drupal_add_html_head($viewport, 'viewport');
} 

//Let's make images be responsive. After all, that's what we want...
 
 function library_bootstrap_theme_preprocess_image(&$vars) {
        $vars['attributes']['class'][] = 'img-responsive'; // http://getbootstrap.com/css/#overview-responsive-images
}