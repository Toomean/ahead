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
		tl1.staggerFromTo($('.proc-li'), 1, {x: '200%', opacity: '0'}, {x: '0%', opacity: '1', ease:Circ.easeOut}, 0.2);
	//Footer
	var tl2 = new TimelineMax({paused: true});
		tl2.from($('.main-footer address'), 0.6, {x: '200%', opacity: '0', ease:Circ.easeOut, delay: 0.4})
		   .staggerFrom($('main-footer address, .contacts-link'), 0.4, {x: '200%', opacity: '0', ease:Circ.easeOut}, 0.2)
		   .from($('.copy'), 0.6, {x: '200%', opacity: '0', ease:Circ.easeOut, delay: 0.4});

	specBlock.add(portBlock).add(aboutBlock).add(procBlock).add(footerBlock).appear();

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
		tl2.restart();
		$(this).off();
	});

	return tl2;
})();