const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);

// img mouseover

let image = document.getElementById("img");
let images = [
  "img/w1.png",
  "img/w2.png",
  "img/w3.png",
  "img/w4.png",
  "img/w5.png",
  "img/w6.png",
  "img/w7.png",
];
let ok;
let exploreWatch = document.querySelector(".explore-watch");
function random() {
  let random = Math.floor(Math.random()*8);
  console.log(random);
  image.src = images[random];
  if (random==5){
    image.src = "img/w5.png"
  }

  else if (random==7) {
    image.src = "img/w7.png"
  }
}

let a;
image.addEventListener("mouseover", function (e) {
  a = setInterval("random()", 1000);
  console.log(a)
});

document.addEventListener("mouseout", function (e) {
  let b = clearInterval(a);
});

///// ******************************

let image1 = document.getElementById("img2");
let images2 = [
  "img/w1.png",
  "img/w2.png",
  "img/w3.png",
  "img/w4.png",
  "img/w5.png",
  "img/w6.png",
  "img/w7.png",
  "img/w.png",
  "img/ww.png",
];

// let exploreWatch = document.querySelector(".explore-watch");
function randoms() {
  let random = Math.floor(Math.random() * 8);
  image1.src = images2[random];
}

let a1;
image1.addEventListener("mouseover", function () {
  a1 = setInterval("randoms()", 1000);
});

document.addEventListener("mouseout", function () {
  let b = clearInterval(a1);
});


let image3 = document.getElementById("img3");
let images3 = [
  "img/w1.png",
  "img/w2.png",
  "img/w3.png",
  "img/w4.png",
  "img/w5.png",
  "img/w6.png",
  "img/w7.png",
];

// let exploreWatch = document.querySelector(".explore-watch");
function rando() {
  let random = Math.floor(Math.random() * 4);
  image3.src = images3[random];
}

let a3;
image3.addEventListener("mouseover", function () {
  a3 = setInterval("rando()", 1000);
});

document.addEventListener("mouseout", function () {
  let b = clearInterval(a3);
});




let image4 = document.getElementById("img4");
let images4= [
  "img/w1.png",
  "img/w2.png",
  "img/w3.png",
  "img/w4.png",
  "img/w5.png",
  "img/w6.png",
  "img/w7.png",
];

// let exploreWatch = document.querySelector(".explore-watch");
function rando3() {
  let random = Math.floor(Math.random() * 4);
  image4.src = images4[random];
}

let a4;
image4.addEventListener("mouseover", function () {
  a4 = setInterval("rando3()", 1000);
});

document.addEventListener("mouseout", function () {
  let b = clearInterval(a4);
});


// video player cotrole

let video = document.querySelector(".vidi")
let btn = document.querySelector("#imgss")

btn.addEventListener("click", function () {
  video.style.display = "block"
  btn.style.display = "none"
  document.getElementById('media-video').play();
  console.log(btn)
})





// var videos = document.getElementsByTagName("video"),
// fraction = 0.8;
// function checkScroll() {

//     for(var i = 0; i < videos.length; i++) {

//         var video = videos[i];

//         var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
//             b = y + h, //bottom
//             visibleX, visibleY, visible;

//             visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
//             visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

//             visible = visibleX * visibleY / (w * h);

//             if (visible > fraction) {
//                 video.play();
//             } else {
//                 video.pause();
//             }

//     }

// }

// window.addEventListener('scroll', checkScroll, false);
// window.addEventListener('resize', checkScroll, false);



window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
let vidi = document.querySelector("#play")
function videoScroll() {

  if ( document.querySelectorAll('#play[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('#play[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }}