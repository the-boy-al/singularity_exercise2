function getStudentsWithNamesAndTopNotes (arr) {
    let newArr = arr.map(function (item) {
        let obj ={};
        let objVal = Object.entries(item);
        for (let i = 0; i < objVal.length ; i++) {
            obj[objVal[i][0]] = objVal[i][1];
           if (objVal[i][0] == "notes") {
                if (objVal[i][1].length == 0){
                    obj[objVal[i][0]] = 0;
                } else {
                    let j = 0;
                    //console.log(objVal[i][1].length)
                    for (let a = 0; a < objVal[i][1].length; a++){
                        if (objVal[i][1][a] > j){
                            j = objVal[i][1][a];
                        }
                    }
                    obj[objVal[i][0]] = j;
                }
            }
        }
        
        return obj;
    })
    return newArr;
}

console.log (getStudentsWithNamesAndTopNotes([
	{ "name": "John", "notes": [3, 5, 4] },
	{ "name": "Max", "notes": [1, 4, 6] },
	{ "name": "Zygmund", "notes": [] }
]));
/*➞ [
	{ "name": "John", "topNote": 5 },
	{ "name": "Max", "topNote": 6 },
	{ "name": "Zygmund", "topNote": 3 }
]*/