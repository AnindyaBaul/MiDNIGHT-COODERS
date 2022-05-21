var box = document.getElementById("box-js")

function box1e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/11.jpg)`;
  bg.style.backgroundSize = "100%";

}
function box2e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/22.jpg)`;
  bg.style.backgroundSize = "100%";
}
function box3e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/33.jpg)`;
  bg.style.backgroundSize = "100%";
}
function box4e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/44.jpg)`;
  bg.style.backgroundSize = "100%";
}
function mail() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "500px";
  slideJs.innerText = "midnightcoders71@gmail.com";
  slideJs.style.transition = "1s ease-in-out"
}
function phone() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "0px";
  if (slideJs.style.width === "0px") {
    slideJs.style.width = "500px";
    slideJs.innerText = "+8801408306496";
  }




}
function linkedin() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "500px";
  slideJs.innerHTML = `
                    <a target="#_blank" href="https://www.linkedin.com/in/anindya-baul-292760238/">https://www.linkedin.com/in/anindya-baul-292760238/ </a>
  `
}
function fb() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "500px";
  slideJs.innerHTML = `
  <a target="#_blank" href="https://www.facebook.com/anindya.baul.Mrinmoy">MiDnight-CODERS FACEBOOK-PAGE </a>
  `;
}
function git() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "500px";
  slideJs.innerHTML = `
  <a target="#_blank" href="https://github.com/AnindyaBaul">MiDnight-CODERS Github  </a>
  `;
}