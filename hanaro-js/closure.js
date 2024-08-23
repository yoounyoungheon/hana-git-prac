// curring 예제
// function curry(fn){
//     return function curried(...args){
//         if(args.length >= fn.length){
//             return fn.apply(this, args);
//         } else {
//             return function(...nextArgs){
//                 return curried.apply(this, args.concat(nextArgs));
//             };
//         }
//     };
// }

// function multiply(a,b,c){return a*b*c};

// const curriedMultifly = curry(multiply);

// console.log(curriedMultifly(2)(3)(4));
// console.log(curriedMultifly(2, 3)(4));
// console.log(curriedMultifly(2)(3, 4));

// function makeArr(n, arr=[]){
//     if(n === 0){return arr;}
//     return makeArr(n-1, [n, ...arr])
// }
// console.log(makeArr(10))

let save = {}; // 이전에 계산된 팩토리얼 값을 저장하는 객체

const factorial = (number) => {
  if (number > 0) {
    // 이미 저장된 값이 있으면 사용하고, 없으면 재귀적으로 팩토리얼 계산
    const saved = save[number - 1] || factorial(number - 1);
    // 현재 수(number)와 이전 팩토리얼 값(saved)을 곱하여 결과 계산
    const result = number * saved;
    // 계산된 결과를 저장
    save[number] = result;
    // 저장된 값과 결과를 출력 (확인용)
    console.log(saved, result);
    return result;
  } else {
    return 1;
  }
};

//첫번째 호출
console.time('memoization_test_1');
factorial(7);
console.timeEnd('memoization_test_1');
//두번째 호출
console.time('memoization_test_2');
factorial(7);
console.timeEnd('memoization_test_2');