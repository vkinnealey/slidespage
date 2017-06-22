
$(document).ready(function(){
  var slides = $(".slides");
  var slideIndex = 0; 
  var slide = slides[slideIndex];

slides.hide();
slides.first().show();

$(".next").click(function(){
  $(slides).hide();
  slideIndex++;
  if(slideIndex > 2){
  slideIndex = 0;
    }
  slide = slides[slideIndex];
  $(slide).show();
});

$(".previous").click(function(){
  $(slide).hide();
  slideIndex--;
  if(slideIndex < 0){
  slideIndex = 2;
  }
  slide = slides[slideIndex];
  $(slide).show();
  });
});
