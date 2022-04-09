var THEMEIM = THEMEIM || {};

(function($) {

  // USE STRICT
  "use strict";

  THEMEIM.initialize = {

    init: function() {
      THEMEIM.initialize.general();
      THEMEIM.initialize.mobileMenu();
      THEMEIM.initialize.components();
    },

    /*==================================*/
    /*=           Reuseable Component          =*/
    /*==================================*/
    components: function() {
      $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
          background: 'url(' + img + ')',
        }); // .removeAttr('data-bg-image')
      });
      $('[data-bg-color]').each(function() {
        var color = $(this).data('bg-color');
        $(this).css({
          background: color,
        }); // .removeAttr('data-bg-color')
      });
    },

    /*==================================*/
    /*=           Mobile Menu          =*/
    /*==================================*/
    general: function() {
      // Convert Image to SVG
      $('img.svg').each(function() {
        var $img = $(this),
          imgID = $img.attr('id'),
          imgClass = $img.attr('class'),
          imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass);
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);
        }, 'xml');
      });

      /* Main Slider  */
      $('.slider-start').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: false,
        dots: true,
        smartSpeed: 2000,
        animateIn: 'fadeIn'

      });

      $(".slider-start").on('translate.owl.carousel', function() {
        $('.slider-img').removeClass('fadeInDown animated').hide();
      });

      $(".slider-start").on('translated.owl.carousel', function() {
        $('.slider-img').addClass('fadeInDown animated').show();
      });


      $(".slider-start").on('translate.owl.carousel', function() {
        $('.slider-text h4').removeClass('fadeInUp animated').hide();
      });

      $(".slider-start").on('translated.owl.carousel', function() {
        $('.slider-text h4').addClass('fadeInUp animated').show();
      });

      $(".slider-start").on('translate.owl.carousel', function() {
        $('.slider-text h1').removeClass('fadeInUp animated').hide();
      });

      $(".slider-start").on('translated.owl.carousel', function() {
        $('.slider-text h1').addClass('fadeInUp animated').show();
      });


      $(".slider-start").on('translated.owl.carousel', function() {
        $('.slider-text p').addClass('fadeInUp animated').show();
      });

      $(".slider-start").on('translate.owl.carousel', function() {
        $('.slider-text p').removeClass('fadeInUp animated').hide();
      });

      $(".slider-start").on('translated.owl.carousel', function() {
        $('.slider-text a').addClass('fadeInUp animated').show();
      });

      $(".slider-start").on('translate.owl.carousel', function() {
        $('.slider-text a').removeClass('fadeInUp animated').hide();
      });



      $('.blog-starter').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        autoplay: true,
        dots: false,
        autoplayTimeout: 7000,
        // autoplayHoverPause:true,
        responsive: {
          320: {
            items: 1
          },
          768: {
            items: 2
          }
        }
      });

      $('.feature-carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        autoplay: false,
        dots: false,
        responsive: {
          320: {
            items: 1
          },
          480: {
            items: 2
          },
          768: {
            items: 2
          }

        }

      });



      $('.progress-bar').progressbar();

      $('.venobox').venobox();

      $('.pricing_1').each(function() {
        var doc = document;
        var scene = doc.getElementById('paralax-1');
        var parallax = new Parallax(scene);

        // var scene = doc.getElementById('paralax-2');
        // var parallax = new Parallax(scene);

      });

      /* Client Slider  */
      $('.client-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 5,
        autoplay: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
          320: {
            items: 1
          },
          500: {
            items: 2
          },

          768: {
            items: 3
          },
          992: {
            items: 4
          },
          1450: {
            items: 5
          }
        }

      });

      /* Testimonial Slider  */
      $('.testimonial-2').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        autoplay: false,
        navSpeed: '1500',
        // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        nav: false,
        responsive: {
          320: {
            items: 1
          },
          576: {
            items: 1
          },

          768: {
            items: 1
          },
          992: {
            items: 3,
            center: true,
          }
        }

      });



      /* Testimonial Slider  */
      $('.testimonial-4').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: false,
        navSpeed: '1500',
        navText: ['<img src="media/images/icon/arrow.png" alt="">', '<img src="media/images/icon/arrow.png" alt="">'],
        dots: false
      });


      /* Category Slider  */
      $('.category-carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 3,
        autoplay: true,
        dots: false,
        responsive: {
          320: {
            items: 1
          },
          440: {
            items: 2
          },
          900: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });


      /* Category Slider  */
      $('.customer-review-carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: false,
        dots: true,
        margin: 30
      });


      $('.trigger').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('.main-menu-wrapeer').toggleClass('open');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .close-qv').on('click', function() {
          $('.quickview-wrapper').removeClass('open');
          $('.mask-overlay').remove();
        });
      });



      $(".single-pricing.one").each(function() {

        $(".one .toggle-btn").on('click', function(e) {

          $('.one .price-toggle').toggleClass('active');
          $('.one .round-btn').toggleClass('active');

        });

      });

      $(".single-pricing.two").each(function() {

        $(".two .toggle-btn").on('click', function(e) {

          $('.two .price-toggle').toggleClass('active');
          $('.two .round-btn').toggleClass('active');

        });

      });

      $(".single-pricing.three").each(function() {

        $(".three .toggle-btn").on('click', function(e) {

          $('.three .price-toggle').toggleClass('active');
          $('.three .round-btn').toggleClass('active');

        });

      });

      $(".pricing_2").each(function() {

        $(".toggle-btn-1").on('click', function(e) {

          $('.single-pricing-2').toggleClass('yearly');

        });

      });

      $(".toggle-btn-1").on('click', function(e) {

        $('.round-btn').toggleClass('active');
        $('.planning-table-inner .total').toggleClass('active');
        $('.toggle-btn-1 p').toggleClass('active');

      });

      $(".planning-table-inner .nav-item").on('click', function(e) {

        $('.bar-wrap').removeClass("active");
        var curr = $(this).attr('data-chart');
        $(curr).addClass("active");

      });

      $(".link-opener").on('click', function(e) {
        $('.link-content').slideToggle();
        $('.pm_icon').toggleClass('active');
      });

      /*---------------------
      	 Back to Top
      	 --------------------- */


      var backtotop = $(".backtotop");

      var windo = $(window),
        HtmlBody = $('html, body');

      backtotop.on('click', function() {
        HtmlBody.animate({
          scrollTop: 0
        }, 1500);
      });



      new WOW().init();


      /*---------------------
      		Search toggle class
      		------------------------- */

      $(".top-search a").on('click', function() {
        $(".search-input-wrapper").toggleClass("active");
      });



      /*---------------------
      		Cart top show hide toggle
      		------------------------- */

      $(".top-cart > a").on('click', function() {
        $(".cart-drop").toggleClass("active");
      });

      /*---------------------
      		Menu three toggle
      		------------------------- */

      $(".menu-btn a").on('click', function() {
        $(this).toggleClass("active");

        $(".mainmenu").toggleClass("active");

        $('body').toggleClass('menu-open');

      });


      /*---------------------
      		price-slider active
      		------------------------- */


      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 600,
        values: [60, 570],
        slide: function(event, ui) {
          $("#amount").val("$" + ui.values[0] + " to $" + ui.values[1]);
        }
      });
      $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " to $" + $("#slider-range").slider("values", 1));

      $('.nam').counterUp({
        delay: 10,
        time: 1000
      });

      /*---------------------
      	 Google Map
      	 ------------------------- */


      $('.gmap3-area').each(function() {
        var $this = $(this),
          key = $this.data('key'),
          lat = $this.data('lat'),
          lng = $this.data('lng'),
          mrkr = $this.data('mrkr');

        $this.gmap3({
            center: [lat, lng],
            zoom: 16,
            scrollwheel: false,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            },
            style: [{
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [{
                "hue": "#ff00ca"
              }, {
                "saturation": "100"
              }, {
                "lightness": "0"
              }, {
                "gamma": "1"
              }]
            }, {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [{
                "hue": "#ff0000"
              }]
            }]
          })
          .marker(function(map) {
            return {
              position: map.getCenter(),
              icon: mrkr
            };
          })
          .styledmaptype(
            "shadeOfGrey", [{
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "simplified"
                  },
                  {
                    "lightness": 20
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                  "hue": "#f49935"
                }]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "simplified"
                }]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                  "hue": "#fad959"
                }]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                  "visibility": "simplified"
                }]
              },
              {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "simplified"
                }]
              },
              {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "hue": "#a1cdfc"
                  },
                  {
                    "saturation": 30
                  },
                  {
                    "lightness": 49
                  }
                ]
              }
            ], {
              name: "Shades of Grey"
            }
          );
      });
    },

    /*==================================*/
    /*=           Mobile Menu          =*/
    /*==================================*/
    mobileMenu: function() {
      var headerTwoHeight = $('.header-two').height();
      $('.bb-breadcrumb').css('marginTop', '-' + headerTwoHeight + 'px');
      console.log();
      var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.link');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
          },
          this.dropdown);
      };

      Accordion.prototype.dropdown = function(e) {
        e.preventDefault();
        var $el = e.data.el,
          $this = $(this),

          $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          //show only one menu at the same time
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
      }

      var accordion = new Accordion($('#mobilemenu'), false);
      var navSidebarList = new Accordion($('.navsidebar-list-js'), false);
      $(".accordion-wrapper .mobile-open").on('click', function() {
        $(".accordion").toggleClass("active");
      });

      $(".accordion .closeme").on('click', function() {
        $(this).parents('.accordion').removeClass("active");
      });


      $('.mobile-open').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('body').toggleClass('active');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .closeme').on('click', function() {
          $('.accordion').removeClass('active');
          $('.mask-overlay').remove();
        });
      });

      // Navbar style one
      $('.moibe_nav_toggler_1').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        // $('body').toggleClass('active');
        $('.navsidebar').toggleClass('show');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay').on('click', function() {
          // $('body').removeClass('active');
          $('.navsidebar').toggleClass('show');

          $('.mask-overlay').fadeOut().remove();
        });
      });

      // navbar 2 mobile menu Toggler
      $('.mobile-menu-toggler').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('body').toggleClass('active');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .im-mobile-menu-close-js').on('click', function() {
          $('body').removeClass('active');
          $('.mask-overlay').fadeOut().remove();
        });
      });

      var navbarMobileMen2 = new Accordion($('.im-mobile-menu-2-js'), false);
    },

  };

  THEMEIM.documentOnReady = {
    init: function() {
      THEMEIM.initialize.init();
      var headerNavbarWrap = $('.header-sticky-js');
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
          headerNavbarWrap.addClass('navbar-fixed');
        } else {
          headerNavbarWrap.removeClass('navbar-fixed');
        }
      });
    },
  };

  THEMEIM.documentOnLoad = {
    init: function() {
      $("#loader-wrapper").fadeOut("slow");
      $('#exampleModalCenter').modal('show');
      $('#exampleModaltwo').modal('show');
    },
  };

  THEMEIM.documentOnResize = {
    init: function() {

    },
  };

  THEMEIM.documentOnScroll = {
    init: function() {
      if ($(this).scrollTop() > 400) {
        $(".backtotop").fadeIn(500);
      } else {
        $(".backtotop").fadeOut(500);
      }
    },
  };

  // Initialize Functions
  $(document).ready(THEMEIM.documentOnReady.init);
  $(window).on('load', THEMEIM.documentOnLoad.init);
  $(window).on('resize', THEMEIM.documentOnResize.init);
  $(window).on('scroll', THEMEIM.documentOnScroll.init);

})(jQuery);