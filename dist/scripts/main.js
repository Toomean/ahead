var App=function(){"use strict";$("html").scrollTop(0);var a=$(".specialization"),b=$(".portfolio"),c=$(".about"),d=$(".processes"),e=$(".main-footer"),f=new TimelineMax({paused:!0});f.staggerFromTo($(".portfolio-li"),1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Circ.easeOut},.2);var g=new TimelineMax({paused:!0});g.from($(".proc-ol"),1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Circ.easeOut},.2);var h=new TimelineMax({paused:!0});h.from($(".header-main-desc"),.6,{x:"200%",opacity:"0",ease:Circ.easeOut,delay:.4});var i=new TimelineMax({paused:!0});i.from($(".header-sec-desc"),.6,{x:"200%",opacity:"0",ease:Circ.easeOut,delay:.8}),a.add(b).add(c).add(d).add(e).appear(),h.restart(),i.restart(),a.on("appear",function(){$(this).off()}),b.on("appear",function(){f.restart(),$(this).off()}),c.on("appear",function(){$(this).off()}),d.on("appear",function(){g.restart(),$(this).off()}),e.on("appear",function(){$(this).off()}),function(){var a,b=$(".js-show-form"),c=$(".overlay"),d=$(".overlay-close"),e=$(".feedback-response"),f=$(".feedback-form form"),g=f.find(".js-form-submit"),h=f.find("fieldset"),i=f.find("textarea"),j=!0,k=new TimelineMax({paused:!0});k.to(c,.6,{bottom:"0",ease:Circ.easeOut}).to($("body"),0,{overflow:"hidden"}).staggerFromTo(h.add(g),1,{y:"-200%",opacity:"0"},{y:"0%",opacity:"1",ease:Circ.easeOut},.2);var l=new TimelineMax({paused:!0});l.staggerTo(h.add(g),.5,{y:"-400%",opacity:"0",ease:Circ.easeOut},.05).to(e,1,{top:"0%",opacity:"1",ease:Circ.easeOut},.05);var m=new TimelineMax({paused:!0});m.to(c,.6,{bottom:"100%",ease:Circ.easeOut}).to(e,.6,{top:"-100%",ease:Circ.easeOut,delay:.6}).to($("body"),0,{overflow:"visible"}),$("#register-form").validate({rules:{name:"required",email:{required:!0,email:!0}},messages:{name:"Обязательное поле",email:{required:"Обязательное поле",email:"Неверный формат. Попробуйте еще"}}}),function(){function b(b,c){e.text(b),l.restart(),a=setTimeout(function(){m.restart()},c)}var c=$("#register-form");c.submit(function(a){if(a.preventDefault(),c.valid()){var d=c.serialize();$.ajax({type:"POST",url:c.attr("action"),data:d}).done(function(a){b(a,11e3),c.find("input, textarea").val(""),j=!1}).fail(function(a){""!==a.responseText?b(a.responseText,11e3):b("Произошла ошибка с отправкой. Поздравляем, вы застали это редкое явление! Заполните форму еще раз.(ajax)",11e3),c.find("input, textarea").val(""),j=!1})}})}(),$('input[name="phone"]').inputmask("mask",{mask:"[+7] (999) 999-9999",showMaskOnHover:!1}),i.textareaAutoSize(),i.keyup(function(){""==$(this).val()&&$(this).removeAttr("style")}),b.click(function(){k.timeScale(1),k.restart()}),d.click(function(){clearTimeout(a),j?(k.timeScale(2),k.reverse()):(m.restart(),j=!0)})}()}();