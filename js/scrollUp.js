const scrollUpEl = document.getElementById("scroll-up")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    scrollUpEl.style.opacity = "1";
  } else {
    scrollUpEl.style.opacity = "0";
  }
}