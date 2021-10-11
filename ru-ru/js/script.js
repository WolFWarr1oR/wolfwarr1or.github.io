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

// document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector(".NavbarFooter-copyright").append(new Date().getFullYear());

const lang = document.querySelector(".NavbarFooter-selector");
const langOpenned = document.querySelector(".NavbarFooter-selector.is-open");
const langOverlay = document.querySelector(".NavbarFooter-overlay");

lang.addEventListener("click", function () {
  // Scroll to top logic
    lang.classList.add("is-open");
    langOverlay.classList.add("dblock");
});

const herospotlight_name = document.querySelector("h2.HeroSpotlight-title");
herospot = function(as){
  let name = as.getAttribute("data-spotlight-header");
  let image = as.getAttribute("data-spotlight-image");
  let caption = as.getAttribute("data-spotlight-caption");
  document.querySelector("h2.HeroSpotlight-title").innerHTML = name;
  document.querySelector(".HeroSpotlight-caption>p").innerHTML = caption;
  document.querySelector(".HeroSpotlight-image").style.backgroundImage = "url('"+image+"')";
  // document.querySelector(".HeroSpotlight-image").style.backgroundImage = "url('"${image}"')";
}

langOverlay.addEventListener("click",function(){
    lang.classList.remove("is-open");
    langOverlay.classList.remove("dblock");
});
