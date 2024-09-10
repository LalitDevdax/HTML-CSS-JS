function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });
}

function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.6,
      ease: "expo.out",
    },
    "anime"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anime"
  );

  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loco();
loading();

var page2 = document.querySelector("#page2");
var elems = document.querySelectorAll(".elem");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgimage = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimage})`;
  });
});
