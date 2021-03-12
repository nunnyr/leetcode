function tellmetheday(today, k){
    let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let start = 0
    //figure out the index of today.
    for(let day of week){
      if(day === today){
        start = week.indexOf(day)
      }
    }
    let remainder = k % 7
  
    if(start + remainder > 7){
      return week[start+remainder-7]
    }else{
      return week[start + remainder]
    }
  }
  // console.log("whoops", 2 % 7)
  console.log(tellmetheday("Thursday", 12317941747))
  