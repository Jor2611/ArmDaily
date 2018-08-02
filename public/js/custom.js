/* =========================================================
Comment Form
============================================================ */
jQuery(document).ready(function(){
    if(jQuery("#comments-form").length > 0){
    // Validate the contact form
      jQuery('#comments-form').validate({
    
        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            url: {
                required: "Please enter your url.",
                url: "Please enter a valid url."
            },
            message: {
                required: "Please enter a message.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },
        
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
            jQuery("#submit-comment").attr("value", "Sending...");
            jQuery(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    jQuery("#response").html(responseText).hide().slideDown("fast");
                    jQuery("#submit-comment").attr("value", "Comment");
                }
            });
            return false;
        }
      });
    }
    
    if(jQuery("#contact-form").length > 0){
    // Validate the contact form
      jQuery('#contact-form').validate({
    
        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        
        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: jQuery.format("At least {0} characters required.")
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email."
            },
            url: {
                required: "Please enter your url.",
                url: "Please enter a valid url."
            },
            message: {
                required: "Please enter a message.",
                minlength: jQuery.format("At least {0} characters required.")
            }
        },
        
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
            jQuery("#submit-contact").attr("value", "Sending...");
            jQuery(form).ajaxSubmit({
                success: function(responseText, statusText, xhr, $form) {
                    jQuery("#response").html(responseText).hide().slideDown("fast");
                    jQuery("#submit-contact").attr("value", "Submit");
                }
            });
            return false;
        }
      });
    }
});

/* =========================================================
Sub menu
==========================================================*/
(function($){ //create closure so we can safely use $ as alias for jQuery

    jQuery(document).ready(function(){

        // initialise plugin
        var example = jQuery('#main-menu').superfish({
            //add options here if required
            cssArrows: false
        });
    });

})(jQuery);

jQuery("#main-menu > li").each(function() {
    if(jQuery(this).has("ul").length > 0) {
        jQuery(this).append("<span></span>")
    }
});

/* =========================================================
Mobile menu
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('#mobile-menu > span').click(function () {
 
        var mobile_menu = jQuery('#toggle-view-menu');
 
        if (mobile_menu.is(':hidden')) {
            mobile_menu.slideDown('300');
            jQuery(this).children('span').html('-');    
        } else {
            mobile_menu.slideUp('300');
            jQuery(this).children('span').html('+');    
        }
        
        
         
    });
    
    jQuery('#toggle-view-menu li').click(function () {
 
        var text = jQuery(this).children('div.menu-panel');
 
        if (text.is(':hidden')) {
            text.slideDown('300');
            jQuery(this).children('span').html('-');    
        } else {
            text.slideUp('300');
            jQuery(this).children('span').html('+');    
        }
        
        jQuery(this).toggleClass('active');
         
    });
 
});

/* =========================================================
Create footer mobile menu
============================================================ */
function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery("<select />").appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr("id",mobile_menu_id);
    
    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {        
        var el = jQuery(this);       
        
        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = "selected='selected'";
        }        
        
        var depth = el.parents("ul").size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }        
        
        jQuery("<option "+selected+" value='"+el.attr("href")+"'>"+space+el.text()+"</option>").appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });    
}

jQuery(document).ready(function(){
    if(jQuery('#bottom-nav').length > 0){
        createMobileMenu('#bottom-nav','responsive-menu');    
    }
});

function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery("<select />").appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr("id",mobile_menu_id);
    
    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {        
        var el = jQuery(this);       
        
        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = "selected='selected'";
        }        
        
        var depth = el.parents("ul").size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }        
        
        jQuery("<option "+selected+" value='"+el.attr("href")+"'>"+space+el.text()+"</option>").appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });    
}

jQuery(document).ready(function(){
    if(jQuery('#secondary-nav').length > 0){
        createMobileMenu('#secondary-nav','secondary-responsive-menu');    
    }
});

/* =========================================================
HeadLine Scroller
============================================================ */

