window.addEventListener("scroll", function () {
  var navbar = this.document.getElementById("navbar");
  if (this.window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
