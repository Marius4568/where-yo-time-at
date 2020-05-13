export let calculations = {

    howManyInputsFilled() {
        let num = 0;
        document.querySelectorAll("input").forEach(el => {
          if(el.value !== "") {
            num ++;
          }
        })
        return num
      },

    getUnitAndFrequency() {
        let arr = [];
          document.querySelectorAll(".option").forEach(el => {
            if(el.value !== ""){arr.push(el.id, el.value);}
          });
        
         return arr
        },
        
        
    formatDuration (minutes) {
            let time = { year: 525600, day: 1440, hour: 60, minute: 1};
              let  res = [];
            
            for (var key in time) {
              if (minutes >= time[key]) {
                var val = Math.floor(minutes/time[key]);
                res.push([val, val > 1 ? key + 's' : ' ' + key]);
                minutes = minutes % time[key];
              }
            }
           
            return res;
          },
        
        
        
    calcYearTime(minutes, timeUnit, frequency) {
        calculations.formatDuration = calculations.formatDuration.bind(calculations);

        let times;
        
        switch(timeUnit) {
        
        case "tpmonth": 
            times = frequency * 12;
            break;
        case "tpweek": 
            times = frequency * 52;
            break;
        case "tpday": 
            times = frequency * 365;
            break;
        
        }
        
        let totalTimeInMin = times * minutes;
        
    
        return this.formatDuration(totalTimeInMin);
        
        }  
}