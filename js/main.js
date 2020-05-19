import { animations } from "./animations.js";
// import { calculations } from "./calculations.js";
import { formValidation } from "./formValidation.js"

barba.init({

  // transitions: [{
  //   name: 'home-enter-transition',
  //   enter(data) {
  //     if(data.current.namespace === "home"){
  //       animations.pageTransitionEnter();
  //     }
  //   }
  // }],

  views: [{
    namespace: 'home',

    afterEnter(data) {

      ['keyup','click'].forEach( evt => 
        document.querySelector("form").addEventListener(evt, formValidation.showNextIfFormComplete, true)  
    );

   document.querySelector("#thirdq-wrap").addEventListener("focus", (e) => {

     document.querySelectorAll(".input-red").forEach(el => {
       if(el !== e.target) {
         el.setAttribute("disabled", true)
         el.parentElement.classList.add("disabled");
       }
       
     });
   }, true)


 document.querySelector("#thirdq-wrap").addEventListener("blur", (e) => {

     document.querySelectorAll(".input-red").forEach(el => {
       if(e.target.value === "") {
         el.removeAttribute("disabled")
         el.parentElement.classList.remove("disabled");
       }
       
     });
   }, true);


    },

    beforeLeave(data) {

      animations.pageTransitionLeave();
    },

    beforeEnter(data) {
      animations.pageTransitionEnter()
    },

    },

    {
      namespace: 'result', 

    beforeEnter(data) {


      

      
      ///add to params: activity, timeValues
function createAndRenderElements() {

 let locStorFormData = JSON.parse(localStorage.getItem("formData"));
  let totalTime = document.querySelector(".total-time");

  for(let i = 0; i < locStorFormData.completionTime.length; i++ ) {
    let timeHolder = document.createElement("div");
  let digitHolder = document.createElement("p");
  let unitHolder = document.createElement("p");
  digitHolder.classList.add("digit-holder");
  unitHolder.classList.add("unit-holder");
  timeHolder.classList.add("time-holder");
  digitHolder.textContent = locStorFormData.completionTime[i][0];
  unitHolder.textContent = locStorFormData.completionTime[i][1];
  
  timeHolder.append(digitHolder);
  timeHolder.append(unitHolder);
  
  totalTime.append(timeHolder);
  }
  
  /////set span text to the activity
document.querySelector(".activity-placeholder").textContent = capitalize(locStorFormData.activity);
  //////
  
}

createAndRenderElements();


let queryRandomImg = `https://source.unsplash.com/1600x900/?${JSON.parse(localStorage.getItem("formData")).activity}`;

document.querySelector(".results-bg-img").setAttribute("src", queryRandomImg);
       
    },

    afterEnter(data) {
      
      isImageFinishedLoading();

      
     
      function isImageFinishedLoading(){

        if(document.querySelector(".results-bg-img").complete) {
console.log("finished");
          
     
          
      
      
        let tl = gsap.timeline();
     
        tl.set(".preloader", {duration: 0.5, x: "100%"});
        
        tl.set(".preloader", {delay: 0.5, duration: 0.5, display: "none"});
        
        document.querySelector(".preloader").style.display = "none";

        animations.pageTransitionEnter()
        animations.pageTransitionEnterResults();

        return 0;
      }

      else {
        
        setTimeout(isImageFinishedLoading, 100);
      }
      
      }
      
    },

    beforeLeave(data) {
      
      animations.pageTransitionLeave()
    },

  },

{ namespace: "mob-select",

beforeEnter(data) {

  animations.pageTransitionEnter()

},

beforeLeave(data) {

  animations.pageTransitionLeave()

}

}]
})




const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}




