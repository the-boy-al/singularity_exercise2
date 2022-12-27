function specialReverse(str, char) {
    let newString = "";
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++) {
        if (arr[i][0] != char) {
            newString = newString + arr[i] + " ";
        } else {
            let revWord = arr[i].split("").reverse().join("");
            newString = newString + revWord + " ";
        }
    }
    return newString.trim();
}



console.log(specialReverse("word searches are super fun", "s"));
//➞ "word sehcraes are repus fun"

console.log(specialReverse("first man to walk on the moon", "m"));
//➞ "first nam to walk on the noom"

console.log(specialReverse("peter piper picked pickled peppers", "p"));
//➞ "retep repip dekcip delkcip sreppep"