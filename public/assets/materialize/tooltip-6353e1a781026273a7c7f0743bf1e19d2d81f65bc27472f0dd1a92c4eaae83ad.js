!function(t){t.fn.tooltip=function(e){var i=5,a={delay:350};return"remove"===e?(this.each(function(){t("#"+t(this).attr("data-tooltip-id")).remove(),t(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(e=t.extend(a,e),this.each(function(){var a=Materialize.guid(),n=t(this);n.attr("data-tooltip-id",a);var r=t("<span></span>").text(n.attr("data-tooltip")),p=t("<div></div>");p.addClass("material-tooltip").append(r).appendTo(t("body")).attr("id",a);var s=t("<div></div>").addClass("backdrop");s.appendTo(p),s.css({top:0,left:0}),n.off("mouseenter.tooltip mouseleave.tooltip");var d,l=!1;n.on({"mouseenter.tooltip":function(t){var a=n.attr("data-delay");a=void 0===a||""===a?e.delay:a,d=setTimeout(function(){l=!0,p.velocity("stop"),s.velocity("stop"),p.css({display:"block",left:"0px",top:"0px"}),p.children("span").text(n.attr("data-tooltip"));var t,e,a,r=n.outerWidth(),d=n.outerHeight(),u=n.attr("data-position"),f=p.outerHeight(),c=p.outerWidth(),m="0px",h="0px",v=8;"top"===u?(t=n.offset().top-f-i,e=n.offset().left+r/2-c/2,a=o(e,t,c,f),m="-10px",s.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:f,marginLeft:c/2-s.width()/2})):"left"===u?(t=n.offset().top+d/2-f/2,e=n.offset().left-c-i,a=o(e,t,c,f),h="-10px",s.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:f/2,marginLeft:c})):"right"===u?(t=n.offset().top+d/2-f/2,e=n.offset().left+r+i,a=o(e,t,c,f),h="+10px",s.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:f/2,marginLeft:"0px"})):(t=n.offset().top+n.outerHeight()+i,e=n.offset().left+r/2-c/2,a=o(e,t,c,f),m="+10px",s.css({marginLeft:c/2-s.width()/2})),p.css({top:a.y,left:a.x}),v=c/8,8>v&&(v=8),("right"===u||"left"===u)&&(v=c/10,6>v&&(v=6)),p.velocity({marginTop:m,marginLeft:h},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),s.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:v},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})},a)},"mouseleave.tooltip":function(){l=!1,clearTimeout(d),setTimeout(function(){1!=l&&(p.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),s.velocity({opacity:0,scale:1},{duration:225,queue:!1,complete:function(){s.css("display","none"),p.css("display","none"),l=!1}}))},225)}})}))};var o=function(o,e,i,a){var n=o,r=e;return 0>n?n=4:n+i>window.innerWidth&&(n-=n+i-window.innerWidth),0>r?r=4:r+a>window.innerHeight+t(window).scrollTop&&(r-=r+a-window.innerHeight),{x:n,y:r}};t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery);