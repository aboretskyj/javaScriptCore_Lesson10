var Students = [];

Students.push({
    name: "Han",
    sex: "male",
    age:13
});

Students.push({
    name: "Luke",
    sex: "male",
    age:16
});

Students.push({
    name: "Leia",
    sex: "female",
    age:15
});

Students.push({
    name: "Dart",
    sex: "male",
    age:48
});

Students.push({
    name: "R2-D2",
    sex: "male",
    age:13
});


Filtered = Students.filter(filterByAgeAndSex);
Filtered.map(FindUnderage);
Filtered.sort(sortByAll);
showArray(Filtered);




// functions

function sortByAll(obj1, obj2){
    var obj1Name = obj1.name.toLowerCase();
    var obj2Name = obj2.name.toLowerCase();

    if (obj1.age > obj2.age){
        return 1;
    } else if (obj1.age < obj2.age) {
        return -1;
    } else {
        if(obj1Name > obj2Name){
            return 1;
        } else if (obj1Name < obj2Name) {
            return -1;
        }
        return 0;
    } 
}

function filterByAgeAndSex(obj){
    return obj.age < 21 && obj.sex == "male";
}

function FindUnderage(obj){
    obj.yearsUnderAge = 21 - (obj.age);
}


//Displayers

function show(data) {
    console.log(data);
}

function showArray(array){
    array.forEach(show);
}
