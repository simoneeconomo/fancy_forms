(function($) {

	$.fn.symphonySelectbox = function(custom_settings) {
		var objects = this;
		var settings = {
			mode: '',
			ignore: 'div.field-subsectionmanager, div.contextual.irrelevant',
			delay_initialize: false,
		};

		$.extend(settings, custom_settings);

	/*-----------------------------------------------------------------------*/

		objects = objects.map(function() {
			var object = this;

			var select = function(event) {
				var selectbox = $(this).parents('.selectbox');
				var value = $(this).find('span').attr('class').replace('value-', '');
				var option = object.find('option[value="' + value + '"]');
				var span = $(this).find('span');

				if (!selectbox.hasClass('multiple')) {
					selectbox.find('li.selected').removeClass('selected');
					selectbox.find('span.value').html(option.text());
				}

				option.attr('selected', !$(this).hasClass('selected'));
				$(this).toggleClass('selected');

				object.unbind('change.selectbox');
				object.trigger('change');
				object.bind('change.selectbox', update);
			};

			var update = function(event) {
				var select = $(this);
				var selectbox = select.siblings('.selectbox');
				var options = select.find('option');

				if (!select.attr('multiple')) {
					selectbox
						.find('span.value-' + options.filter(':selected').attr('value'))
						.parent('li')
						.trigger('click.selectbox');
				}
				else {
					options.each(function() {
						selectbox
							.find('span.value-' + $(this).attr('value'))
							.parent('li')
							.toggleClass('selected', $(this).is(':selected'));
					})
				}
			}

			var show = function() {
				var selectbox = $(this).parents('.selectbox');
				var values = selectbox.find('.values');
				var available = $(window).scrollTop() + $(window).height() - $(this).offset().top;

				available = available < 0 ? available * -1 : available;

				$('.selectbox.open').not(selectbox).each(function() {
					$(this).find('.current').trigger('click.selectbox');
				});

				if (available < 200) {
					values.queue(function() {
						selectbox.addClass('inverted');
						values.dequeue();
					});
					values.animate({
						height: 'toggle',
						marginTop: values.height() * -1
					}, 'fast', 'linear');
				}
				else {
					values.slideDown('fast');
				}

				selectbox.addClass('open');

				$(this).unbind('click.selectbox', show);
				$(this).bind('click.selectbox', hide);

				return false;
			}

			var hide = function() {
				var selectbox = $(this).parents('.selectbox');
				var values = selectbox.find('.values');
				var available = $(window).scrollTop() + $(window).height() - $(this).offset().top;

				available = available < 0 ? available * -1 : available;

				if (available < 200) {
					values.animate({
						height: 'toggle',
						marginTop: 0
					}, 'fast', 'linear',
					function() {
						selectbox.removeClass('inverted');
					});
				}
				else {
					values.slideUp('fast');
				}

				selectbox.removeClass('open');

				$(this).unbind('click.selectbox', hide);
				$(this).bind('click.selectbox', show);

				return false;
			}

		/*-------------------------------------------------------------------*/

			if (object instanceof $ === false) {
				object = $(object);
			}

			this.selectbox = {

				initialize: function() {
					if (object.parents(settings.ignore).length != 0) return false;
					if (object.siblings('.selectbox').length != 0)   return false;

					var div = {
							main: $('<div class="selectbox" />'), options: $('<div class="options" />'),
							values: { all: $('<div class="values" />'), current: $('<div class="current" />') }};
					var ul = { main: $('<ul />'), nested: null };
					var li = null;
					var a  = {};

					Symphony.Language.add({
						'Select all': false,
						'Deselect all': false
					});

					object.find('option, optgroup').each(function() {
						if ($(this).is('option')) {

							li = $('<li />')
								.addClass('value')
								.html('<span class="value-' + $(this).attr('value') + '">' + $(this).text() + '</span>');

							ul[$(this).parent().is('optgroup') ? 'nested' : 'main'].append(li);
						}
						else {

							li = $('<li />')
								.addClass('optgroup optgroup-' + $(this).index())
								.html('<strong>' + $(this).attr('label') + '</strong>');

							ul.nested = $('<ul />');
							ul.main.append(li.append(ul.nested));
						}
					});

					div.values.all.append(ul.main);
					div.main.append(div.values.all);
					div.main.insertAfter(object);

					if (object.attr('multiple')) {
						div.main.addClass('multiple');
						div.options.html('<a class="selectall" /> <a class="deselectall" />');
						div.main.append(div.options);

						a = {
							selectAll:   div.options.find('a.selectall').html(Symphony.Language.get('Select all')),
							deselectAll: div.options.find('a.deselectall').html(Symphony.Language.get('Deselect all')),
						};

						a.selectAll.click(function() {
							this.selectbox.selectAll();
						})

						a.deselectAll.click(function() {
							this.selectbox.deselectAll();
						})

					}
					else {
						if (settings.mode != '')
							div.main.addClass(settings.mode);

						div.values.current
							.append('<span class="value" /><span class="arrow" />')
							.find('span.value')
							.html(object.find('option:selected').text());

						div.main.prepend(div.values.current);

						div.values.all.addClass('rendering');
						div.values.current.css('width', div.values.all.width());
						div.values.all.removeClass('rendering');
						div.values.all.hide();
					}

					/* Event handlers */

					div.values.current.bind('click.selectbox', show);
					div.values.all.find('li.value').bind('click.selectbox', select);
					object.bind('change.selectbox', update);

					object.trigger('change.selectbox');
					object.hide();

					$('body').click(function(event) {
						if ($(event.target).parents('.selectbox.open').index() == -1)
							object.siblings('.selectbox.open').find('.current').trigger('click.selectbox');
					});
				},

				selectAll: function() {
					var selectbox = object.siblings('.selectbox');

					if (!selectbox.hasClass('multiple')) return;
					selectbox.find('li.value:not(.selected)').trigger('click.selectbox');
				},

				deselectAll: function() {
					var selectbox = object.siblings('.selectbox');

					selectbox.find('li.value.selected').trigger('click.selectbox');
				}

			};

			if (settings.delay_initialize !== true) {
				this.selectbox.initialize();
			}

			return object;
		});

		return objects;
	};


})(jQuery.noConflict());
