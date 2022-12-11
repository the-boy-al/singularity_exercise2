function split (str) {
    let strV = "";
    let strC = "";
    for (let i = 0; i < str.length; i ++){
        if (str[i] == 'a' || str[i] == 'u' || str[i] == 'o' || str[i] == 'i' || str[i] == 'e'){
            strV = strV + str[i];
        } else {
            strC = strC + str[i];
        }
    }
    str = strV + strC;
    return str;
}


console.log(split("abcde"));

console.log(split("Hello!"));

console.log(split("What's the time?"));