// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background", "#ff0000");
//   });
// });
// window.addEventListener(
//   "scroll",
//   function () {
//     myfunction();
//   },
//   false
// );
// function myfunction() {
//   alert("All foo");
// }
window.onscroll = function () {
  myFunction();
};

var section = document.querySelector(".section-meals");
var navigation = document.querySelector("nav");
var sticky = section.scrollHeight;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset > 0) {
    navigation.classList.remove("sticky");
  } else {
    navigation.classList.add("sticky");
  }
}
