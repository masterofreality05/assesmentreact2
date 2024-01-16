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
  let itemIterator = 0
  let downward = 0
  let backwards = 0

for(let array of arrayOfArrays){
  for (let item of array){

    if(item  && itemIterator === array.length - 1){
      //when we reach the right we want to go down
      //we need to iterate through arrayOfArrays
      while(downward < arrayOfArrays.length ){
        console.log("while downward is before? " + downward)
        let lastItem = arrayOfArrays[downward][itemIterator]
        returningArray.push(lastItem)
        console.log("heres our last item " + lastItem)
        arrayOfArrays[downward][itemIterator] = false
        console.log("downward icrementer is" + downward)
        console.log("incrementing down and setting false " + lastItem)
        downward++
      }
 
   if (downward === arrayOfArrays.length ){
     //we decrement downwards once, similar to arrayOfArrays.length -1 
     downward--

     let i = itemIterator
     while(itemIterator >= 0 ){

     let backwardsItem = arrayOfArrays[downward ][itemIterator]
     if (backwardsItem){
   
     returningArray.push(backwardsItem)
     arrayOfArrays[downward][itemIterator] = false
     }
     itemIterator--
     }
   
     itemIterator++
   }
   
   if(downward === arrayOfArrays.length -1  && itemIterator === 0){
     console.log("going back up")
     let upwardItem = arrayOfArrays[downward - 1][itemIterator]
     console.log(upwardItem)
     while(downward >= 0 && upwardItem ){

         downward--
       console.log("should be going back up now " + upwardItem)
       returningArray.push(upwardItem)
        arrayOfArrays[downward][itemIterator] = false
      
     } 
  
   }
   
    }
    else if(item){
      console.log("ITEM: " + item)
      arrayOfArrays[downward][itemIterator] = false
      itemIterator++
    returningArray.push(item)

  
    }
  //here is now we set our directional(conditional) logic. 


}
return returningArray
}
}


console.log(unroll([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))