$('.tabs h1').click(function(event) {
    event.preventDefault();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  
    var ph = $(this).parent().height();
    var ch = $(this).next().height();
  
    if (ch > ph) {
      $(this).parent().css({
        'min-height': ch + 'px'
      });
    } else {
      $(this).parent().css({
        'height': 'auto'
      });
    }
  });
  
  function tabParentHeight() {
    var ph = $('.tabs').height();
    var ch = $('.tabs ul').height();
    if (ch > ph) {
      $('.tabs').css({
        'height': ch + 'px'
      });
    } else {
      $(this).parent().css({
        'height': 'auto'
      });
    }
  }
  
  $(window).resize(function() {
    tabParentHeight();
  });
  
  $(document).resize(function() {
    tabParentHeight();
  });
  tabParentHeight();
  