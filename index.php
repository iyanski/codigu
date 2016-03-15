<?php 
/**
 * The main template file
 * 
 *
 * @package Wired
 * @version 1.1.0
 */

include "header.php"; ?>

<div class="cd-loader">
    <div class="cd-loader-inner">
        <img src="img/cd-brand-light.svg" alt="" class="cd-loading-brand" width="100">
   </div>
</div>

<div id="primary" class="cd-primary">
	<header role="banner">
        <a href="#0">
        	<img src="img/cd-brand-dark.svg" alt="" class="cd-brand">
        </a>
    </header>

    <div class="cd-hero">
    	<h1 id="cd-hero-title" class="cd-hero-title cd-randomcode">Codigu&trade; &mdash; Building What's Next</h1>
    	<span class="cd-hero-desc">Press spacebar for more</span>
    </div>

    <footer class="cd-footer" role="contentinfo">
    	<span class="cd-footer-desc">Codigu&trade; &mdash; Building What's Next</span>
        <span class="cd-refresh-button"><img src="img/cd-refresh.svg" alt="" width="20" height="20"></span>
    </footer>
</div>

<?php include "footer.php" ?>