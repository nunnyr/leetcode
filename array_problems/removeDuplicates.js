
var removeDuplicates = function(nums) {
    //modify the array in place, array is already sorted
    //remove the duplicates in place
    //we are returning unique values, we don't care about repeating values after the     //last element
    //have two pointers
    
    
    for(let num in nums) {
        //if there is no array take that into account
        if(nums.length === 0){
            return 0
        } 
        let i = 0
        for(let j = 1; j < nums.length; j++){
            //compare the elements at pointers
            if(nums[i] !== nums[j]){
                i++
                //replace the element with the element my second pointer is showing
                nums[i] = nums[j]
            }
        }  
        return i + 1
    }
};