jQuery(function() {
    var _scroll = {
        delay: 1000,
        easing: 'linear',
        items: 1,
        duration: 0.07,
        timeoutDuration: 0,
        pauseOnHover: 'immediate'
    };
    jQuery('.ticker-1').carouFredSel({
        width: 1000,
        align: false,
        items: {
            width: 'variable',
            height: 35,
            visible: 1
        },
        scroll: _scroll
    });

    //  set carousels to be 100% wide
    jQuery('.caroufredsel_wrapper').css('width', '100%');
});

/* =========================================================
Flex slider
============================================================ */
jQuery(window).load(function(){
  
  if( jQuery(".kp-featured-news-slider").length > 0){
      jQuery('.kp-featured-news-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: false,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

  if( jQuery(".kp-single-slider").length > 0){
      jQuery('.kp-single-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: true,
        start: function(slider){
          jQuery('body').removeClass('loading');
        }
      });
  }

});

/* =========================================================
prettyPhoto
============================================================ */
jQuery(document).ready(function(){
    init_image_effect();
});

jQuery(window).resize(function(){
    init_image_effect();
});

function init_image_effect(){    

    var view_p_w = jQuery(window).width();
    var pp_w = 500;
    var pp_h = 344;
    
    if(view_p_w <= 479){
        pp_w = '120%';
        pp_h = '100%';
    }
    else if(view_p_w >= 480 && view_p_w <= 599){
        pp_w = '100%';
        pp_h = '170%';
    }
            
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        show_title: false,
        deeplinking:false,
        social_tools:false,
        default_width: pp_w,
        default_height: pp_h
    });    
}

/* =========================================================
Accordion
========================================================= */
jQuery(document).ready(function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
                
            });
            
            jQuery('.accordion-title').on('click', function(e) {
                kopa_accordion_click(jQuery(this));
                e.preventDefault();
            });
            
            var titles = jQuery('.accordion-title');
            
            jQuery.each(titles,function(){
                kopa_accordion_click(jQuery(this));
            });
        }
        
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').html('+');
    if (obj.hasClass('active')) {
        obj.find('span').first().html('-');              
    } 
}

/* =========================================================
Masonry
============================================================ */
jQuery(function(){
    
    var $container = jQuery('.masonry-container');
    if( $container.length > 0){
        $container.imagesLoaded(function(){
          $container.masonry({
            itemSelector : '.masonry-box',
            columnWidth: 1,
            isAnimated: !Modernizr.csstransitions,
            isFitWidth: true
          });
        });
    }
});

/* =========================================================
Tabs
============================================================ */
jQuery(document).ready(function() { 
    
    if( jQuery(".tab-content-1").length > 0){   
        //Default Action Product Tab
        jQuery(".tab-content-1").hide(); //Hide all content
        jQuery("ul.tabs-1 li:first").addClass("active").show(); //Activate first tab
        jQuery(".tab-content-1:first").show(); //Show first tab content
        //On Click Event Product Tab
        jQuery("ul.tabs-1 li").click(function() {
            jQuery("ul.tabs-1 li").removeClass("active"); //Remove any "active" class
            jQuery(this).addClass("active"); //Add "active" class to selected tab
            jQuery(".tab-content-1").hide(); //Hide all tab content
            var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
            jQuery(activeTab).fadeIn(); //Fade in the active content
            return false;
        
        });
    }
    
});

/* =========================================================
Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
    jQuery('#toggle-view li').click(function (event) {
        
        var text = jQuery(this).children('div.panel');
 
        if (text.is(':hidden')) {
            jQuery(this).addClass('active');
            text.slideDown('300');
            jQuery(this).children('span').html('-');                 
        } else {
            jQuery(this).removeClass('active');
            text.slideUp('300');
            jQuery(this).children('span').html('+');               
        }
         
    });
 
});

/* =========================================================
Dropdown sharebox
============================================================ */
jQuery(document).ready(function(){
    
    jQuery(".share-box .social-links").hover(function() {
        jQuery(this).find("ul").first().slideDown(100);
    }, function() {
        jQuery(this).find("ul").first().slideUp(100);
    });
});