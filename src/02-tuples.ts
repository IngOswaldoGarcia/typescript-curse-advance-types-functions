const prices: (number | string)[] = [1 ,2 ,3 ,4 ,4, 'as'];
prices.push(1);
prices.push('hola');


let user: [string, number, boolean];

user = ['hola', 5, false];

const [username, age] = user;
console.log(username);
console.log(age);
