

$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-motivation').waypoint(function(direction) {
        
        if (direction == "down") {
            $('nav').addClass('sticky'); // It add sticky class to nav in index
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

   

      
      
      /* Animations on scroll */
      $('.js--wp-1').waypoint(function(direction) {
          $('.js--wp-1').addClass('animated bounceInRight');
      }, {
          offset: '50%'
      });
      
      $('.js--wp-2').waypoint(function(direction) {
          $('.js--wp-2').addClass('animated fadeInUp');
      }, {
          offset: '50%'
      });
      
      $('.js--wp-3').waypoint(function(direction) {
          $('.js--wp-3').addClass('animated flipInY');
      }, {
          offset: '50%'
      });
      
      $('.js--wp-4').waypoint(function(direction) {
          $('.js--wp-4').addClass('animated lightSpeedIn');
      }, {
          offset: '50%'
      });

      $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated jackInTheBox');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated heartBeat');
    }, {
        offset: '50%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated rubberBand');
    }, {
        offset: '50%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');

        var icon = $('.js--nav-icon i');

        console.log(icon);


        nav.slideToggle(200);

        
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');

        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        
    });

});


