function filterUnique(arr){
    let result = [];
    for (let i = 0; i < arr.length ; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length ; j++) {
            let char = str[i];
            
        }
    }
}


console.log (filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) );
//➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

console.log (filterUnique(["88", "999", "989", "9988", "9898"]) );
//➞ []

console.log (filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) );
//➞ ["ABCDE", "BED", "BAC"]