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
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll:1
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
      $('.btn-group button').click(function(){
        $('.color-ball').next().removeClass('d-flex');
        $('.color-ball').parent().removeClass('border rounded-pill ')
        $(this).children("span").addClass('d-flex');
        $(this).addClass('border rounded-pill ')       
           
        });
  
        $('.ProductPic-icons .fa-heart').click(function(){
          $(this).toggleClass("fa-solid text-danger");
        })
        $('.ProductPic-icons .fa-star').click(function(){
          $(this).toggleClass("fa-solid").css("color","yellow");
        })
  
        
          // zoomy plugin add
        var urls = [
          
              '/assets/img/sam1.jpg',
              '/assets/img/sam2.jpg',
              '/assets/img/sam3.jpg',
              '/assets/img/sam4.jpg',
              '/assets/img/sam5.jpg',
  
              '/assets/img/sam6.jpg'
            ];
            $('#firstGallery').zoomy(urls , {
             width: 300,  
              height: 420,
              glare:false
             
            });

            // countdown timer initialize
            $(function(){
              $("#future_date").countdowntimer({
                dateAndTime : "2022/05/31 01:36:20",
                size : "sm",
                fontColor: "#dc3545",
                backgroundColor: "#fff",
                borderColor: "transparent",
                 timeUp :  timesup
              });
            });  
           // var time= $('#future_date').innerHtml();
           function timesup(){
            $('.countdownTimer').addClass('d-none mt-5').removeClass('d-flex');

          }
  });



     
        
        
        
        
 