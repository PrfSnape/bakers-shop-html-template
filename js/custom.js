/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Responsive Bakers Shop HTML Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var landingpage = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Bakers Shop Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Banner_slider();
            this.Team_slider();
            this.Test_slider();
            this.Gallery();
            this.Popup();
            this.Counter();
            this.Datepicker();
            this.MailFunction();




        },

        /*-------------- Bakery Shop definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        //Banner Slider
        Banner_slider: function() {
            $('.bk_banner_slider .owl-carousel').owlCarousel({
                loop: true,
                nav: false,
                items: 1,
                autoplaySpeed: 800,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })

        },
        //Team Slider
        Team_slider: function() {
            $('.bk_team_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                items: 3,
                autoplaySpeed: 800,
                autoplay: false,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },
        //Test Slider
        Test_slider: function() {
            $('.bk_test_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                items: 2,
                autoplaySpeed: 800,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            })

        },
        // Gallery
        Gallery: function() {
            $('.bk_gallery_popup').magnificPopup({
                delegate: 'a.fa',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                },

            });


        },
        //Gallery

        Popup: function() {

            $('.popup-with-form').magnificPopup({
                type: 'inline',
                mainClass: 'my-mfp-zoom-in'
            });
        },

        // Counter
        Counter: function() {
            if ($('.bk_counter_box').length > 0) {
                $('.bk_counter_box').appear(function() {
                    $('.bk_counter_num').countTo();
                });
            }
        },

        //Datetpicker
        Datepicker: function() {
            if ($('.datepicker').length > 0) {
                $(".datepicker").datepicker({
                    inline: true
                });
            }
        },

        //MailFunction

        MailFunction: function() {
            $('.submit_frm').on('click', function() {
                var u_email = $('#email').val();
                var u_name = $('#name').val();
                var u_num = $('#number').val();
                var u_sub = $('#subject').val();
                var u_msg = $('#message').val();

                $.ajax({
                    type: "POST",
                    url: "contactmail.php",
                    data: {
                        'useremail': u_email,
                        'username': u_name,
                        'usernumber': u_num,
                        'usersub': u_sub,
                        'user_msg': u_msg,
                    },
                    success: function(msg) {
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#email').val("");
                            $('#name').val("");
                            $('#number').val("");
                            $('#subject').val("");
                            $('#message').val("");
                            $('#err_msg').html(full_msg[1]);
                        } else {
                            $('#email').val(u_email);
                            $('#name').val(u_name);
                            $('#number').val(u_num);
                            $('#subject').val(u_subject);
                            $('#message').val(u_msg);
                            $('#err_msg').html(full_msg[1]);
                        }
                    }
                });
            });
        },




    };

    $(document).ready(function() {
        landingpage.init();
    });
	
		//back to top
        $(".totop").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.totop').fadeIn();
            } else {
                $('.totop').fadeOut();
            }
        });

        $('.gototop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    // Load Event

    $(window).on('load', function() {
        jQuery(".loader").fadeOut();
        jQuery(".loader").delay(600).fadeOut("slow");

    });


    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        if (wh > 767) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.int_menu_wrapper').addClass('int_fixed');
            } else {
                $('.int_menu_wrapper').removeClass('int_fixed');
            }
        }

    });



})(jQuery);