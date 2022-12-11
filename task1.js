function multiply(arr) {
    function multiplyInt(num) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * num;
        }
    return arr;
    }
    return multiplyInt;
}

console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));