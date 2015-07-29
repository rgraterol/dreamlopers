// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require retina-1.1.0.min
//= require jquery.stellar.min
//= require jquery.easing.1.3.min
//= require bootstrap-sprockets
//= require owl-carousel/owl.carousel
//= require cubeportfolio/jquery.cubeportfolio.min
//= require_tree .
$(document).on('mouseenter','#tips .post.tips.tip, #tips .post.tips.producto', function(){
    if( $(this).hasClass('producto') ){
        $(this).prepend('<a target="_blank" href="'+ $(this).data('href') +'" class="readmore"></a>');
    } else {
        $(this).prepend('<a href="'+ $(this).data('href') +'" class="readmore"></a>');
    }
});

$(document).on('mouseleave','#tips .post.tips.tip, #tips .post.tips.producto', function(){
    $(this).find('.readmore').remove();
});