(function($) {

	$.fn.symphonyCheckbox = function(custom_settings) {
		var objects = this;
		var settings = {
			ignore: 'div.contextual.irrelevant, table.selectable',
			delay_initialize: false,
		};

		$.extend(settings, custom_settings);

	/*-----------------------------------------------------------------------*/

		objects = objects.map(function() {
			var object = this;

			var click = function() {
				$(this).toggleClass('checked');
			}

			var update = function() {
				var checkbox = $(this).siblings('.checkbox');

				checkbox.toggleClass('checked', $(this).is(':checked'));
			}

		/*-------------------------------------------------------------------*/

			if (object instanceof $ === false) {
				object = $(object);
			}

			object.checkbox = {

				initialize: function() {
					if (object.parents(settings.ignore).length != 0) return false;
					if (object.siblings('.checkbox').length != 0)
						object.siblings('.checkbox').remove();

					var div = {
							main: $('<div class="checkbox" />'),
							value: $('<div class="value" />')
					};

					Symphony.Language.add({
						'Select all': false,
						'Deselect all': false
					});

					div.main.append(div.value);
					div.main.insertAfter(object);

					if (object.is(':checked')) div.main.addClass('checked');

					/* Event handlers */

					div.main.bind('click.checkbox', click);
					object.bind('change.checkbox', update);

					object.parent().click(function(event) {
						event.preventDefault();
					})
				},

				check: function() {
					object.attr('checked', true);
				},

				uncheck: function() {
					object.attr('checked', false);
				}

			};

			if (settings.delay_initialize !== true) {
				object.checkbox.initialize();
			}

			return object;
		});

		return objects;
	};


})(jQuery.noConflict());
