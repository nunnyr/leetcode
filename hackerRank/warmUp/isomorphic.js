



function isIsomorphic(str1, str2){
    const setStr1 = new Set(str1)
    const setStr2 = new Set(str2)
    const uniqStr1 = Array.from(setStr1)
    const uniqStr2 = Array.from(setStr2)
    const hash1 = helper(uniqStr1)
    const hash2 = helper(uniqStr2)
    
    let s1 = ""
    let s2 = ""
    
    for(let i in str1){
      s1+=hash1[str1[i]]
    }
    for(let i in str2){
      s2+=hash2[str2[i]]
    }
    console.log(s1,s2)
    return s1 === s2
  }
  
  const helper = (str) =>{
    const letter = "abcdefghijklmnopqrstuvwxyz"
    const hash = {}
    let i = 0
    while(i<str.length){
      hash[str[i]] ? null : hash[str[i]] = letter[i]
          i++
      }
    return hash
  }
  
  console.log(isIsomorphic("nunny", "reyes"))







  function isIsomorphic(str1, str2){
  const setStr1 = new Set(str1)
  const setStr2 = new Set(str2)
  const uniqStr1 = Array.from(setStr1)
  const uniqStr2 = Array.from(setStr2)
  const hash1 = helper(uniqStr1)
  const hash2 = helper(uniqStr2)
  let s1 = ""
  let s2 = ""

  for(let i in str1){
    s1+=hash1[str1[i]]
  }
  for(let i in str2){
    s2+=hash2[str2[i]]
  }
  return s1 === s2
}

const helper = (str) =>{
  const letter = "abcdefghijklmnopqrstuvwxyz"
  const hash = {}
  let i = 0
  while(i<str.length){
    hash[str[i]] ? null : hash[str[i]] = letter[i]
    i++
    }
  return hash
}