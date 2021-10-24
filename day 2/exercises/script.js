
//exercise1 - Simple if/ Else Statemnt
let x = 8;
let y = 6;
 
 if (x>y){
 	console.log("x is the biggest number");
 }
else if (x<y){
	console.log("y is the biggest number");
}
else if (x==y){console.log("x is equal to y");
}

else {
	console.log("Error");
}

//exercise2 -  chihuahua
let a = newDog.length;
console.log(a)

console.log( newDog.toUpperCase());
console.log(newDog.toLowerCase());

if(newDog=='Chihuahua'){
	console.log("i love Chihuahuas,it's my favourite dog")

}

else {console.log('I dont care, I prefer cats');
}


//ex3 - even or odd

let number = prompt ("write any number");

if( number%2==0){
	console.log ("x is an even number");
}

else if (!( number%2==0)){
	console.log ("x is an odd number");
}
else {
	console.log("error");
}


//ex4 Group chat

/*let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

let numuser = users.length;
console.log(numuser)

if (numuser == 0){
	console.log('no one is online');
}


else if (numuser == 1){
	console.log(users[0] + " is online ");
}


else if (numuser == 2){
	console.log(users[0] + "  and  " + users[1] + " are online ")
}

else if (numuser > 2){
	console.log(users[0] + "  and  " + users[1] + " and " + (numuser-2) + " more is online ")
}*/





gold exercise:

ex1- translator

// let language = prompt("which language do you speak?");
// console.log(language);

// console.log(language.toLowerCase());
//  if (language == "french"){
//  	console.log("Bonjour");
//  }
//  else if (language == "english"){
//  	console.log("Hello");
//  }

//  else if (language == "hebrew"){
//  	console.log("Shalom");
//  }

// else {
// 	console.log('01110011 01101111 01110010 01110010 01111001');
// }

//switch method
let language = prompt("which language do you speak?");
console.log(language.toLowerCase());
switch(language.toLowerCase()) {
case 'french':
alert( 'bonjour' );
break;
case 'english':
alert( 'hello' );
break;
case 'hebrew':
alert( 'shalom' );
break;
default:
alert('01110011 01101111 01110010 01110010 01111001')

}


//ex2- grade assigner

let grade = prompt ("type your grade");
console.log(Number(grade));
grade = Number(grade);

if(grade>90){
	console.log("A");
}


else if (grade >= 80 && grade<=90){
	console.log("B");
}

else if (grade >= 70 && grade<=80){
	console.log("C");
}

else if (grade< 70) {
	console.log("D");
}

else{
	console.log("fail");
}

//ex3 -verbing

 let str = prompt('please enter a verb');

// if (verb.length>=3 && verb.endsWith('ing')){
// 	verb = verb + 'ing';
// }

// else if (verb.length>=3 && verb.endsWith('ing')){
//  	verb + verb +'ly';
// }

// console.log(verb);

 if (str.length >=3){
 	if(!str.endsWith('ing')){
 		str =  str + 'ing';
 	}
 	else if (str.endsWith("ing")){
 		str = str + 'ly'
 	}
 }
console.log(str)

dailychallenge

let sentence = "the movie is not that bad, i like it";

let wordNot =  sentence.indexOf("not");
console.log(wordNot);

let wordBad =  sentence.indexOf("bad");
console.log(wordBad);


let arr = sentence.split(""); //separate the phrase ,depending of what is inside the ""
console.log(arr);
if(wordNot<wordBad && wordNot != -1 && wordBad != -1) {
arr.splice(wordNot,wordBad-wordNot+3, "good");

console.log (arr);
sentence= arr.join("");

}
console.log(sentence)











