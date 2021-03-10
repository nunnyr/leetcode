class Solution {
    /*find the greatest common divisor
    If I sort my array, then my limit will be my highest number



    */ 

    solve(nums) {
        //identify a min
        let min = Math.min(...nums)
        //because anything can be divisible by 1 so our first found is 1
        let found = 1;
        //the found element should be divisible by 6, 12, 9

        //Only iterate up to the minimum
        //starting at 2 bc we are using modulo

        for(let i = 2; i <= min; i++){
            if(min % i === 0){
                //so if I have no remainder check it against other numbers      
                
                //checked every number in the array 
                //I am checking if I is divisible by ALL of the numbers in the
                // array
            //here i used a higher order function ~ every ~
                let temp = nums.every(num => num%i === 0)
                //the return of every is a boolean
                //so ifit is truthy kick into the if statement

                if(temp){
                    found = Math.max(found, i)
                }
            }
        }
        return found
    }
}