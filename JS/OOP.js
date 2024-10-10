/*
let a = {
    name :"SAQIB"
}
console.log(a);

//  USING PROTOTYPE

let animal = {
    eat : true
}


let rabbit = {
    jumps:true
}

console.log(rabbit.jumps);

//  NOW MAKE PROTOTYPE OF AN OBJECT

rabbit.__proto__ = animal

console.log(rabbit.eat);



//  NOW USING CLASSES

class Animal {
    constructor() {
        console.log('Constructor Called');
        
    }

    jumps(){
        console.log('RABIT JUM KRTA HA');
        
    }
    
    eat(){
        console.log('ANIMAL KHATA HA');
        
    }
}

let myObj = new Animal()
myObj.eat()
myObj.jumps()

*/

//  CLASS USING PARAMETERIZED CONSTRUCTOR

class Animal {
    constructor(name) {
        this.name = name
    }

    jumps() {
        console.log(`${this.name} RABIT JUM KRTA HA`);

    }

    eat() {
        console.log(`${this.name} ANIMAL KHATA HA`);

    }
}

let myObj = new Animal("SAQIB")
myObj.eat()
myObj.jumps()


//  INHERITANCE

//  IF U WANT TO CREATE CONST OF CHILD CLASS THEN U HAVE TO USE SUPER()

class Lion extends Animal {

    constructor(name) {
        super(name)
        console.log(`${name} kasa ha?`);

    }

    eat() {
        super.eat()
        console.log(`${this.name} KHATA HA OR ROAR KRTA HA`);

    }
}

let newObj = new Lion("SHARA")
console.log(newObj);
console.log(newObj.eat());



