

var backBtn = document.getElementById('back');
var nextBtn = document.getElementById('next');

var mainPage = document.getElementById('mainPage');
var intro = document.getElementById('intro');
var form = document.getElementById('qForm');

function startGame() {
	intro.style.display = "block";
	mainPage.style.display ="none";
	backBtn.style.display ="block";
	nextBtn.style.display ="block";

}

function goBack() {
	intro.style.display = "flex";
	mainPage.style.display = "block";
	backBtn.style.display ="none";
	nextBtn.style.display ="none";
}

function goForward() {
	form.style.display = "block";
	intro.style.display ="none";
}


