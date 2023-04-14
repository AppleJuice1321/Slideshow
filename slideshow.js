const SLIDESHOW_IMG = document.querySelector(".slideshow_image")
// console.log(SLIDESHOW_IMG)
const SLIDESHOW_FORWARD = document.querySelector(".slideshow_forwardButton")
const SLIDESHOW_BACKWARD = document.querySelector(".slideshow_backwardButton")
// const SLIDESHOW = document.querySelector(".slideshow")
// const SLIDESHOW_CAPTION = document.querySelector(".slideshow_imageCap")

const IMAGES = ["https://picsum.photos/300/300?random=1", "https://picsum.photos/300/300?random=2", "https://picsum.photos/300/300?random=3", "https://picsum.photos/300/300?random=4", "https://picsum.photos/300/300?random=5"]

// const IMAGES_CAPTION = ["1/5", "2/5", "3/5", "4/5", "5/5"]

var index = 0
// Everything infront of a . is an object
SLIDESHOW_IMG.src = IMAGES[index]

SLIDESHOW_FORWARD.addEventListener("click", shuffleForward)
SLIDESHOW_BACKWARD.addEventListener("click", shuffleBack)

// IMAGES
function shuffleForward(event) {
    index++
    if (IMAGES.length === index) {
        // return
        index = 0
    }
    // index = index + 1
    SLIDESHOW_IMG.src = IMAGES[index]
}

function shuffleBack(event) {
    index--
    if (index < 0) {
        index = IMAGES.length - 1
    }
    SLIDESHOW_IMG.src = IMAGES[index]
}

// // caption
// function shuffleForward(event) {
//     index++
//     if (IMAGES_CAPTION.length === index) {
//         // return
//         index = 0
//     }
//     // index = index + 1
//     SLIDESHOW_CAPTION.class = IMAGES_CAPTION[index]
// }



// let dots = document.getElementsByClassName("dot")

// function showDots(n) {
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
//     }

// const SLIDESHOW_SPINNING = [
//     { transform: "rotate(0) scale(1)" },
//     { transform: "rotate(360deg) scale(0)" },
// ];

// const SLIDESHOW_TIMING = {
//     duration: 2000,
//     iterations: 1,
//   };

// const SLIDESHOW_ANIMATION = document.querySelector(".slideshow_imageAnimation")

// SLIDESHOW_ANIMATION.addEventListener("click", () => {
//     SLIDESHOW_ANIMATION.animate(SLIDESHOW_SPINNING, SLIDESHOW_TIMING);
// });

// lexical function = function() or lambda = () =>