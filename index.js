function returnLargestInArray(array){
    let largestVal = array[0]
    for(let i = 1; i < array.length; i++){
            if(array[i] > largestVal){
                largestVal = array[i]
            }
    }

    return largestVal;
}
let array = [745, 643, 96, 123, 765, 298]
console.log(returnLargestInArray(array))