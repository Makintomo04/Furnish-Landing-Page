const backToTop = document.querySelector("#btt");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
