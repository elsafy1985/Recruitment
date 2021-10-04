$('.toggle.Reg').on('click', function() {
  $('.registeration').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.registeration').stop().removeClass('active');
});

$('.toggle.Pas').on('click', function() {
  $('.forgetPassword').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.forgetPassword').stop().removeClass('active');
});