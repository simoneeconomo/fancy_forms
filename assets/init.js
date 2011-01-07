(function($) {

	$(document).ready(function() {

		var s = $("select");

		if (s.parents('.duplicator').length > 0 || s.parents('.actions').length > 0) {
			s.symphonySelectbox({
				mode: 'tiny'
			});
		}
		else {
			s.symphonySelectbox();
		}

	});


})(jQuery.noConflict());
