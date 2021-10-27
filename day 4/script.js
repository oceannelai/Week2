//function declaration

 
//  function shoeMessage(){
 	
//  	console.log('Hello everyone!' );
//  }

// shoeMessage(name) // can be used multiple times
// shoeMessage()

//local vs global
// let name = 'john' // outside variabe, need to be declared
// function shoeMessage(){
// 	let name = ' Darren '; //the name here can be used and it is iside the function.. it has not be declared "locally"
// let message = "hello"
// 	console.log('Hello' + name)
// }
//  shoeMessage(name);
//  shoeMessage(); // need to write to be declare the outside variable


//parameters

// function shoeMessage(from, msg){
// 	//console.log(from + "" + to); // will get undefined undefined as they werent assigned to nothing
// 	console.log(from + ":" + msg)
// }

// console.log('ann', 'hello');
// console.log('john', 'bye');
// console.log('1','2');

//function shoeMessage(from="nobody",msg = "hello"){ //default value is "hello"
// function shoeMessage(from ,msg){
// 	if(msg === undefined){
// 	msg = "hello"; //msg = msg|| 'hello'; (the same thing but in one line)
// 	console.log(from + ":" + msg);
// }
// }
// shoeMessage('Ann') 



//return
// function sum(a,b){
// 	let sum = a + b; //nothing will appear as we didnt call a function
// 	let arr = [{a:1},{b:2}]; //arrays
// 	return sum; 
// }
// let res = sum(1,2);
// console.log(res);



//example:
// let age = 18;
// function checkAge(theage){
// 	if(theage>=18){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }
// let result = checkAge(age);
// console.log(result);

// if (result == true){ // THE CONDITION can be written as result only or can put the function inside of if()
// 	console.log("OK") //eg if(checkAge(age))
// }
// else{console.log("NOT OK");}


// naming of a function
// let age = 22
// function getFullName(name ,last){
// 	return name + " " + lasts;


// }



// let age  22;
// function a(name,last){
// 	for(var i = 0 ; i<50000;i++)
// 		if(i === 2){
// 			return 2;
// 		}
		
// 		return
// 	}

//function inside another function
function yesMessage(){
	return:'yes';
}
function noMessage(){
	return:'no';
}
//option1	
// function check(num){
// 	if(num>10){
// 		//alert(yesMessage())
// 		let res = yesMessage(); 
// 		console.log(res)
// 	}
// 	else{
// 		let res = noMessage;
// 		console.log(res);
// 	}


//option2:
// function check(num,yes,no){
// 	if(num>10){
// 		//alert(yesMessage())
// 		//let res = yesMessage();
// 		console.log(yes())
// 	}
// 	else{
// 		//let res = noMessage;
// 		console.log(no());
// 	}
// 	check(20,yesMessage.noMessage);

//ways of declaring a function:
//way1:
//console.log(getName());
// function getName(){  //this type of function can be written before or after the console.log
// 	return:'john';
// }
//way2
// let  getName = function(param,param2){
// return 'john';
// }
// //way3
// //arrow function
//  let getName = (age,mum) =>{ 

//  }
//example of WAY1:
// function ask(question){
// 	if (question.length>3) {
// 		return 'good';
// 	}
// 	else{
// 		return 'not good'
// 	}
// }

// //WAY2:
// let ask = function(question){
// 	if(question.length>3){
// 		return 'good';
// 	}
// 	else{
// 		return 'not good'
	
// 	}
// }
// ask('are you ok?')

// //way3

// let ask = (question) =>{
// 	if(question.length>3){
// 		return 'good';
// 	}
// 	else{
// 		return 'not good'
// }
// }


// var x = 6;
// //console.log(this.x);

// let obj = {
// 	a:function(){
// 		var x =10;  //function inside an obj is called  "the method of an obj"
// 		console.log(this.x);
// 		}
// 	}
// console.log(obj.a);



