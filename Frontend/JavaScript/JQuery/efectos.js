// jqdocReady y nos sale esto:
// dos botones, uno de mostrar parrafo y otro de ocultar
$(document).ready(function(){

    $('#btnHide').click(function(){
        // $('p').css('display', 'none');
        $('p').hide(1500);
    });

    $('#btnShow').click(function(){
        // $('p').css('display', 'block');
        $('p').show(3000);
    });

    $('#btnToggle').click(function(){
        $('p').toggle(500);
    });


    // Fade (desvanecerse)
    $('#btnFadeIn').click(function(){
        $('p').fadeIn();
    });

    $('#btnFadeOut').click(function(){
        $('p').fadeOut('slow');
    });

    $('#btnFadeToggle').click(function(){
        $('p').fadeToggle('fast');
    });

    $('#btnFadeTo').click(function(){
        $('p').fadeTo('slow', 0.3);
    });

    // slide (deslizar)
    $('.blue').click(function(){
        $('#divSlide').slideToggle(1000);
    });

});