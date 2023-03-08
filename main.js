window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myNav").classList.add("scroll");
  } else {
    document.getElementById("myNav").classList.remove("scroll");
  }
}

var overlay = document.getElementById("overlay"),
    contacto = document.getElementById("contacto"),
    cruz = document.getElementById("cruz");

contacto.addEventListener('click', function () {
  overlay.classList.add('active');
});
cruz.addEventListener('click', function () {
  overlay.classList.remove('active');
});