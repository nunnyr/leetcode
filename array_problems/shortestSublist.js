     //k is the frequency
        //return the length of the shortest sublist 
        //I want to be able to figure out the frequency...so a hash
        //need a place to hold my numbers aka array

        const hash = {}
        let temp = []
        //lets iterate through and build the hash. 
        //so if that number exists then add to hash and give it a value of one

        //object ==== in
        //not object === of 

        for(let key of nums ){
            //what if it is not in the hash then set the key: value and build it
            if(!hash[key]) {
                hash[key] = 1 //so if it doesn't exist set it equal to 1
            } else {
                hash[key]++
            }
        }
        console.log("this is hash:", hash)
        frequencyCounter(hash)

    }

    //so now we are building a helper function and then invoking it in our previous function 
    //to determine which numbers show up the most frequent
    frequencyCounter = (hash) => {
        //the problem states that k is the frequency so we will declare k
        let k = 0
        for(let left in hash){
            //how do I determine the count
        }

    }
