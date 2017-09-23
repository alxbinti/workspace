var user1 = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M',
    height: '1.78',
    weight: '77',
}
var user2 = {
    firstName: 'Kevin',
    lastName: 'Doe',
    gender: 'M',
    height: '1.98',
    weight: '72',
}
var user3 = {
    firstName: 'Mary',
    lastName: 'Janne',
    gender: 'F',
    height: '1.68',
    weight: '90',
}
var user4 = {
    firstName: 'Alice',
    lastName: 'Cooper',
    gender: 'M',
    height: '1.58',
    weight: '55',
}

var users = [user1, user2, user3, user4]; 

console.log(users);
console.log(users[3].gender);

for (var i=0; i < users.length; i++) {
    var fullName = users[i].firstName + users[i].lastName;
    var userBmi = users[i].weight * (users[i].height * users[i].height);
    var rezultat;
    if (userBmi < 18.5) {
        rezultat = "underweight";
    } else if (18.5 <= userBmi && userBmi <= 25 ) {
        rezultat = "normal";
    } else if (25 <= userBmi && userBmi <= 30) {
        rezultat = "overweight";
    } else {
        rezultat = "obese";
    } 
    alert(fullName + '/' + users[i].gender + '/' + Math.floor(userBmi)+ '/' + rezultat)
    console.log(fullName + '/' + users[i].gender + '/' + Math.floor(userBmi)+ '/' + rezultat)
}