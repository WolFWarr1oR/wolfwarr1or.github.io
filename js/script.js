const btnScrlToTop = document.querySelector("#return-to-top");
var rootElement = document.documentElement;
const navBar = document.querySelector(".SiteNav");
btnScrlToTop.addEventListener("click", function () {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("scroll", function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.658) {
    // Show button
  btnScrlToTop.classList.add("showBtn");
  } else {
    // Hide button
  btnScrlToTop.classList.remove("showBtn");
  }
});

document.addEventListener("scroll", function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.03) {
    // Show button
  navBar.classList.add("is-docked");
  } else {
    // Hide button
  navBar.classList.remove("is-docked");
  }
});

document.getElementById("year").innerHTML = new Date().getFullYear();

const lang = document.querySelector(".NavbarFooter-selector");
const langOpenned = document.querySelector(".NavbarFooter-selector.is-open");
const langOverlay = document.querySelector(".NavbarFooter-overlay");

lang.addEventListener("click", function () {
  // Scroll to top logic
  lang.classList.add("is-open");
  langOverlay.classList.add("dblock");
});

langOverlay.addEventListener("click",function(){
  lang.classList.remove("is-open");
  langOverlay.classList.remove("dblock");
});




