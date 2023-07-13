//menu
const li = document.querySelectorAll("nav>ul>li");
li.forEach((elem, i) => {
  elem.addEventListener("mouseenter", (Cl) => {
    Cl.target.lastElementChild.classList.add("active");
    if (i === 0 || i === 11 || i === 12) {
      elem.firstElementChild.classList.remove("active");
    }
  });
  elem.addEventListener("mouseleave", (Cl) => {
    setTimeout(() => {
      Cl.target.lastElementChild.classList.remove("active");
    }, 220);
  });
});
//swiper
const wrapper = document.getElementById("swiper-wrapper");
const pagDots = document.querySelectorAll(".pag span");
const itemFigure = document.getElementsByClassName("slide")[0].clientWidth;
const slide = document.querySelectorAll(".slide");
const slideItems = document.querySelectorAll(".slide a");
const btn = document.querySelector(".btn");
const slideTitle = document.querySelectorAll(".inner .info-bottom");
const slideInner = document.querySelectorAll(".inner");
slide.forEach((elem, i) => {
  elem.style.transform = "translateX(" + itemFigure * i + "px)";
});
document.getElementsByClassName("slide")[10].style.transform =
  "translateX(-" + itemFigure + "px)";
//opacity slide active
function opa() {
  for (let i = 0; i < slideItems.length; i++) {
    if (slideId == i) {
      slideItems[i].classList.add("opa");
      slideTitle[i].classList.add("bottom-show");
    } else {
      slideItems[i].classList.remove("opa");
      slideTitle[i].classList.remove("bottom-show");
    }
  }
}
//swiper wrapper Move
function move(turn) {
  wrapper.style.transform = "translateX(-" + itemFigure * turn + "px)";
  wrapper.style.transition =
    "transform 0.001s cubic-bezier(0.645, 0.045, 0.355, 1) 0s";
  pagDots.forEach((pag) => {
    pag.classList.remove("active-pag");
    pagDots[turn].classList.add("active-pag");
  });
}
function moveLast() {
  wrapper.style.transform = "translateX(" + itemFigure + "px)";
}
//swiper puse and start button
btn.addEventListener("click", () => {
  let btn_svg = document.querySelectorAll(".btn svg");
  btn_svg.forEach((elem) => {
    elem.classList.toggle("p-s");
  });
  if (false == btn.firstElementChild.classList.contains("p-s")) {
    automove();
    Window.intraval();
  } else if (true == btn.firstElementChild.classList.contains("p-s")) {
    Window.Cintraval();
  }
});
//swiper auto move
let intraval;
Window.intraval = function () {
  intraval = setInterval(automove, 3500);
};
Window.Cintraval = function () {
  clearInterval(intraval);
};
let slideId = 1;
function automove() {
  if (slideId === pagDots.length) {
    slideId = 0;
  }
  move(slideId);
  opa();
  slideId++;
  if (slideId === 1) {
    document.getElementsByClassName("slide")[10].style.transform =
      "translateX(-" + itemFigure + "px)";
  } else {
    document.getElementsByClassName("slide")[10].style.transform =
      "translateX(" + itemFigure * 10 + "px)";
  }
  if (slideId === 11) {
    document.getElementsByClassName("slide")[0].style.transform =
      "translateX(" + itemFigure * 11 + "px)";
  } else {
    document.getElementsByClassName("slide")[0].style.transform =
      "translateX(0px)";
  }
}
//swiper pag
for (let i = 0; i < pagDots.length; i++) {
  pagDots[i].addEventListener("click", () => {
    Window.Cintraval();
    btn.lastElementChild.classList.remove("p-s");
    btn.firstElementChild.classList.add("p-s");
    move(i);
    slideId = i;
    if (i === 0) {
      document.getElementsByClassName("slide")[10].style.transform =
        "translateX(-" + itemFigure + "px)";
    } else {
      document.getElementsByClassName("slide")[10].style.transform =
        "translateX(" + itemFigure * 10 + "px)";
    }
    if (i === 10) {
      document.getElementsByClassName("slide")[0].style.transform =
        "translateX(" + itemFigure * 11 + "px)";
    } else {
      document.getElementsByClassName("slide")[0].style.transform =
        "translateX(0px)";
    }
    opa();
    slideId = i + 1;
  });
}
