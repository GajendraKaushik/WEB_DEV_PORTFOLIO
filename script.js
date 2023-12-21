const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouceFollower() {
  window.addEventListener("mousemove", function (details) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
  });
}

function firstpageAnim() {
  var t1 = gsap.timeline();
  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInout,
  })
    .to(".boundingelem", {
      y: "0",
      ease: Expo.easeInout,
      delay: -1,
      duration: 2,
      stagger: 0.1,
    })
    .from(".homebottom", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInout,
    });
}
circleMouceFollower();
firstpageAnim();
