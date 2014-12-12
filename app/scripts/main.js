var App = (function(){
	'use strict';

	$('html').scrollTop(0);

	// Sections
	var specBlock = $('.specialization'),
		portBlock = $('.portfolio'),
		aboutBlock = $('.about'),
		procBlock = $('.processes'),
		footerBlock = $('.main-footer');

	//Animations
	//Protfolio
	var tl = new TimelineMax({paused: true});
		tl.staggerFromTo($('.portfolio-li'), 1, {x: '200%', opacity: '0'}, {x: '0%', opacity: '1', ease:Circ.easeOut}, 0.2);
	//Processes
	var tl1 = new TimelineMax({paused: true});
		tl1.from($('.proc-ol'), 1, {x: '200%', opacity: '0'}, {x: '0%', opacity: '1', ease:Circ.easeOut}, 0.2);
	//Header animation
	var tl3 = new TimelineMax({paused: true});
		tl3.from($('.header-main-desc'), 0.6, {x: '200%', opacity: '0', ease:Circ.easeOut, delay: 0.4});

	var tl4 = new TimelineMax({paused: true});
		tl4.from($('.header-sec-desc'), 0.6, {x: '200%', opacity: '0', ease:Circ.easeOut, delay: 0.8});
	
	specBlock.add(portBlock).add(aboutBlock).add(procBlock).add(footerBlock).appear();

	tl3.restart();
	tl4.restart();

	specBlock.on('appear', function(event, $all_appeared_elements) {

		$(this).off();
	});
  	portBlock.on('appear', function(event, $all_appeared_elements) {
  		tl.restart();
		$(this).off();
	});
  	aboutBlock.on('appear', function(event, $all_appeared_elements) {

		$(this).off();
	});
  	procBlock.on('appear', function(event, $all_appeared_elements) {
  		tl1.restart();
		$(this).off();
	});
	footerBlock.on('appear', function(event, $all_appeared_elements) {
		$(this).off();
	});

	//Form behavior
	(function(){
		var $formStart = $('.js-show-form');
		var $overlay = $('.overlay');
		var $overlayClose = $('.overlay-close');

		var $form = $('.feedback-form form');
		var $formBtn = $form.find('.js-form-submit');
		var $fieldset = $form.find('fieldset');
		var $label = $form.find('label');
		var $textarea = $form.find('textarea');
		var $inputElem = $form.find('input, textarea');

		var tl1 = new TimelineMax({paused: true});
		tl1.to( $overlay, 0.6, { bottom: '0', ease:Circ.easeOut })
		   .to( $('body'), 0, { overflow: 'hidden' } )
		   .staggerFromTo($fieldset.add($formBtn), 1, {y: '-200%', opacity: '0'}, {y: '0%', opacity: '1', ease:Circ.easeOut}, 0.2);

		$(function(){
			$inputElem.each( function(){
				var $label = $(this).prev();

				if( $(this).val() != '' ) {
					$label.addClass('active');
				}
			});
		});

		//Form events
		$textarea.autosize();

		$formStart.click( function(){
			tl1.timeScale(1);
			tl1.restart();
		});

		$overlayClose.click( function(){
			tl1.timeScale(2);
			tl1.reverse();
		});

		$label.click( function(){
			var $nearInput = $(this).next();
			if($nearInput.val() == '') {
				$(this).addClass('active');
				$nearInput.focus();
			}
		});

		$inputElem.focus( function(){
			var $label = $(this).prev();
			$label.addClass('active');
		})

		$inputElem.focusout( function(){
			var $label = $(this).prev();

			if( $(this).val() == '' ) {
				$label.removeClass('active');
			}
		});

	})();
})();