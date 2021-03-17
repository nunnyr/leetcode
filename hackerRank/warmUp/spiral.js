//Matrix Spiral Copy
//Given a 2D array (matrix) inputMatrix of integers, 
//create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, 
//clockwise. 
//Your function then should return that array. 
//Analyze the time and space complexities of your solution.

//Example:

        //                [ [1,   2,   3,  4,   5],
          //               [14,  15,  16,  17,  6],
            //             [13,  20,  19,  18,  7],
              //           [12,  11,  10,  9,   8] ]

/*output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
/ See the illustration below to understand better what a clockwise spiral order looks like.

---------->
^-------->|
|         |
|         |
|         v
<---------
//console.log('Practice makes Perfect!'); 
// https://leetcode.com/problems/spiral-matrix/solution/
*/

var spiralOrder = function(matrix) {
    // setup a empty array to store the final result
      const result = []
      let m = matrix.length // 4
      let n = matrix[0].length // 5
  
      let startCol = 0
      let endCol = n-1 // 4
      let startRow = 0
      let endRow = m-1 // 3
      //
      
      while(startCol<=endCol && startRow<=endRow){
          for(let i=startCol;i<=endCol;i++){
              if(m*n === result.length) break
              result.push(matrix[startRow][i])
          }
          startRow++
          console.log("1 for loop",result)
          
          for(let i=startRow;i<=endRow;i++){
              if(m*n === result.length) break
              result.push(matrix[i][endCol])
          }
          endCol--
          console.log("2 for loop",result)
        
          for(let i=endCol;i>=startCol;i--){
              if(m*n === result.length) break
              result.push(matrix[endRow][i])
          }
          endRow--
          console.log("3 for loop",result)
  
          for(let i=endRow;i>=startRow;i--){
              if(m*n === result.length) break
              result.push(matrix[i][startCol])
          }
          startCol++
          console.log("4 for loop",result)
      }
      return result
  };
  
  
  let  inputMatrix  = [ [1,    2,   3,  4,    5],
                        [6,    7,   8,  9,   10],
                        [11,  12,  13,  14,  15],
                        [16,  17,  18,  19,  20] ]
  
  spiralOrder(inputMatrix)