// setup slick plugin
$(document).ready(function(){
    $('.my-slick-slider').slick({
        rtl:true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll:2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });
  $(document).ready(function(){
      $('.btn-group button').click(function(){
      $('.color-ball').next().removeClass('d-flex');
      $('.color-ball').parent().removeClass('border rounded-pill ')
      $(this).children("span").addClass('d-flex');
      $(this).addClass('border rounded-pill ')       
         
      });
  });