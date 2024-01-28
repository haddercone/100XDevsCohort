// let x : number = 1
// x = "Robin"
// console.log(x);


// function greet (firstname: string) {
//     return "Hello " + firstname;
// }

// greet("Robin")

// function sum(a: number, b: number) : number {
//     return a + b;
// }
// const result = sum(1,2)
// console.log(result);


// function a(fn : (a:number) => void) {
//     setTimeout(() => fn(3), 1000);
// }

// a((a:number) => {
//     console.log(a);
//     console.log("Hello");
// })
// interface User {
//     firstName : string;
//     lastName : string;
//     age : number;
// }

// function isLegal (user : User) : boolean {
//     if(user.age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isLegal({
//     firstName: "Robin",
//     lastName: "Singh",
//     age: 18,

// })


// interface Person {
//     name : string;
//     age: number;
//     greet(phrase: string) : void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n : string, age: number) {
//         this.name = n;
//         this.age = age;
//     }

//     greet(phrase: string) {
//         console.log(phrase);
//     }
// }
interface A {
    a : string;
}
interface B {
    b:number;
}

type X =  A | B

const user : X = {
    a: '',
    b : 3,
}

function a() : string {
    return ""
}