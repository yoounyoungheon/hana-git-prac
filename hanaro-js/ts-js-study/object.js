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

// function push(arr, ...args){
//     const newArr = [...arr, args].flat();
//     return newArr;
// };

// function pop(arr, index=1){
//     const newArr = arr.slice(0,-index)
//     return newArr;
// };

// function shift(arr, ...args){
//     const newArr = [...args, arr].flat()
//     return newArr;
// };

// function unshift(arr, index=1){
//     const newArr = arr.slice(index, )
//     return newArr;
// };
// const Hong = {id:1, name:'h'};
// const Kim = {id:2, name:'k'};
// const Lee = {id:3, name:'l'};
// const array = [Hong, Kim, Lee];

// function deleteArray(array, start=0, end = array.length) {
//     let newArr;
//     if(typeof start == 'number')
//         {
//             newArr = [...array.slice(0, start), ...array.slice(end, array.length)];
//         }
//     else if(start == 'id'){
//                 // mid = array.map((obj)=> obj.id==end)[0]
//                 mid = array.filter((obj)=>{return obj.id==end})[0]
//                 index = array.indexOf(mid);
//                 newArr = [...array.slice(0, index), ...array.slice(end, array.length)];
//     }
//     else if(start == 'name'){
//                 mid = array.filter((obj) => {return obj.name==end})[0]
//                 index = array.indexOf(mid)
//                 newArr = [...array.slice(0, index), ...array.slice(end, array.length)];
//     }
        
//     return newArr
// }

// const newArr = deleteArray(arr, 'id', 2);

// function addUser(arr, user){
//     const newArr = arr.filter((obj)=>{return obj != user});
//     return newArr;
// }

// const newArr = addUser(array, Hong);
// console.log(newArr)

// const arr = [1,2,3,true];
// const ret = arr.map((obj)=>{return obj.toString()})
// console.log(ret)

// function range(s, e, step = s < e ? 1 : -1) {
//     const result = [];

//     if (s === e) return [s];
//     if ((s < e && step <= 0) || (s > e && step >= 0)) return [];

//     for (let i = s; (step > 0) ? i <= e : i >= e; i += step) {
//         result.push(i);
//     }

//     return result;
// }

// function keyPair(arr, N) {
//     const map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         const complement = N - arr[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(arr[i], i);
//     }

//     return [];
// }

// function keyPair(array, target) {
//     var left = 0;
//     var right = array.length - 1;
//     const sortedArray = array.toSorted((a, b) => a - b);
//     while (left <= right) {
//         var sum = sortedArray[left] + sortedArray[right];
//         if (sum == target) {
//             return [
//                 array.indexOf(sortedArray[left]),
//                 array.indexOf(sortedArray[right]),
//             ];
//         } else if (sum > target) {
//             right -= 1;
//         } else if (sum < target) {
//             left += 1;
//         }
//     }
//     return [];
// }

// Object
// class Animal{
//     static id = 1;
//     constructor(){}
// };

// const dog = new Animal();

// console.log(Animal.prototype === dog.__proto__)
// console.log(dog.__proto__)
// console.log(Object.prototype)
// console.log(Object.getPrototypeOf(Animal))

// class Emp{
//     set fullname(name){[this.firstName, this.lastName] = name.split(' ')}
//     get fullname(){return `${this.firstName}${this.lastName}`}

// }
// const hong = new Emp();

// const proxtObj = new Proxy(hong, {
//     get(target, prop, receiver){
//         console.log('proxy get>>', target, prop);
//         if(prop === 'fullName'){
//             return `${target.first}${target.lastName}`
//         }else{
//             return target[prop];
//         }
//     },

//     set(target, prop, value, receiver){
//         console.log('proxy set>>', target, prop, value);
//         if(prop === 'fullName'){
//             const [f,l] = value.split(' ');
//             target.firstName = f;
//             target.lastName = l;
//         }else{target[prop]=value}
//         return target;
//     }
// })
// proxtObj.fullname = 'Kildong Hong';
// console.log(proxtObj.fullname);

// console.log('----------------------------------------------------')

// const yoon = {id:1, name: 'yoon'};
// const kim = {id:2, name:'kim'};
// const lee = {id:3, name:'lee'};
// const users = [kim, lee];

// Array.prototype.mapBy = function (prop) {
//     return this.map(obj => obj[prop]);
//   };

// Array.prototype.filterBy = function(prop, value){
//     return this.filter(obj => obj[prop] == value)
// }

// const idLst = users.mapBy('id');
// const filterLst = users.filterBy('id', 2)
// console.log(filterLst);

// console.log('----------------------------------------------------')
// class Collection{
//     clear(){};
//     remove(){};
//     isEmpty(){};
//     poll(){};
// }
// class Stack extends Collection{
//     constructor(){
//         super();
//         this.arr = []; this.index = 0;
//     }
//     push(item){this.arr[this.index++] = item};
//     pop(){
//         if(this.index<=0) return null;
//         const result = this.arr[--this.index];
//         return result;
//     };
//     clear(){this.arr = [];};
//     remove(){this.arr.length = this.arr.length-1};
//     isEmpty(){if(this.arr.length==0){return true}};
//     poll(){
//         if(this.index<=0) return null;
//         const result = this.arr[--this.index];
//         return result;
//     };
//     length(){ return this.arr.length;}
// }

// class Queue extends Collection{
//     constructor(){super(); this.arr=[]; this.index = 0;}
//     enqueue(item){this.arr[this.index++] = item};
//     dequeue(){
//         if(this.index<-0) return null;
//         const result = this.arr[0];
//         return result;
//     };
//     clear(){this.arr = [];};
//     remove(){this.arr.shift();};
//     poll(){
//         if(this.index<-0) return null;
//         const result = this.arr[0];
//         return result;
//     };
//     length(){ return this.arr.length;}
// }

// const stack = new Stack();
// const queue = new Queue();

// console.log(stack)

// 1. 클래스 vs 프로토타입 (상속)
// 2. 현재는 어떤것이 많이 쓰일지도 생각해보자
// 3. OOP와 FP를 혼합한 예시를 생각해보자
// 4. 예시를 직접 코드로 작성해보자

// class Person{
//     #name;
//     #words = [];
//     constructor(){}

//     setName(name){this.#name = name};
//     setWords(words){this.#words.push(words)};

//     greet(){
//         return `${this.#name}이야 ~!`;
//     };

//     getGreetWords(){
//         return this.#words;
//     }

//     convertArraytoString(arr){
//         const str = arr.join(' ');
//         return str;
//     }

//     speak(){
//         const wordsLst = this.getGreetWords().flat()
//         const words = this.convertArraytoString(wordsLst);
//         const introduceWord = this.greet();
//         console.log(words, introduceWord);
//     }
// }

// const yh = new Person();
// yh.setName('영헌')
// yh.setWords(['너무 너무','반가워','안녕!','나는'])
// yh.speak();

// class Student extends Person{
//     constructor(){super()}
//     study(){console.log('학생은 공부한다.')}
// }
// const playMixin = {
//     play(){console.log("그렇지만 놀기도 해야한다.")}
// }
// Object.assign(Student.prototype, playMixin);

// const studyYh = new Student();
// studyYh.setName('공부하는 영헌')
// studyYh.setWords(['안녕~!','너무 너무 반기워','~','나는'])
// studyYh.study();
// studyYh.play();