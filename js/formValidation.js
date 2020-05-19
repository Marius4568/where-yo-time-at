import { animations } from "./animations.js";
import { calculations } from "./calculations.js";


export let formValidation = {

  areThereTrueValues:  function areThereTrueValues(arr) {
        let istrue = false;
      arr.forEach(el => {
        if(el.value !== "") {
          istrue = true
        }
      })
      return istrue
      },
      
    showNextIfFormComplete:  function showNextIfFormComplete(e) {
        // let leftSection = document.querySelector(".left-section");
        let nextBtn = document.querySelector(".arrow-btn1");
        let activityInput = document.querySelector(".firstq-text-input");
        let spaceHolderNextBtn = document.querySelector(".space-holder-for-arrow1");
      
            if(formValidation.areThereTrueValues(document.querySelectorAll(".input-red")) && activityInput.value !== "" && calculations.howManyInputsFilled() > 2) {

              if(nextBtn.style.visibility === "inherit" || nextBtn.style.visibility === "visible" || nextBtn.style.visibility === "initial") {
                return 0
              }
                  animations.nextBtnAppearAnimation()
                  spaceHolderNextBtn.style.display = "none";
                  nextBtn.style.display = "inline-block";


            ///////Local storage handling//////////////////////////
              document.querySelector(".arrow-btn1").addEventListener("click", (e) => {

              let formData = {
                activity: "yoga",
                completionTime: 5
              }
                
                let minutes = document.querySelector(".minutes-wrap input").value;
                let hours = document.querySelector(".hours-wrap input").value;
                if(minutes === "") {
                  minutes = 0;
                  hours = parseInt(hours)
                }
          
                if(hours === "") {
                  hours = 0;
                  minutes = parseInt(minutes)
                }
          
                if (hours && minutes !== "") {
                  hours = parseInt(hours);
                  minutes = parseInt(minutes);
                }
                formData.activity = document.querySelector(".firstq-text-input").value;

                let unitAndFrequency = calculations.getUnitAndFrequency();
      
 
                formData.activity = document.querySelector(".firstq-text-input").value;

                formData.completionTime = calculations.calcYearTime((minutes + (hours*60)), unitAndFrequency[0], unitAndFrequency[1]);

                localStorage.setItem("formData", JSON.stringify(formData));


                
               })
               /////////////////////////////////////////////////////   
                
            } else {
              if(nextBtn.style.visibility === "hidden") {
                return 0
              }
              animations.nextBtnDisappearAnimation()
            }
        
          }
}