console.log('Vive la DTA !');

let msg = 'Vive le JS !';

console.log(msg);

let arrayMessages = ['Vive', 'le', 'dev', 'web', '!'];

for (let iterMsg of arrayMessages) {

    console.log(iterMsg);
}

/*
function User(name, age) {
    
    this.name = name;
    
    this.age = age;
    
    this.sayHi = function() {
        
        return (this.name + " a " + this.age + "ans.");
    };
}
*/

class User {

    constructor(name, age) {
        
        this.name = name;

        this.age = age;
    }

    sayHi() {

        return (this.name + " a " + this.age + "ans.");
    }
}

let user1 = new User("John", 25);

let user2 = new User("Kate", 32);

let user3 = new User("Younes", 19);

let user4 = new User("Nathan", 21);

let usersArray = [];

usersArray.push(user1);

usersArray.push(user2);

usersArray.push(user3);

usersArray.push(user4);

for (let user of usersArray) {
    
    console.log(user.sayHi());
}