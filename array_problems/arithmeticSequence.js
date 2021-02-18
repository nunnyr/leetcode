class Solution {
    solve(nums) {
        //you are given a list of integers nums used to be an arithmetic sequence
        //the array is + 1 the length given
        //do I find the difference

        let diff = (nums[nums.length-1] - nums[0])/ 2


             //you are always given the first and last element
             //we are missing one element
             //





        let missing
        for(let i = 0; i < nums.length; i++){
            // console.log("this is i:", nums[i])
            // console.log("diff:", diff)
            //if my number plus the difference does not equal the next number
            if(nums[i] + diff !== nums[i +1]){
                // console.log("HERE")
                // console.log("this is missing:", missing)
                missing = nums[i] + diff
                return missing 
            }
        }
    }
}