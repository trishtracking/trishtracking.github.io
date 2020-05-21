

var albumIndex;
var albums; 
var albumName; 

function initAlbums(){
	albumIndex=0;
	albums=document.getElementsByClassName("albumCovers"); 
	albums[albumIndex].style.opacity= 1; 
	albumName=document.querySelector(".albumNameHolder .albumName");
	albumName.innerText=albums[albumIndex].querySelector(".albumName").innerText; 


 	if(albums.length<2){
		var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
		nextPrevBtns.style.display="none";
	for (i = 0; i < nextPrevBtn.length; i++) {
		nextPrevBtn[i].style.display="none";
		}
	}

}
initAlbums(); 
function plusAlbums(n) {
	moveAlbum(albumIndex+n);

}
function moveAlbum(n) {
	var i;
	var current;
	var next; 
	var moveAlbumAnimClass={
		forCurent:"",
		forNext:""
	};
	
	var albumNameAnimClass;
	if(n>albumIndex) {
		if(n >= albums.length) {n=0;}
		moveAlbumAnimClass.forCurrent = "moveLeftCurrentAlbum";
		moveAlbumAnimClass.forNext = "moveLeftNextAlbum";
		albumNameAnimClass="albumNameFromTop";
		} else if (n<albumIndex) {
			if(n<0) {n=albums.length-1;}
			moveAlbumAnimClass.forCurrent="moveRightCurrentAlbum";
			moveAlbumAnimClass.forNext="moveRightPreviousAlbum";
			albumNameAnimClass="albumNameFromBottom";
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
		albumName.className = "albumName "+albumNameAnimClass;
		albumName.innerText = albums[n].querySelector(".albumName").innerText;
		albumName.style.display = "block";	
	}
	
}

var timer = null; 
function setTimer() {
	timer = setInterval(function() {
		plusAlbums(1);
	},1900); 
}

setTimer();
function playAlbums() {
	var playBtn = document.getElementById("play");
	if(timer == null) {
		setTimer();
		playBtn.style.backgroundPositionY="0px" }
		else { 
			clearInterval(timer);
			timer = null;
			playBtn.style.backgroundPositionY = "-44px" 
		}
	}

	//arrowleft = 37 arrowright = 39 
	function keyboardNav(key) {
		if (key.keyCode == "37") {
		plusAlbums(1);
			
		} else if (key.keyCode == "39") {
		plusAlbums(-1);
		}

	}
	
	window.addEventListener("keydown", keyboardNav);


