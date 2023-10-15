function returnLargestInArray(array){
    let largestVal = array[0]
    for(let i = 0; i < array.length; i++){
        for (let j = 1; j < array.length; j++)
        {
            if(array[j] > array[i]){
                largestVal = array[j]
            }
        }
    }

    return largestVal;
}
let array = [745, 643, 96, 123, 765, 298]
console.log(returnLargestInArray(array))