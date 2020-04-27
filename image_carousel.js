

var slides = document.querySelectorAll('#slideshow-container .albumCovers');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
	slides[currentSlide].className = 'albumCovers';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'albumCovers showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseCarousel(){
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playCarousel(){
	pauseButton.innerHTML = 'Stop';
	playing = true;
	slideInterval = setInterval(nextSlide,3000);
}

pauseButton.onclick = function(){
	if(playing){ pauseCarousel(); }
	else{ playCarousel(); }
};