//xp exercises
//part1(i)
// function infoAboutMe(){
// 	console.log("i like dogs");
// }
// infoAboutMe()

//(ii) + 
// function infoAboutPerson(personName, personAge, personFavouriteColor, personHobbies){
		
// 	console.log(' My name is ' + personName + ' i am ' + personAge + ' years old ' + ' your favourite color is ' + personFavouriteColor + personHobbies.toString())
// 	for (let i = 0 ; i< personHobbies.length; i++){
// 		//console.log(personHobbies[i])
// 	}
// }
// let arr1 = ["volleyball", "tennis"]
// infoAboutPerson("kyle",20, " teal",arr1  );
// infoAboutPerson("Josh", 12, "yellow", ["videoGame","hanging out with friends","playing cards"])

//ex2:keyless car:

// let age = prompt("type in your age");
// age =Number(age);
// checkDriverAge(age)


// function checkDriverAge(age){
// 	if(age<18){
// 	alert("Sorry, you are too young to drive this car.Powering off");
// }

//  else if (age==18){
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");

// }

// else { 
// alert("Powering On. Enjoy the ride!");
// }
// }



//ex3: odd or even
// function checkNumbers(){
// 	for(var i=0 ; i<=100; i++){
	
	
// 	if(i%2 == 0){
// 		console.log(i + " number is even ")
// 	}
// 	else{
// 		console.log(i + " number is odd ")
// 	}
// }
// }
// checkNumbers()

//ex4
// let tips = prompt ("type in amount");
// tips = Number(tips);

// function billtips(){
// 	if(tips<50){
// 		return tips + (tips*0.2)
// 	} 
// 	else if (tips>=50 && tips<=200){
// 		return tips + (tips*0.15)
// 	}
// 	else if(tips>200){
// 		return tips+(tips*0.1)
// 	}
// 	else{
// 		return(tips)
// 	}

// }

// let res = billtips(tips);



// console.log(" final bill is " + res )

//ex5: find the numbers divisible by 23

// function isDivisible(){  //this does the pushing 
// 	let arr = [];
// 	for (var i=0; i<=500 ; i++){
// 		if(i%23 == 0){
// 			arr.push(i)

// 		}
// 	}
// 	 return calculateNum(arr)
// }
// function calculateNum(arr){ //this does the calculation
// 	console.log(arr);
// 	let number = 0
// 	for (var j=0 ; j<arr.length ; j++){
// 		number = number + arr[j]
// 	}
// 	return number
// }

// console.log (isDivisible());
// //console.log(calculateNum([1,2,3,4]))

//ex6: Amazon shopping

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// let item = prompt (" type your item")
// function checkBasket(basket, itemitem){
// 	for (i in basket){
// 		if(i == itemitem){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// let a = checkBasket(amazonBasket,item)
// if(a){
// 	console.log("exists")
// }
// else{
// 	console.log("not exists")
// }


//ex7: shopping List

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange" ,"apple"];

// function myBills(){
// 	let sum = 0
// 	for( let i = 0 ; i< shoppingList.length ; i++){
// 		let itemExist = checkBasket(shoppingList[i]) 
		
// 		if (itemExist){
// 			if(stock[shoppingList[i]]>0){
// 				stock[shoppingList[i]] = stock[shoppingList[i]]-1
// 			}
			
// 		 	sum+= 	prices[shoppingList[i]]
// 		}
// 	}
// 	console.log(stock)
// 	return sum
// }

// function checkBasket(item){ 

// 	for (i in stock){
// 		//console.log(i,item)
// 		if(i == item){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// console.log(myBills())

//ex8: what's in my wallet?

// function changeEnough(itemprice , change){
// 	if ((change[0]*0.25 + change[1]*0.10 + change[2]*0.05 + change[3]*0.01>=itemprice)){
// 		return true;
// 	}

// 	return false;
// }
// console.log(itemprice,change)


//ex9: vacations Costs

// let nights = prompt(" how many nights will you be staying?");
//  nights = Number(nights);
//  console.log(nights);
//  function hotelCost(){
//  	if (nights==0 || nights == undefined){
//  		prompt(" How many nights will you be staying?");
//  	}
//  	else{
//  		let sum = nights*140;
//  		console.log("$" + sum) ;
 			
//  	}

//  }
// hotelCost()
// let destination = prompt(" where is your destination?");
// console.log(destination);
// function planceRideCost(){
// 	if (destination == "London"){
// 		let sum = nights*183;
// 		console.log("$" + sum);
// 		return sum

// 	}
// 	else if(destination == "Paris"){
// 		let sum = nights*220;
// 		console.log("$" + sum);
// 		return sum
// 	}
// 	else if( destination == 0 || destination == undefined){
// 		prompt(" where is your destination?");
// 	}
// 	else{
// 		let sum = nights*300;
// 		console.log("$" + sum);
// 		return sum
// 	}
// }
// planceRideCost()


//  let carRent = prompt(" how long will you be here?");
//  carRent = Number(carRent);
//  console.log(carRent);
//  function rentalCarCost(){

//  	if(carRent>10){
//  		let sum = carRent*20
//  		console.log(sum);
//  	}
//  	else if(carRent>0 && carRent <= 10){
//  		let sum = carRent*40;
//  		console.log(sum);
//  		return sum
//  	}
//  	else{
//  		prompt(" how long will you be here?")
//  	}
//  }
// rentalCarCost()

// function totalVacationCost(hotelCost, planceRideCost , rentalCarCost){
 
// }
//-------------------------------------------------------------

//XP gold

//ex1 : is_blank

// let String isBlank = "  ";
// let String isBlank = "abc";
//  String isNullempty (isBlank){
//  	if(isBlank == 0){
//  		console.log("false");
//  	}
//  	else{
//  		console.log("true");
//  	}
//  }

//dailychallenge

// let str = 'Hello, World, in, a, frame';

// //get the largest length of a word in array
// function getLength(arr){
// 	let len = 0;
// 	for (let i = 0;i<arr.length;i++){
// 		if(arr[i].length>len){
// 			len = arr[i].length;
// 		}
// 	}
// 	return len;
// }

// //calculate the spaces after a word
// function calcspaces(word, len){
// 	return len - word.length;
// }


//  function wrapwords(param){
//  	//split words into array
//  	let words = param.split(", ");
//  	//get the largest word;
//  	let largest_len = getLength(words);
//  	//print the first line
//  	console.log('*'.repeat(largest_len+4));
//  	for(let i=0;i<words.length; i++){
//  		//get spaces after word
//  		let spaces = calcspaces(words[i], largest_len);
//  		console.log('*' + words[i] + ' '.repeat(spaces) + '*');
//  	}



//  	//print the first line
//  	console.log('*'.repeat(largest_len+4));
//  }

//  wrapwords(str);




