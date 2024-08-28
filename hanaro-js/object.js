// const arrays = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70],]

// function makeObjectFromArray(arrays){
//     const obj = {};
//     for(const array of arrays){
//         const key = array[0]
//         obj[`${key}`] = array.slice(1,);
//     }
//     return obj;
// }

// const obj = makeObjectFromArray(arrays);

// const kim = {id:3, name:'Kim', addr:'Seoul'}
// function copyObject(obj){
//     const newObj = {};
//     for(const i in obj){ newObj[`${i}`] = obj[`${i}`] }
//     return newObj;
// }

// const newKim = copyObject(kim)
// newKim.addr = 'Deagu'

// const dog = {
//     name: 'Maxx',
//     showMyName(){
//         console.log(`My name is ${this.name}.`);
//     },
//     WhatsYourName(){
//         setTimeout(()=>dog.showMyName(), 1000);
//     }
// };

// function func() {
//     const x = 10;
//     return function() {
//       console.log("x값은 :", x)
//     }
//   };
// const myFunc = func();
// myFunc();

// class Func{
//     #x =10;
//     constructor(){};
//     fun () {
//         console.log("x값은 :", this.#x);
//     }
// };
// const myFunc2 = new Func();
// myFunc2.fun();

// const arr = [1,2,3,4,5];
// console.log(Array.prototype)
// console.log(arr.__proto__) // 모든 배열은 프로토타입을 상속받음

// const arr2 = Array.from(arr);// 깊은 복사
// console.log(arr2 === arr); // falss

// const arr3 = [...arr]; // 깊은 복사
// console.log(arr3 === arr); // falss

// const arr4 = arr; // 얕은 복사
// console.log(arr4 === arr); // true 

// const queue = [];
// queue.unshift(1);
// queue.unshift(2,3);
// queue.unshift(4)
// console.log(queue);
// queue.shift();
// console.log(queue);

// const arr = [1,2,3,4,5];
// console.log(arr.slice(1,3))
// console.log(arr.slice(2,))
// arr.splice(1,3);
// arr.splice(1,0,2,3,4);
// console.log(arr)
// arr.splice(2,)
// console.log(arr);
// arr.push(3,4,5)
// // arr.splice(2, 0, 'X', 'Y', 'Z');
// console.log(arr)
// const arr6 = [...arr.slice(0,2),'X','Y','Z',...arr.slice(2,)]
// console.log(arr6)

function push(arr, ...args){
    const newArr = [...arr, args].flat();
    return newArr;
};

function pop(arr, index=1){
    const newArr = arr.slice(0,-index)
    return newArr;
};

function shift(arr, ...args){
    const newArr = [...args, arr].flat()
    return newArr;
};

function unshift(arr, index=1){
    const newArr = arr.slice(index, )
    return newArr;
};