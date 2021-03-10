class Solution {
    solve(n) {
        let string = n.toString().split("")
        for(let i in string){
            if(string[i] !== "3"){
                string[i] = "3"
                break
            }
        }
        let final = string.join("")
        return parseInt(final)
    }
}