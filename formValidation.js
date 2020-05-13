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
        let nextBtn = document.querySelector(".arrow-btn1");
        let activityInput = document.querySelector(".firstq-text-input");
      
            if(formValidation.areThereTrueValues(document.querySelectorAll(".option")) && activityInput.value !== "" && calculations.howManyInputsFilled() > 2) {
              animations.nextBtnAppearAnimation()
              nextBtn.style.display = "flex";


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
              animations.nextBtnDisappearAnimation();
           
            }
        
          }
}