 export let animations = {

    pageTransitionLeave: function pageTransitionLeave() {
    let tl = gsap.timeline();
    tl.to(".transition-div", {duration: 1, opacity: 0});
  },
  
   pageTransitionEnter: function pageTransitionEnter() {

    let tl = gsap.timeline();
    tl.from(".transition-div", {duration: 1, opacity: 0});
   },

   pageTransitionEnterResults: function pageTransitionEnterResults() {
      let tl = gsap.timeline();
      // tl.from(".preloader", {duration: 0.3, opacity: 0});
      // tl.from(".transition-div", {duration: 1, opacity: 0});
      tl.from(".unaffected-div", {duration: 1, opacity: 0, translateX: -100});
     },

   nextBtnAppearAnimation: function nextBtnAppearAnimation() {gsap.fromTo(".next-btn", {autoAlpha: 0}, {autoAlpha: 1, duration: 0.3})},

   nextBtnDisappearAnimation: function nextBtnDisappearAnimation() {gsap.to(".next-btn", 0.3, {autoAlpha: 0, })}
}



 