function isSpecialArray(arr){
    // let evenArr = [];
    // let oddArr = [];
    for (let i = 0; i< arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 !== 0){
            return false;
        }
        if (i % 2 !== 0 && arr[i] % 2 === 0){
            return false;
        }
    }
    return true;
}



console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) //➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) //➞ false
// Index 2 has an odd number 9.

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) //➞ false
