$(function() {
  var pull    = $('.pull');
    menu    = $('nav ul');
    menuHeight  = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
    });
});

$("#slider").carouFredSel({
  responsive  : true,
  scroll    : {
    fx      : "crossfade",
    easing    : "swing",
    duration  : 500,

  },
  items   : {
    visible   : 1,
    height    : "27%"
  }
});
