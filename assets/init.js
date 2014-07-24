(function($) {

	$(document).ready(function() {

		$("select").each(function() {
			if ($(this).parents('.controls').length > 0 || $(this).parents('.actions').length > 0) {
				$(this).symphonySelectbox({
					mode: 'tiny'
				});
			}
			else {
				$(this).symphonySelectbox();
			}
		});

		$('input[type="checkbox"]').symphonyCheckbox();

		$('#context').change(function() {
			$('.contextual select').each(function() {
				if ($(this).parents('.controls').length > 0) {
					$(this).symphonySelectbox({
						mode: 'tiny'
					});
				}
				else {
					$(this).symphonySelectbox();
				}
			});
			$('.contextual input[type="checkbox"]').symphonyCheckbox();
		});

		$('.duplicator').bind('construct', function(event, instance) {
			$(instance).find('select').symphonySelectbox();
			$(instance).find('input[type="checkbox"]').symphonyCheckbox();
		});



	});


})(jQuery);
