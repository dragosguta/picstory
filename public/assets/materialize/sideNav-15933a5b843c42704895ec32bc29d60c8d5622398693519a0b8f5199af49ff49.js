!function(e){var t={init:function(t){var i={menuWidth:240,edge:"left",closeOnClick:!1};t=e.extend(i,t),e(this).each(function(){function i(i){u=!1,d=!1,e("body").css("overflow",""),e("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e(this).remove()}}),"left"===t.edge?(a.css({width:"",right:"",left:"0"}),s.velocity({left:-1*(t.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&(s.removeAttr("style"),s.css("width",t.menuWidth))}})):(a.css({width:"",right:"0",left:""}),s.velocity({right:-1*(t.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&(s.removeAttr("style"),s.css("width",t.menuWidth))}}))}var n=e(this),s=e("#"+n.attr("data-activates"));240!=t.menuWidth&&s.css("width",t.menuWidth);var a=e('<div class="drag-target"></div>');e("body").append(a),"left"==t.edge?(s.css("left",-1*(t.menuWidth+10)),a.css({left:0})):(s.addClass("right-aligned").css("right",-1*(t.menuWidth+10)).css("left",""),a.css({right:0})),s.hasClass("fixed")&&window.innerWidth>992&&s.css("left",0),s.hasClass("fixed")&&e(window).resize(function(){window.innerWidth>992?0!==e("#sidenav-overlay").css("opacity")&&d?i(!0):(s.removeAttr("style"),s.css("width",t.menuWidth)):d===!1&&("left"===t.edge?s.css("left",-1*(t.menuWidth+10)):s.css("right",-1*(t.menuWidth+10)))}),t.closeOnClick===!0&&s.on("click.itemclick","a:not(.collapsible-header)",function(){i()});var u=!1,d=!1;a.on("click",function(){i()}),a.hammer({prevent_default:!1}).bind("pan",function(n){if("touch"==n.gesture.pointerType){var a=(n.gesture.direction,n.gesture.center.x);n.gesture.center.y,n.gesture.velocityX;if(e("body").css("overflow","hidden"),0===e("#sidenav-overlay").length){var u=e('<div id="sidenav-overlay"></div>');u.css("opacity",0).click(function(){i()}),e("body").append(u)}if("left"===t.edge&&(a>t.menuWidth?a=t.menuWidth:0>a&&(a=0)),"left"===t.edge)a<t.menuWidth/2?d=!1:a>=t.menuWidth/2&&(d=!0),s.css("left",a-t.menuWidth);else{a<window.innerWidth-t.menuWidth/2?d=!0:a>=window.innerWidth-t.menuWidth/2&&(d=!1);var o=-1*(a-t.menuWidth/2);o>0&&(o=0),s.css("right",o)}var c;"left"===t.edge?(c=a/t.menuWidth,e("#sidenav-overlay").velocity({opacity:c},{duration:50,queue:!1,easing:"easeOutQuad"})):(c=Math.abs((a-window.innerWidth)/t.menuWidth),e("#sidenav-overlay").velocity({opacity:c},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(i){if("touch"==i.gesture.pointerType){var n=i.gesture.velocityX;u=!1,"left"===t.edge?d&&.3>=n||-.5>n?(s.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),e("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:0,left:""})):(!d||n>.3)&&(e("body").css("overflow",""),s.velocity({left:-1*(t.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),e("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e(this).remove()}}),a.css({width:"10px",right:"",left:0})):d&&n>=-.3||n>.5?(s.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),e("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),a.css({width:"50%",right:"",left:0})):(!d||-.3>n)&&(e("body").css("overflow",""),s.velocity({right:-1*(t.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),e("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e(this).remove()}}),a.css({width:"10px",right:0,left:""}))}}),n.click(function(){if(d===!0)d=!1,u=!1,i();else{e("body").css("overflow","hidden"),e("body").append(a),"left"===t.edge?(a.css({width:"50%",right:0,left:""}),s.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(a.css({width:"50%",right:"",left:0}),s.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),s.css("left",""));var n=e('<div id="sidenav-overlay"></div>');n.css("opacity",0).click(function(){d=!1,u=!1,i(),n.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){e(this).remove()}})}),e("body").append(n),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){d=!0,u=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){e("#sidenav-overlay").trigger("click")}};e.fn.sideNav=function(i){return t[i]?t[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void e.error("Method "+i+" does not exist on jQuery.sideNav"):t.init.apply(this,arguments)}}(jQuery);