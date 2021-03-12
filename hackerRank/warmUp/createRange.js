class Solution {
    solve(nums) {
        let count = 0
        if(nums.length===1) return true
        for(let i=0; i <nums.length-1; i++){
            if(Math.abs(nums[i]-nums[i+1]) !== 1){
                count++
            }
        }
        if(nums[length-1]-nums[0]))
        return count<2
    }
}