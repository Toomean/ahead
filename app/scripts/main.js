$.fn.split = function(){
	var element = $(this);

	var defaultText = $.trim( $(this).text() );
	var htmlString = defaultText.split('');
	var splitResult = '';
	
	for(var i = 0; i < htmlString.length; i++) {
		if(htmlString[i] == ' ') {
			splitResult += '<div style="display: inline-block; position:relative;">' + '&nbsp;' + '</div>';
		}
		splitResult += '<div style="display: inline-block; position:relative;">' + htmlString[i] + '</div>';
	}

	element.html(splitResult);

	return {
		reverse: function(){
			element.html(defaultText);
		}
	}
};

var h1Anim = $('.header-main-desc').split();
var h2Anim = $('.header-sec-desc').split();

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
	//Footer
	var tl2 = new TimelineMax({paused: true});
		tl2.from($('.main-footer .section-wrap'), 0.6, {x: '200%', opacity: '0', ease:Circ.easeOut, delay: 0.4});
	//Header animation
	var tl3 = new TimelineMax({paused: true});
		tl3.staggerFrom($('.header-main-desc > div'), .85, {opacity:0, scale:0, y:100, rotationX:80, transformOrigin:"0% 200% -50",  ease:Back.easeOut }, 0.02);

	TweenLite.set(".header-main-desc", {perspective:400});

	var tl4 = new TimelineMax({paused: true});
		tl4.staggerFrom($('.header-sec-desc > div'), .85, {opacity:0, scale:0, y:100, rotationX:80, transformOrigin:"0% 200% -50",  ease:Back.easeOut, delay: 2 }, 0.02);

	TweenLite.set(".header-main-desc", {perspective:400});

	tl3.restart();
	tl4.restart();
	
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