// var nas = +prompt('insert age'); //for in - array;
// if (nas > 15 && nas <= 25) {
//     console.log('zaluu nas')
// }
// else if (nas <= 26 && nas <= 40) {
//     console.log('ider nas')
// }
// else if (nas <= 41 && nas <= 50) {
//     console.log('ahmad')
// }
// else {
//     console.log('undur')
// };
// var i = 0;
// do{
//     console.log('ho')
// }
// while(i<10);
// for (i = 0; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
//     }
// };
//1.
// var a = +prompt()
// var b = +prompt()
// var c = +prompt()
// var counter = 0
// if (a === 0) {
//     counter++
// } if (b === 0) {
//     counter++
// } if (c === 0) {
//     counter++
// }
// console.log(counter + "shirxeg 0 too")
// //2.
// for (i = 0; i < 100; i++) {
//     console.log('сайн байна уу')
// };
//3.
// for (i = 0; i < 100; i++) {

// }
//4.
// var number = +prompt('too oruul')
// var result = number ** number
// console.log(result);

//5.
// var numbers = prompt("");
// console.log(numbers.length);

//6.
// var num = prompt("")
// sum = 0;
// for (i = 0; i < num.length; i++) {
//     sum =
//         console.log(sum)
// };
//7.
// var num = prompt();
// var sum = 0;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//         sum++
//         console.log(sum + "tegsh")
//     }
// }
//8.
// var num = prompt('too oruul')
// var sum = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 3 === 0) {
//         sum += +num[i]
//         console.log(sum)
//     }
// };


//array methods//
//push--pop; unshift--shift; splice(2, 1-ustgax too); concat--similar to push, can be used on 2 array//

// var numbers = [2, 4, 5, 8, 9, 14, 15, 17, 21, 123];
// var odd = []
// var even = []
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         even.push(numbers[i])
//     }
//     else {
//         odd.push(numbers[i])
//         console.log(odd)
//     }
// };
// var mass = [23, 15, 16, "one", "three", "second"];
// var str = [];
// for (var i = 0; i < mass.length; i++) {
//     if (typeof (mass[i]) == 'string') {
//         str.push(mass[i])
//         console.log(str)
//     }
// };
// var array = [1, 5, 7, 3, 2];
// var target = 9;
// var result = []
// for (var i = 0; i < array.length; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === target) {
//             result.push(i, j)
//             console.log(result)
//         }
//     }
// }

////object..///
// var hun = {
//     ner: "vanc",
//     nas: 183,
//     hayg: {
//         hot: "UB",
//         duureg: "HUD"
//     }
// }
// hun.hobby = 'kino vzeh'
// for (pro in hun) {
//     // console.log(hun[pro])
// }
// var arr = [1, 2, 3, 4, 5]
// for (el of arr) {
//     console.log(el);
// }

var userA = {
    name: "Alex",
    age: 22,
    mergejil: "bagsh",
    mail: "userA@example.com"
}
var userB = {
    name: "Bold",
    age: 23,
    mergejil: "emch",
    mail: "userB@example.com"
}
var userC = {
    name: "Carl",
    age: 24,
    mergejil: "tsagdaa",
    mail: "userC@example.com"
}
var userD = {
    name: "Don",
    age: 26,
    mergejil: "designer",
    mail: "userD@example.com"
}
var userE = {
    name: "El",
    age: 27,
    mergejil: "engineer",
    mail: "userE@example.com"
}
var massive = []
massive.push(userA, userB, userC, userD, userE)
// console.log(massiv);
for (i = 0; i < massive.length; i++) {
    if (massive[i].age === 22);
    console.log(massive[i])
}

