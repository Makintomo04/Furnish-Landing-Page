const backToTop = document.querySelector("#btt");
const bttArrow = document.querySelector("#btt i");
const ham = document.querySelector("#ham");
const links = document.querySelectorAll(".nav-link");
const linksUl = document.querySelectorAll(".nav-links");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener("click", () => {
  // document.documentElement.scrollTop = 0;
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
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
