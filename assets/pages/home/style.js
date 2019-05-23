//define some imgs
/*
- http://i.imgur.com/qK42fUu.jpg
- https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
- https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
- https://images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9
- https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
- https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
- https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
- https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450
- https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450

*/
var dropdown_link = document.querySelector("dropdown-link");

var imagesBig = [
	"assets/pages/home/bigSlide/adv1.jpg",
	"assets/pages/home/bigSlide/adv2.png",
	"assets/pages/home/bigSlide/adv3.jpg",
	"assets/pages/home/bigSlide/adv4.jpg",
	"assets/pages/home/bigSlide/adv5.jpg"
];

var linksBig = [
	"https://aspe.org/",
	"https://amegroup.ca/",
	"http://hylinesales.com/",
	"http://www.barclaysales.com/",
	"http://www.concurwest.com/"
];

var imagesSmall = [
	// "https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
	// "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
	// "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
	// "https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
	// "https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
	// "https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
	// "https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"
	
	"assets/pages/home/smallSlide/adv2.png",
	"assets/pages/home/smallSlide/adv3.jpg",
	"assets/pages/home/smallSlide/adv4.jpg",
	"assets/pages/home/smallSlide/adv5.jpg"
];

var linksSmall = [
	// "https://aspe.org/",
	"https://amegroup.ca/",
	"http://hylinesales.com/",
	"http://www.barclaysales.com/",
	"http://www.concurwest.com/"
];

var imageBig = document.getElementById("bigImg");

var linkBig = document.getElementById("linkurl");

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var body = document.querySelector("body");
var x = 0;//big images index

var imageSmall = document.getElementById("smallImg");
var linkSmall = document.getElementById("linkurl2");
var y = 0;//small images index

//change big image to the next
function displayNextImageBig() {
	x = (x === imagesBig.length-1) ? 0 : x+1;
	imageBig.src = imagesBig[x];
	linkBig.href = linksBig[x];
}

//change image to the previous one
function displayPreviousImageBig() {
	x = (x <=0 ) ? imagesBig.length-1 : x-1;
	imageBig.src = imagesBig[x];
	linkBig.href = linksBig[x];
}

//change small image to the next
function displayNextImageSmall() {
	y = (y === imagesSmall.length-1) ? 0 : y+1;
	imageSmall.src = imagesSmall[y];
	linkSmall.href = linksSmall[y];
}

//start timer to change image when page is loaded
function startTimer() {
	// window.setInterval(displayNextImageBig, 4500); //according to feedback, the big vieport is set to fixed ipicture for now
	window.setInterval(displayNextImageSmall, 3500);
}

//body.addEventListener("load", startTimer);
body.onload = startTimer();

//add event listeners to buttons
prevButton.addEventListener("click", displayPreviousImageBig);
nextButton.addEventListener("click", displayNextImageBig);


//add onclick event to news&events button

// dropdown_link.addEventListener("click", function(){
// 	window.location.href="/Users/XiaoyingChang/Documents/web%20development/ASPE%20project/assets/pages/news%20and%20events/newsAndEvents.html";
// });