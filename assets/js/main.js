/*!
 * simply
 * A Ghost theme focused on content based on Medium design/ux
 * http://giobautista.com/simply
 * @author Gio Bautista http://giobautista.com
 * @version 0.1
 * Copyright 2014. MIT licensed.
 */
jQuery(document).ready(function(t){t(window).scroll(function(){t(this).scrollTop()>200?t(".go-top").fadeIn(200):t(".go-top").fadeOut(200)}),t(".go-top").click(function(o){o.preventDefault(),t("html, body").animate({scrollTop:0},300)}),t('[data-toggle="popover"]').popover({trigger:"hover"}),t(".container").fitVids(),t(function(){window.prettyPrint&&prettyPrint()}),t(".photoset-grid").photosetGrid({layout:"24323425432",width:"100%",gutter:"5px",highresLinks:!0,lowresWidth:200,onInit:function(){},onComplete:function(){t(".photoset-grid").css({visiblity:"visible"}),t(".photoset-grid a").fancybox({type:"image",autoResize:!0})}})});