<?php get_sidebar(); ?>

<footer role="contentinfo">
	<p>&copy;<?php echo date("Y"); ?> <a href="#top" title="Jump back to top">&#8593;</a></p>
</footer>

<?php wp_footer(); ?>

<!-- Scripts -->
<script src="<?php echo bloginfo('template_directory'); ?>/bower_components/jquery/dist/jquery.min.js"></script>
<script src="<?php echo bloginfo('template_directory'); ?>/bower_components/respond/dest/respond.min.js"></script>
<script src="<?php echo bloginfo('template_directory'); ?>/js/pohl.js"></script>

<!-- Scripts -->

<?php if ( is_singular() ) wp_print_scripts( 'comment-reply' ); ?>
</body>
</html>