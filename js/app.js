$(document).ready(function (){
  $('#slider div:gt(0)').hide();
var aletorio= setInterval(imgSecuencia, 3000);
    function imgSecuencia(){
      $('.carrusel div:first-child').fadeOut(3000)
        .next('div').fadeIn(1000)
        .end().appendTo('.carrusel');
      };

      //circulos//

$("#c-1").on("click",function(){
  $('.carrusel div:first-child').fadeOut(2000)
   $('#img-1').fadeIn(1000)
   .end().appendTo('.carrusel');
   });
   $("#c-2").on("click",function(){
     $('.carrusel div:first-child').fadeOut(2000)
       $('#img-2').fadeIn(1000)
       .end().appendTo('.carrusel');
   });
   $("#c-3").on("click",function(){
     $('.carrusel div:first-child').fadeOut(2000)
       $('#img-3').fadeIn(1000)
      .end().appendTo('.carrusel');
   });
   $("#c-4").on("click",function(){
     $('.carrusel div:first-child').fadeOut(2000)
       $('#img-4').fadeIn(1000)
      .end().appendTo('.carrusel');
   });
   $("#c-5").on("click",function(){
     $('.carrusel div:first-child').fadeOut(2000)
       $('#img-5').fadeIn(1000)
    .end().appendTo('.carrusel');
   });

//Flechas//
   $("#antes").click(function(){
         imgSecuencia();
         clearInterval(aletorio);
         aletorio;
       });
       $("#despues").click(function(){
         $('.carrusel div:first-child').fadeOut(3000);
         $('.carrusel div:last-child').fadeIn(1000).prependTo('.carrusel');
         clearInterval(aletorio);
         aletorio;
       });
   });
