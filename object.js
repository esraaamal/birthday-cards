'use script';
// object 

let car1 = {
  carName:"toyta",
  model:1959,
  color:"black",
  speed: function (){

  },
}

let car2 = {
  carName:"bmw",
  model:2021,
  color:"dark-grey",
  speed: function  (){

  },
}
// console.log(car1);

// //reuseabality












// //functionality programming - oop es5

function cars (name,model,color){
  this.name1=name;
  this.model=model;
  this.color=color;
this.speed =function (){
};
 }

 cars.prototype.distance = function (name1){

  console.log(name1);
}

let car1= new cars ("toyota",1959,"black");
let car2= new cars('Bmw',1998,"pink")
// let car2=new cars ("bmw",2021,"dark-grey");

// car1.distance(car1.name);

//inhirts 

function motorCycle (name,model,color,wheels){
cars.call (this,name,model,color);
this.wheels=wheels;
}

let motor1=new motorCycle ("harly",2017,"black",2)
console.log(motor1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ES6

class Person{
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    getFullName(){
      return `${this.firstName} ${this.lastName}`
    }
    static isHuman(){
      return 'Is a Human'
    }
  }
  
  
  let person1 = new Person ("ali","obiedat",65);
  
  let personInfo=  person1.getFullName();
  
  console.log("ali",person1);
  console.log("ali",personInfo);
  
  class Customer extends Person{
    constructor(firstName, lastName, age, memberShip){
      super(firstName ,lastName, age)
      this.memberShip = memberShip;
    } 
  }
  
  let customer1 = new Customer ("hassan","aqilan",85,"member50");
  console.log(customer1);