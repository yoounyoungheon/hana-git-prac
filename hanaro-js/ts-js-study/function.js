const obj = {
    name: 'Objname',
    bark1(){
        console.log('1', this.name);
        const self = this;
        setTimeout(function(){
            console.log('11=', this); // setTimeout()안 this는 전역 객체를 가리킴 - "window 객체"
        }, 1000);
        console.log('xxxx');
    },
    bark2(){
        console.log('2=', this.name);
        setTimeout(() => {
            console.log('22=', this.name)
        }, 1000);
    }
};

const Dog = function(name){
    console.log(this, new.target, this instanceof Dog);
    this.name = name;
    this.bark = function(){
        console.log('bark=',new.target, this.name, name);
    }
    this.bark2 = () => console.log('bark2=',new.target, this.name, name)
}

const Cat = (name) => {
    console.log(this, new.target);
    this.name = name;
    this.bark = function(){
        console.log('bark=',new.target, this.name, name); // this == Cat
    }
    this.bark2 = () => console.log('bark2=',new.target, this.name, name) // new == undefined, this == Cat

    return this;
}

const expressFn = function(name){
    this.name = name;
    console.log(this, new.target, this.name, name);
}


globalThis.name = 'Global Name';

const obj2 = {
    name: 'Obj Name',
    printName(){console.log(this.name);} // global this
};

const printName = obj2.printName;
printName();

