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




class Solution {
    solve(nums) {
        const arr = []
        let i = 0
        while(i<nums.length){
            arr.push([])
            let count = 0
            while(i<nums.length && count<1){
                arr[arr.length-1].push(nums[i])
                count++
                i++
            }
            if(i<nums.length){
                arr[arr.length-1].push(nums[i])
            }
            i++
        }

// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]
        console.log(arr)
        
        i = 0
        if(arr.length%2==0){
            while(i < arr.length){
                if (arr[i+1].length == arr[i].length){
                    [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
                }else{
                    [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
                    let temp = arr[i+1][0]
                    arr[i+1][0] = arr[i+1][1]
                    arr[i+1][1] = temp
                }
                i+=2
            }
        }else{
            while(i < arr.length-1){
                [arr[i+1],arr[i]] = [arr[i],arr[i+1]]
                i+=2
            }
        }
        return arr.flat()
    }
}