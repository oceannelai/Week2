let me = ["my","favourite","color","is","blue"];
let m = me.join("");
console.log(m);



let flower1 = "rose";
let flower2 = "sunflower";
let petal = flower1.slice(0,2)
//let petal2 = flower1.slice(2,4)
console.log(petal);
//console.log(petal2)
let petal3 = flower2.slice(0,2);
//let petal4 = flower2.slice (2,3)
console.log(petal3);
//console.log (petal4)
let petal5 = flower1.replace (petal,petal3);
let petal6 = flower2.replace (petal3,petal);
console.log(petal5);
console.log(petal6);

let flow =petal5.concat('',petal6);
console.log(flow);


//prompt

let num1 = prompt ("please enter a number from 1 to 10");
console.log(num1);
let num2 = prompt ("please enter a number from 10 to 20");
console.log(num2);
alert(Number(num1) / Number(num2));


