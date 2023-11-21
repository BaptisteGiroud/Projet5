// Carousel tableau // 

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables //

let i = 0

let imgCarousel = slides[i]["image"]
let tagCarousel = slides[i]["tagLine"]
let sourceImg = "./assets/images/slideshow/" + imgCarousel

// HTML cible //

let leftArrow = document.querySelector(".arrow_left")
let rightArrow = document.querySelector(".arrow_right")
let slidePicture = document.querySelector(".banner-img")
let slideTag = document.querySelector("#banner p")
let load = document.querySelector("body")

// Dots //

for (let i = 0; i < slides.length; i++){
	let dotsCarousel = document.querySelector(".dots")
	dotsCarousel.insertAdjacentHTML("afterbegin", `<div class="dot"></div>`)
}

let whichDot = document.querySelectorAll(".dots .dot")
whichDot[0].classList.add("dot_selected")

// Buttons //

let switchleft = leftArrow.addEventListener("click", () => {
	i--
	if (i < 0){
		i = slides.length-1
	}
	switchSlide()
	selectCurrentDot(i, whichDot)
})

let switchright = rightArrow.addEventListener("click", () => {
	i++
	if (i > slides.length-1){
		i = 0
	}
	switchSlide()
	selectCurrentDot(i, whichDot)
})

// Functions //

function switchSlide(){
	imgCarousel = slides[i]["image"]
	tagCarousel = slides[i]["tagLine"]
	sourceImg = "./assets/images/slideshow/" + imgCarousel
	slidePicture.src=`${sourceImg}`
	slideTag.innerHTML = tagCarousel
	console.log(i)
}

function selectCurrentDot(i, whichDot){
	for (dot = 0; dot < slides.length; dot++){
		if (whichDot[dot].classList.contains("dot_selected")){
			whichDot[dot].classList.remove("dot_selected")
		}
	}
	whichDot[i].classList.add("dot_selected")
}