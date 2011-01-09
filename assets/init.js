(function($) {

	$(document).ready(function() {

		var s = $("select");

		s.each(function() {
			if ($(this).parents('.duplicator').length > 0 || $(this).parents('.actions').length > 0) {
				$(this).symphonySelectbox({
					mode: 'tiny'
				});
			}
			else {
				$(this).symphonySelectbox();
			}
		});

		$('#context').change(function() {
			$('.contextual .duplicator select').each(function() {
				this.selectbox.initialize();
			});
		});

	});


})(jQuery.noConflict());
