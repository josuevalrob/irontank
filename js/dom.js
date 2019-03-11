
// const toggleClass = (el, className) => el.classList.toggle(className);

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('fakeStart').onclick(
//     toggleClass(document.getElementsByClassName('play')[0], 'active')
//     // console.log()
//   )
// })
function myFunction() {
   var element = document.getElementById("play");
   element.classList.toggle("play");
   element.classList.toggle("stop");
   element.classList.toggle('hide')
}