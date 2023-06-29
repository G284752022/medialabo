var box = document.getElementById("box");
box.addEventListener("scroll", function() {
  if (this.scrollTop > 100) {
    this.style.opacity = "1";
  } else {
    this.style.opacity = "0";
  }
});