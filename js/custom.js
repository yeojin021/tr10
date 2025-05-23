$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=TbxHaAvkObc&list=TLGG697pm9J5bDExOTA1MjAyNQ&t=19s',
        containment: '.main_visual',
        showControls: false,
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })



})

$(function () {
    const MMN = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: '.main_menu .next',
            prevEl: '.main_menu .prev',
        },
    });
})
$(function () {
    const main_info_slide = new Swiper('.main_info_slide', {
        loop: true,
        parallax: true,
        speed: 1000,

        pagination: {
            el: '.main_info .page',
            clickable: true,
        },

    });
})





$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});

$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on');
        $('#header h1').toggleClass('on')
    })
});


$(function () {

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
})
