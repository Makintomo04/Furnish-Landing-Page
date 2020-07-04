const backToTop = document.querySelector("#btt");
const ham = document.querySelector("#ham");
const links = document.querySelectorAll(".nav-link");
const linksUl = document.querySelectorAll(".nav-links");
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

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    linksUl[0].classList.remove("nav-reveal");
    // if (e) {
    //   links[i].classList.add("active");
    // } else {
    //   links[i].classList.remove("active");
    // }
  });
}

ham.addEventListener("click", (e) => {
  console.log("clicked");
  linksUl[0].classList.toggle("nav-reveal");
});
