const particlesSettings =  {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

particlesJS("our_services__consultation_bg", particlesSettings);

particlesJS("our_vision_bg", particlesSettings);

particlesJS("empty", particlesSettings);

particlesJS("advice__bg", particlesSettings);


//счётчик цифр при скролле

$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 10) {
        $(window).off("scroll", startCounter);
        $('.we_are__cards_item_number_count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); } }


//google maps

function initMap() {

    var uluru = {lat: -25.344, lng: 131.036};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});

    var marker = new google.maps.Marker({position: uluru, map: map});
}


// при наведении всплывающее меню

$('.nav__link:nth-child(5)').hover(function () {
    $('.nav__link_subpart').toggleClass('nav__link_subpart_block');
});

$('.nav__link_subpart').hover(function () {
    $(this).toggleClass('nav__link_subpart_block');
});

$('.nav__link:nth-child(8)').hover(function () {
    $('.nav__link_subpart2').toggleClass('nav__link_subpart_block');
});

$('.nav__link_subpart2').hover(function () {
    $(this).toggleClass('nav__link_subpart_block');
});


// адаптивное меню

$('.header__burg').click(function () {
    $('.nav').toggleClass('nav__for_mobile');
    $('.header').toggleClass('header__for_mobile');
    $('.header__inner_base').toggleClass('header__inner_base_for_mobile');
    $('.header__inner_btn').toggleClass('header__inner_btn_for_mobile');
    $('.nav__link_subpart').toggleClass('nav__link_subpart_for_mobile');
    $('.nav__link_subpart2').toggleClass('nav__link_subpart2_for_mobile');
});