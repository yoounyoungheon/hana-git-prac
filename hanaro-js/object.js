const arrays = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70],]

function makeObjectFromArray(arrays){
    const obj = {};
    for(const array of arrays){
        const key = array[0]
        obj[`${key}`] = array.slice(1,);
    }
    return obj;
}

const obj = makeObjectFromArray(arrays);
console.log(obj);


const kim = {id:3, name:'Kim', addr:'Seoul'}
function copyObject(obj){
    const newObj = {};
    for(const i in obj){ newObj[`${i}`] = obj[`${i}`] }
    return newObj;
}

const newKim = copyObject(kim)
newKim.addr = 'Deagu'
console.log(kim)
console.log(newKim)