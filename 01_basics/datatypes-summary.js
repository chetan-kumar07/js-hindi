/*
Primitive 
7 types --> String, Number, boolean, null, undefined, Symbol, BigInt
*/
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id===anotherId);

//const bigNumber=45678765267262723456654;
//console.log(bigNumber);

/* 
Reference(Non- Primitive)
Array,Objects, Functions
*/

const names=["chetan","junaid","jatin","rishabh"];
let myObj={
    name:"ram",
    age:22,
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);
console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

       */