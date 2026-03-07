$(document).ready(function () {
    // Typing animation
    var typed = new Typed(".typing", {
        strings: [
            "Full Stack Developer",
            "Backend Developer",
            "WordPress Developer",
            "UI/UX Designer",
            "Creative Designer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: [
            "Full Stack Developer",
            "Backend Developer",
            "WordPress Developer",
            "UI/UX Designer",
            "Creative Designer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Sticky navbar
    $(window).scroll(function () {
        if (this.scrollTop() > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Scroll up button
    $(window).scroll(function () {
        if (this.scrollTop() > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
    });

    // Toggle navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Active menu link on scroll
    $('section').each(function () {
        var sectionTop = $(this).offset().top - 70;
        var sectionBottom = sectionTop + $(this).outerHeight();
        var sectionId = $(this).attr('id');

        $(window).scroll(function () {
            if ($(this).scrollTop() >= sectionTop && $(this).scrollTop() < sectionBottom) {
                $('.navbar .menu li a').removeClass('active');
                $('.navbar .menu li a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
});
