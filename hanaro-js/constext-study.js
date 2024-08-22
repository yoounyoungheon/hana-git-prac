/*
hoisting
var gg; var bb; let xx;
*/
var gg =1; let bb=2;

function f1(x,y){
    var gg=11; let bb=22;
    console.log('f1>', gg, bb, zz ,f2, f2.length);
    f2('first');
    {
        const xx=99;
        f2('nest-first');
        var zz=88;
        function f2(t){console.log(t, 'nested', xx, zz)} // lll 에러
        let lll=0; // f2메서드가 올라간 후 lll 선언 -> not initialize
    }
    function f2(t,u){console.log(t,'inner', xx, zz)}
    function f2(t,u,v){console.log(t,'inner2', xx, zz)}
    var zz=800;
    f2('second'); // block scope안 f2() 실행 -> nested
}

function f2(g){ console.log(g, 'global f2', gg, bb, xx, kk) }

let xx = 9;
if(gg>0){var kk =33; const yy=9;} // gg: 1

f1(1,2)
console.log(kk) // yy error, -> const로 선언되어서 블록 밖을 벗어나지 못함
f2('third')