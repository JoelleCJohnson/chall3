function returnLargestInArray(array){
    let largestVal = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > largestVal){
            largestVal = array[i]
        }
    }

    return largestVal;
}
let array = [75, 93, 63, 98, 101, 2000]
console.log(returnLargestInArray(array))