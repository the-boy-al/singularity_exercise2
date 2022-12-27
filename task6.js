
function filter(arr, fn) {
    let newArr = [];
        for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "object") {
            let arr2 = Object.entries (arr[i]);
            if (fn(arr2[0][1])) {
                newArr.push(arr2[0][1]);
            } 
        } else {
            if (fn(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        }

    return newArr;
}


console.log(filter([1, 2, 3, 4], (v) => v > 2)) //➞ [3, 4]
console.log(filter(["pie", "pony", "browny", "coffee"], (v) => v.includes("ny"))) //➞ ["pony", "browny"]
console.log(filter([{age: 20}, {age: 30}, {age: 40}, {age: 50}], (v) => v === 20)) //➞ [20]