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
      tl.from(".unaffected-inner", {duration: 1, opacity: 0, translateX: -100});
     },

   nextBtnAppearAnimation: function nextBtnAppearAnimation() {gsap.fromTo(".arrow-btn1", {autoAlpha: 0}, {autoAlpha: 1, duration: 0.1})},

   nextBtnDisappearAnimation: function nextBtnDisappearAnimation() {
      gsap.fromTo(".arrow-btn1", {autoAlpha: 1}, {duration: 0.1, autoAlpha: 0})}

}
