<!DOCTYPE html>
<html>
  <head>
    <title>
      Cute Dog Slide Show!
    </title>
    <link rel= stylesheet type=text/css href=style.css>
    <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js></script>
    <script src=script.js> </script>
    <link href="https://fonts.googleapis.com/css?family=Bubbler+One|Vibur" rel=stylesheet>
    <?php
    $fullname = $_POST["fullname"];
    print($fullname);
    ?>
  </head>

<body>
  <div class="intro"> 
    <h1> Dog Slide Show! </h1>  
  </div>
    <h2> For the love of dogs, I have created the below slide show! </h2>
  <div class='slideshow'>
    <div class='slides'>
      <img src="dogimage1.jpg" style='width:50em;'>
      	<div class="caption">A cute blonde dog
      </div>
    </div>
    <div class='slides'>
      <img src="dogimage2.jpeg" style='width:50em;'>
           <div class="caption">A cute dog in a cup
        </div>
    </div>
     <div class='slides'>
      <img src="dogimage3.jpeg" style='width:50em;'>
      	<div class="caption">A cute pug
      </div>
    </div>
  </div>

<div class="buttons">
  <button type="button" class="previous">See past dogs!</button>
  <button type="button" class="next">See more dogs!</button>
</div>  
 <div class="form">
 <h2> Register below to recieve weekly dog pictures. </h2>
<Form method = "POST" Action = "registration.php">
<input type="text" name= "fullname" value= "fullname"<br>
<input type="text" name= "email" value= "email"<br>
<input type ="submit" >
</Form>
</div>
<form action ="registration.php" method="get>"

</body>
</html>
 