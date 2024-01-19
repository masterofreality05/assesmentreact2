/*our function takes in a square array

e.g 

 we basically go in 4 directions 
 ----> then down v
                 v
                 v
                 v
        < ----

const square = [
[01,02,03,04],
[05,06,07,08],
[09,10,11,12],
[13,14,15,16]
 ]

normally we would use 

let returningArray
for(array in square){
    for(item in array){
        returningArray.push(item)
    }
}
a good point to look at is the similarities
both the arrays, and nested items both have index. 
Possibly through conditional indexing we can achieve this. 

e.g if i = array.length{
    returned.push(square[+ 1] i
        pop(square[array +1][i]
            ))
}
   if square[square == square.len](
    push returned.push(square[- 1] i
   )
        pop(square[- 1] i)

   if = 0 && ! first array, then array[i - 1]

   if && is the first array, then item + 1 

*/

function unroll(arrayOfArrays){
  let returningArray = []
  if(arrayOfArrays.length === 0) {
    console.log("reached zero")
    console.log(returningArray)
    return returningArray}
  //top
  //we add the first array (top) and remove from our arrayOfArrays using shift
  returningArray.push(...arrayOfArrays.shift())
  //rightside
  arrayOfArrays.map(a => returningArray.push(a.pop()))
  
  //bottom
  //remove the last array(bottom) while adding to our return array
  returningArray.push(...arrayOfArrays.pop())
  //leftside 
  
  arrayOfArrays.reverse().map(a => returningArray.push(a.shift()))
  unroll(arrayOfArrays)
}

 


console.log(unroll([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))