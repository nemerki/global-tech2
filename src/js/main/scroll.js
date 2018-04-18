$(document).ready(function() {

  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top-65
    }, 1000 );
  });
  



  $(window).scroll(function() {
   if( $(this).scrollTop() > 50 ) {
    $(".logo").removeClass("img-fluid");
    $(".navbar").addClass("fixed-top");
    $(".navbar").addClass("fixed-top--size");
    $(".header2 .navbar").addClass("fixed-top--dark");
  } else {

    $(".navbar").addClass("sticky-top");
    $(".navbar").removeClass("fixed-top--size");
    $(".logo").addClass("img-fluid");
    $(".header2 .navbar").removeClass("fixed-top--dark");
  }
});

  
})