(function($) {
    "use strict"; // Start of use strict
    
    $.fn.randomize = function(childElem) {
    	  return this.each(function() {
    	      var $this = $(this);
    	      var elems = $this.children(childElem);

    	      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

    	      $this.remove(childElem);  

    	      for(var i=0; i < elems.length; i++)
    	        $this.append(elems[i]);      

    })};

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.logo', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    
    $('.carousel .carousel-inner').randomize('div.item');
    $('.carousel div.item:first').addClass('active');
    $('.carousel').carousel({
        interval: 10000
    });

})(jQuery); // End of use strict
