$(document).ready(function() {
   $(".burgermenu").on("click",  function(e){
      e.preventDefault();
      $(".burgermenu,.menu").toggleClass("active");
  });

   /*輪播*/
   var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true
              });
});