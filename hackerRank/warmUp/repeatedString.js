function repeatedString(s, n){
    let found = 0
    const remainder = n%s.length 
    const repeatTimes = Math.floor(n/s.length) 
    
    for(let char of s){
       if(char === 'a') found++
    }
    
    found*= repeatTimes
    for(let char of s.slice(0,remainder)){
      if(char === 'a') found++
    } 
    return found
  }
  