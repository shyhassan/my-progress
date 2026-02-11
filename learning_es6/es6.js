import {users}from "./data.js";

const name = users. map(({name}) => name);

const adults = users.filter(({age}) => age > 21);

const totalAge = users.reduce((sum{age}) => sum + age, 0);

//add new user
const newUser ={id: 4, name: "Areth", age: 7};
const updateUsers = [...users, newUser];

const message = `We have ${updatedUsers.length} users in total. `;


console.log("Names",names);
console.log("Adults:", adults);
console.log("Total Age:", totalAge);
console.log("Updated Users:", updatedUsers);
console.log(message);



const output = document.getElementById("output");

output.innerHTML= `
Names: ${names.join(", "),} <br>
Adults: ${adults.length} people <br>
Total Age: ${totalAge}
`;