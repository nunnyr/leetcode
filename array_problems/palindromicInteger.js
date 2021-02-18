let stringNum = num.toString()
let reverse = stringNum.length - 1

for(let i = 0; i < stringNum.length / 2; i++){
    if(stringNum[i] !== stringNum[reverse]){
        return false 
    }
    reverse--
}
return true
}