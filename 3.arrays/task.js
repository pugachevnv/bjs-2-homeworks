function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; 
    }    
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
//   // let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, value, _, filteredArray.length) => acc + value, 0);
//   const filteredUsers = users.filter(user => user.gender === gender);
//   console.log(filteredUsers);

//   const ages = filteredUsers.map(user => user.age);
//   console.log(ages);

//   const sumOfAges = ages.reduce((acc, value) => acc + value, 0);
//   console.log(sumOfAges);

//   const averageAge = sumOfAges / (filteredUsers.length || 1);
//   return users.length > 0 ? averageAge : 0;
return users.length > 0 ? users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, value, _, filteredUsers) => acc + value / (filteredUsers.length  || 1), 0) : 0;

}