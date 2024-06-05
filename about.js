$(document).ready(function() {
    // Animate the logo on hover
    $('.logo').hover(function() {
      $(this).addClass('animated');
    }, function() {
      $(this).removeClass('animated');
    });
  
    // Add a tooltip to the headshot
    $('.headshot').attr('title', 'The face behind the code');
  });
  