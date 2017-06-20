
$('document').ready(function(){
  $("rightbutton").click(function(){
    $("slide1").fadeOut("fast");
    $("slide2").fadeIn("fast");
    });
  });

$(document).on("doubleclick", "rightbutton", function(){
          $("slide2").fadeOut("fast");
          $("slide3").fadeIn("fast");
      });

/*
$(document).ready(function(){
  alert("Hi welcome to Jquery ");
  )}; 

$(document).ready(function(){
  $("ul#slides").cycle(function(){
      fx: "fade",
      pause: 1,
      prev: "#prev",
      next: "#next"
      });
});
*/


//JavaScript
//$('.rightbutton').on('click', function() { 
	//$('.slide2').hide();
  	//$('.slide3').fadeIn(1000);
//}
//$(".rightbutton").fadeOut(
//  function(){
  //  $(this).attr('dogimage2.jpg')'
  //  .fadeIn();
 // }
//); 

//var header = document.getElementsByClassName('dogimage2.jpeg' 'dogimage1.jpg' 'dogimage3.jpeg');
//var counter = 0;
  // var srcArray = ["dogimage1.jpg", "dogimage2.jpeg", "dogimage3.jpeg"];

//prev.onclick = function(){
       // document.getElementByClass("slide1").src = srcArray[--counter];
    //}
//next.onclick = function(){
        //document.getElementByClass("slide2").src = srcArray[++counter];
    //}
//next.onclick = function(){
       // document.getElementByClass("slide3").src = srcArray[++counter];
   // }

//if(counter == 3){
       // counter = 0;
   // };

   //define a set of sldes (an array)

//var slideIndex = 1; 


//$('.slide');
//below tests if the code is reading correctly
    //var x = $('.slide');
   //console.log ('How many slides?' + x.length);
//below is the same as the above, but in long form
    //document.getElementsByClassName("slide");



//for (i=0; i<slide.length;i++) {
  //text += slide[i] + "<br>";
//}

   //function main(){
  		//$('.rightbutton').on('click', function() {
		//	$(this).next().slideToggle(400);
   	 	//$(this).toggleClass('active');
    	//$(this).text('Projects Viewed');
	//});
   //}

