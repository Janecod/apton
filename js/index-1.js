window.onload = (function () {
    //1986
    var $button = $('.wheel_btn'),
        $counter = $('.wheel_counter_num'),
        $spinner = $('.wheel_spinner'),
        $popupWrap = $('.popup_overlay'),
        $popup_1 = $('#popup_1');

    $button.click(function () {
        if ( $button.hasClass('spin_1') ) {
            spin_1();
        }
    });

    function spin_1 () {
        $button.removeClass('spin_1').attr('disabled','disabled');
        $counter.html('1');
        $spinner.removeClass('spin_1').addClass('wheel_spinner_animated_1').removeClass('wheel_spinner_animated').css('transform','rotate(690deg)');
        setTimeout(function () {
            localStorage.currentSpin = 'HTMLC_1986_en_spin_1';
            $spinner.removeClass('wheel_spinner_animated_1');
            $popupWrap.fadeIn().css('display','flex');
            $popup_1.fadeIn();
            $button.addClass('spin_2').removeClass('spin_1');
        }, 4500);
    }

    switch(localStorage.currentSpin) {
        case 'HTMLC_1986_en_spin_1':
            $counter.html('1');
            $popupWrap.fadeIn().css('display','flex');
            $popup_1.fadeIn();
            $button.addClass('spin_2').removeClass('spin_1');
            $spinner.removeClass('wheel_spinner_animated').css('transform','rotate(690deg)');
            break;
        default:
            break
    }

    var $html = $('html'),
        $preloader = $('.preloader');

    // let langUa = document.getElementById('lang_ua');
    // let langRu = document.getElementById('lang_ru');
    // langUa.addEventListener('click', ()=> {
    //
    //         $preloader.fadeIn();
    //         $html.removeClass('hide');
    //         setTimeout(function () {
    //             $preloader.fadeOut();
    //             $html.addClass('hide');
    //         }, 500);
    //     $html.removeClass('ru');
    //     $html.addClass('ua');
    //
    // })
    // langRu.addEventListener('click', ()=> {
    //     $preloader.fadeIn();
    //     $html.removeClass('hide');
    //     setTimeout(function () {
    //         $preloader.fadeOut();
    //         $html.addClass('hide');
    //     }, 500);
    //     $html.removeClass('ua');
    //     $html.addClass('ru');
    //
    // })
    setTimeout(function () {
        $preloader.fadeOut();
        setTimeout(function () {
            $html.addClass('hide');
        }, 500);
    }, 200);

});


