var count01 = 1;
var count02 = 0;
var count03 = 0;
var count04 = 0;
var count05 = 0;
var sum = 1;

$('.click01').click(function() {
  count01++; // count = count +1
  sum++;    // sum = sum +1
  $(this).children('.counter').html(count01);
  $('.totalClicks').html(sum);
});

$('.click02').click(function() {
  count02++;
  sum++;
  $(this).children('.counter').html(count02);
  $('.totalClicks').html(sum);
});

$('.click03').click(function() {
    count03++;
    sum++;
    $(this).children('.counter').html(count03);
    $('.totalClicks').html(sum);
  });

  $('.click04').click(function() {
    count04++;
    sum++;
    $(this).children('.counter').html(count04);
    $('.totalClicks').html(sum);
  });

  $('.click05').click(function() {
    count05++;
    sum++;
    $(this).children('.counter').html(count05);
    $('.totalClicks').html(sum);
  });


