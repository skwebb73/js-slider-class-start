var slideIndex = 1;

function plusSlides(n){
  console.log("inside plusSlides with a value of " + n);
  showSlides(slideIndex += n);
}

function currentSlide(n){
  console.log(n);
  showSlides(slideIndex =n);
}


function showSlides(n){
  //console.log("inside showSlides with a value of " + n);
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  //console.log(slides);

  if (n < 1){
    slideIndex = slides.length;
  }

  if (n >slides.length){
    slideIndex = 1;
  }

//hides the slides
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none"
  }

  //changes the dots
  for(i = 0; i <dots.length; i++){
    dots[i].className= dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";

}

showSlides(slideIndex);


//opposite of display none is display block
