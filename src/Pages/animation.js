// window.addEventListener("scroll", function () {
//   var scroll = window.scrollY || window.pageYOffset;
//   var screenHeight = window.innerHeight;
//   var sectionOffset = document.querySelector(".section2-2").offsetTop;
//   var sectionHeight = document.querySelector(".section2-2").offsetHeight;
//   var scrollPositionInSection = scroll - sectionOffset + screenHeight;

//   if (scrollPositionInSection > 0 && scrollPositionInSection < sectionHeight) {
//     document.querySelector(".iphone").style.right = "0";
//   } else {
//     document.querySelector(".iphone").style.right = "-100%";
//   }

//   if (
//     scrollPositionInSection > screenHeight &&
//     scrollPositionInSection < sectionHeight * 2
//   ) {
//     document.querySelector(".ipad").style.right = "0";
//   } else {
//     document.querySelector(".ipad").style.right = "-100%";
//   }

//   if (
//     scrollPositionInSection > screenHeight * 2 &&
//     scrollPositionInSection < sectionHeight * 3
//   ) {
//     document.querySelector(".laptop").style.right = "0";
//   } else {
//     document.querySelector(".laptop").style.right = "-100%";
//   }
// });
