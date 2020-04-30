

var albumIndex,albums,albumNameHolder; 
function initAlbums(){
	albumIndex = 0;
	albums = document.getElementsByClassName("albumCovers");
	albums[albumIndex].style.opacity=1; 

	albumName = document.querySelector(".albumNameHolder .albumName");
	albumName.innerText = albums[albumIndex].querySelector(".albumName").innerText; 

 //disable nextPrevBtn if first album 
 if(albums.length<=1){
	var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
	nextPrevBtns.style.display="none";
	for (i = 0; i < nextPrevBtn.length; i++) {
		nextPrevBtn[i].style.display="none";
	}
}

initAlbums(); 
function plusAlbums(n) {
	moveSlide(albumIndex+n);

}
function moveAlbums(n) {
	var i;
	var current,next; 
	var moveAlbumAnimClass={
		forCurent:"",
		forNext:""
	};
	
	if(n>albumIndex) {
		if(n>=albums.length) {n=0;}
		moveAlbumAnimClass.forCurrent="moveLeftCurrentAlbum";
		moveAlbumAnimClass.forNext="moveLeftNextAlbum";
		} else if (n<albumIndex) {
			if(n==0) {n=albums.length-1;}
			moveAlbumAnimClass.forCurrent="moveRightCurrentAlbum";
			moveAlbumAnimClass.forNext="moveRightPreviousAlbum";
		}
	
	if(n!=albumIndex) {
		next = albums[n];
		current = albums[albumIndex];
		for (i = 0; i < albums.length; i++) {
			albums[i].className = "albumCovers";
			albums[i].style.opacity = 0;
		}
	
		current.classList.add(moveAlbumAnimClass.forCurrent);
		next.classList.add(moveAlbumAnimClass.forNext);
		albumIndex = n;
		albumName.style.display="none";
		albumName.className = "albumName";
		albumName.innerText = albums[n].querySelector(".albumName").innerText;
		albumName.style.display = "block";	
	}
	
}

var timer = null; 
function setTimer() {
	time = setInterval(function() {
		plusAlbums(1);
	}, 2000); 
}

setTimer();
function playPauseAlbums() {
	var playPauseBtn = document.getElementById("playPause");
	if(timer == null) {
		setTimer();
		playPauseBtn.style.backgroundPositionY="0px" }
		else { 
			clearInterval(timer);
			timer = null;
			playPauseBtn.style.backgroundPositionY = "-33px" //moves playpause image up by 33px to reveal pause button
		}
	}



