var i= 0; //start point
var images =[];
var time = 3000;

images[0] = "freecodecamp-128.png";
images[1] = "iconfinder_codewars_4691329";
images[2] = "freecodecamp-128.png";
images[3] = "iconfinder_codewars_4691329";
images[4] = "freecodecamp-128.png";

function nextImage() {
  document.carousel.src = images[i];

  if (images[i] < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("nextImage()", time); 

}

window.onload = nextImage;