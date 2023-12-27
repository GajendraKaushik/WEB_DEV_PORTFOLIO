const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouceFollower(xscal, yscal) {
  window.addEventListener("mousemove", function (details) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscal}, ${yscal})`;
  });
}

var timeout;

function circleSquizer() {
  // defined default values
  var xscal = 1;
  var yscal = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (details) {
    this.clearTimeout(timeout); // to macke timeout value zero
    // using gsap clamp to segt the min and max range
    xscal = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev);
    yscal = gsap.utils.clamp(0.8, 1.2, details.clientY - yprev);

    xprev = details.clientX;
    yprev = details.clientY;

    circleMouceFollower(xscal, yscal);
    timeout = this.setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
    }, 100);
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
circleSquizer();
firstpageAnim();

function imagepopup() {

}

document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var diffrot = 0;
  element.addEventListener("mouseleave", function (details){
    gsap.to(element.querySelector("img"), { 
      opacity: 0, 
      ease: Power1,
    });
  })
  element.addEventListener("mousemove", function (details) {
    //element.getBoundingClientRect() return an an object with all the details of the selected div 

    var diff = details.clientY - element.getBoundingClientRect().top;
    // clientY will give us the current posison of y axis and top will giv us the points from top 
    
    diffrot = details.clientX - rotate;
    rotate = details.clientX;
    gsap.to(element.querySelector("img"), { 
      opacity: 1, 
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot*0.8)
    });
    // console.log(details)
    // console.log(details.clientX, details.clientY)
  });
});