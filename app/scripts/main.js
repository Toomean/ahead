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
		var timer,
			$formStart = $('.js-show-form'),
			$overlay = $('.overlay'),
			$overlayClose = $('.overlay-close'),

			$responseBlock = $('.feedback-response'),
			$form = $('.feedback-form form'),
			$formBtn = $form.find('.js-form-submit'),
			$fieldset = $form.find('fieldset'),
			$textarea = $form.find('textarea'),
			exitType = true;

		//Анимация появления формы со всеми полями
		var tl1 = new TimelineMax({paused: true});
		tl1.to( $overlay, 0.6, { bottom: '0', ease:Circ.easeOut })
		   .to( $('body'), 0, { overflow: 'hidden' } )
		   .staggerFromTo($fieldset.add($formBtn), 1, {y: '-200%', opacity: '0'}, {y: '0%', opacity: '1', ease:Circ.easeOut}, 0.2);

		//Анимация скрытия полей и отображения ответного текста
		var tl2 = new TimelineMax({paused: true});
		tl2.staggerTo($fieldset.add($formBtn), .5, {y: '-400%', opacity: '0', ease:Circ.easeOut}, 0.05)
		   .to( $responseBlock, 1, { top: '0%', opacity: '1', ease:Circ.easeOut}, 0.05);

		//Анимация закрытия оверлея
		var tl3 = new TimelineMax({paused: true});
		tl3.to( $overlay, 0.6, { bottom: '100%', ease:Circ.easeOut })
		   .to( $responseBlock, 0.6, { top: '-100%', ease:Circ.easeOut, delay: 0.6 } )
		   .to( $('body'), 0, { overflow: 'visible' } );


		// Validation
		$('#register-form').validate({
			rules: {
				name: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: 'Обязательное поле',
				email: {
					required: 'Обязательное поле',
					email: 'Неверный формат. Попробуйте еще'
				}
			}
		});

		// Ajax email
		(function(){
			//Get the form
			var $form = $('#register-form');

			function giveResponse(mess, closeInterval){
				$responseBlock.text(mess);

		        tl2.restart();
		        timer = setTimeout( function(){
					tl3.restart();
		        }, closeInterval);
			}

			$form.submit(function(e) {
			    
				e.preventDefault();
				if( $form.valid() )  {

					// Serialize the form data.
					var formData = $form.serialize();

					$.ajax({
					    type: 'POST',
					    url: $form.attr('action'),
					    data: formData
					})
					.done(function(response) {
					    giveResponse(response, 8000);

					    // Clear the form.
					    $form.find('input, textarea').val('');
					    exitType = false;
					})
					.fail(function(data) {
					    // Set the message text.
					    if (data.responseText !== '') {
					        giveResponse(data.responseText, 8000);
					    } else {
					        giveResponse('Произошла ошибка с отправкой. Поздравляем, вы застали это редкое явление! Заполните форму еще раз.', 8000);
					    }

					    // Clear the form.
					    $form.find('input, textarea').val('');
					    exitType = false;
					});
				}
			});
		})();

		//Init input-mask
		$('input[name="phone"]').inputmask("mask", {"mask": "[+7] (999) 999-9999", showMaskOnHover: false});
		
		//Form events
		$textarea.textareaAutoSize();

		$textarea.keyup( function(){
			if ( $(this).val() == '' ) {
				$(this).removeAttr('style');
			}
		});

		$formStart.click( function(){
			tl1.timeScale(1);
			tl1.restart();
		});

		$overlayClose.click( function(){
			clearTimeout( timer );

			if(exitType) {
				tl1.timeScale(2);
				tl1.reverse();
			} else {
				tl3.restart();
				exitType = true;
			}
			
		});

	})();
})();