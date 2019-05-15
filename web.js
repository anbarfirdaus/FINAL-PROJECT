$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// FORM VALIDATION
function validateForm() {
    var firstname = document.forms["myForm"]["firstname"].value;
    var email = document.forms["myForm"]["email"].value;
    if (firstname == "") {
      alert("Your name must be filled out");
      return false;
    } if 
    (email == "") {
        alert("Your email must be filled out");
        return false;
      }

  }


  