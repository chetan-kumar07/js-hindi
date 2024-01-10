const name="chetan"
const repoCount =50
console.log(name+repoCount+" value")  // -> Not-effective

//String Interpolation
console.log(`Hello my name is ${name} and my RepoCount is ${repoCount}`);
const gameName=new String('my-String')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  
console.log(gameName.indexOf('i'));  

const newString=gameName.substring(0,6)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne="    Chetan    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https://chetan-kumar.com/chetan%2389-hc"
console.log(url.replace('%2389','my'))
console.log(url.includes('chetan'))