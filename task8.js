function accumulatingArray(arr){
    let newArr = []
    if (arr.length == 0) {
        return [];
    } else {
        let a = 0, sum = 0;
        for (let i =0; i < arr.length; i++){
            a = arr[i];
            sum = sum + a;
            newArr.push(sum);
        }
        return newArr
    }
}




console.log(accumulatingArray([1, 2, 3, 4])) //➞ [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
console.log(accumulatingArray([1, 5, 7])) //➞ [1, 6, 13]
console.log(accumulatingArray([1, 0, 1, 0, 1])) //➞ [1, 1, 2, 2, 3]
console.log(accumulatingArray([])) //➞ []

