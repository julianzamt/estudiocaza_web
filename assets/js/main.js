/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and ommercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

/* Agregados ZAMT */

/* Modal triggers de OBRAS */

$('a[href$="#jbjusto"]').on( "click", function() {
	$('#jbjusto').modal('show');
	});

$('a[href$="#tacuari"]').on( "click", function() {
	$('#tacuari').modal('show');
	});

$('a[href$="#bufano"]').on( "click", function() {
	$('#bufano').modal('show');
	});

$('a[href$="#malabia"]').on( "click", function() {
$('#malabia').modal('show');
});

$('a[href$="#3_de_febrero"]').on( "click", function() {
$('#3_de_febrero').modal('show');
});

$('a[href$="#rivadavia"]').on( "click", function() {
$('#rivadavia').modal('show');
});

$('a[href$="#ampliacion_jbj"]').on( "click", function() {
$('#ampliacion_jbj').modal('show');
});

$('a[href$="#bariloche"]').on( "click", function() {
$('#bariloche').modal('show');
});

$('a[href$="#latrilla"]').on( "click", function() {
$('#latrilla').modal('show');
});

$('a[href$="#reforma_tg"]').on( "click", function() {
$('#reforma_tg').modal('show');
});

$('a[href$="#falcon"]').on( "click", function() {
$('#falcon').modal('show');
});

$('a[href$="#bonifacio"]').on( "click", function() {
$('#bonifacio').modal('show');
});

$('a[href$="#gallo"]').on( "click", function() {
	$('#gallo').modal('show');
	});

$('a[href$="#venezuela"]').on( "click", function() {
	$('#venezuela').modal('show');
	});

$('a[href$="#amenabar"]').on( "click", function() {
	$('#amenabar').modal('show');
	});

$('a[href$="#rivera"]').on( "click", function() {
	$('#rivera').modal('show');
	});

$('a[href$="#sucre"]').on( "click", function() {
	$('#sucre').modal('show');
	});

$('a[href$="#obligado"]').on( "click", function() {
	$('#obligado').modal('show');
	});

$('a[href$="#simon"]').on( "click", function() {
	$('#simon').modal('show');
	});

$('a[href$="#florida"]').on( "click", function() {
	$('#florida').modal('show');
	});

$('a[href$="#dickman"]').on( "click", function() {
	$('#dickman').modal('show');
	});

$('a[href$="#consultorio"]').on( "click", function() {
	$('#consultorio').modal('show');
	});





