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
		});

		$('.duplicator').bind('construct', function(event, instance) {
			$(instance).find('select').symphonySelectbox({
				mode: 'tiny'
			});
		});

		$('input[type="checkbox"]').symphonyCheckbox();

	});


})(jQuery.noConflict());
