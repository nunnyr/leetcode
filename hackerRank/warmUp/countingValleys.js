// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through

function countingValleys(steps, path){
    let counter = 0 
    let valleys = 0
    let flag = false

    for(let i of path){
        if(i === "U"){
            counter++
        }
        else{
            counter--
        }
        if(counter < 0 ){
        flag = true 
        }
        if(flag && counter === 0){
            valleys++
            flag = false
        }
    }
    return valleys

}

function countingValleys(steps, path) {
    //add or subtract the value +- 1 depending on U or D 
    //we need a counter starting at zero
    //if my counter is a negative number....I want to check when it is back to zero
    
      let counter = 0 
      let valleys = 0
      let flag = false
  
      for(let i of path){
          
          i === "U" ? counter++ : counter--
          // if(i === "U"){
          //     counter++
          // }
          // else{
          //     counter--
          // }
          counter < 0 ? flag = true : null
          // if(counter < 0 ){
          // flag = true 
          // }
          
          
          if(flag && counter === 0){
              valleys++
              flag = false
          }
      }
      return valleys
      
  }

console.log(countingValleys(8, UDDDUDUU));
//return the number of valleys traversed
