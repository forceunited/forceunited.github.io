$(document).ready(function(){
    /* Loader hide uglies */
    $(document).on( "ready",function() {
		setTimeout(function(){$(".loader").fadeOut(100)},1550);
		setTimeout(function(){$(".preloader").addClass("unavailable")},1800);
		setTimeout(function(){$(".preloader").addClass('invisible')},2300);
    });

    /* Parallax Setup */
    var layers = document.getElementById('parallax');
    var parallaxInstance = new Parallax(layers, {
        scalarX: 25,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
        calibrateX: false,
    });

    /* Countdown Timer */
	$(".countdown").each(function() {
		$('.countdown').countdown({
			//Set your target date here!
			day: 1,
			month: 4,
      year: 2018,
    

			onChange: function(evt) {
				m3dAnimate($('.digits span'));
			}
		});
		function m3dAnimate($el) {
			$el.each( function() {
				var $this = $(this),
					fieldText = $this.text(),
					fieldData = $this.attr('data-value'),
					fieldOld = $this.attr('data-old');

				if (typeof fieldOld === 'undefined') {
					$this.attr('data-old', fieldText);
				}
				if (fieldText != fieldData) {
					$this
						.attr('data-value', fieldText)
						.attr('data-old', fieldData)
						.addClass('animate');

					window.setTimeout(function() {
						$this.removeClass('animate')
							.attr('data-old', fieldText);
					}, 300);
				}
			});
		};
    });
});
