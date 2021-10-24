//object

//let obj ={}
//let obj1 =  new object();

//let arr = ["a","b","c"]
//console.log(arr[0]); //result will be "a"

/*let obj = {
	user:"calypso",
	email: "oceannelai@gmail.com",
	num: [1,2,3,4,5],
	obj1:{
		a:"aaa",
		b:"bbb",
		arr1:["eee","ttt","ooo"]
	}

}*/
//console.log(obj.obj1.b);
//console.log(obj.num[2]); //the result will be 3
//console.log(obj.user);
//console.log(obj["user"]); //same thing as console.log(obj.user)
//console.log(obj.email);


/*let obj = {
	user:"calypso",
	email: "oceannelai@gmail.com",
	obj1:{
		a:"0000"
	}
}
let obj1 = {...obj}; // to copy
//let obj1.user = "john"; //to delete ue delete obj1.user
console.log(obj);
console.log(obj2);


let obj = {
	user:"calypso",
	email: "oceannelai@gmail.com",
}

obj.address = "Mauritius"
console.log(obj)//obj will be added*/

//cloning

/*let obj = {
	user: "john" ,
	username:{
		name:"Jojo"
	}
}
//let obj1 = {...obj};
let str = JSON.stringify(obj);
console.log(str);
let obj1 = JSON.parse(str);
//console.log(obj1);

obj1.user = "bala";
obj1.username.name = "Bobo";
//console.log (obj);
//console.log(obj1);*/

//-----------------------------------------------------



//loop
// let arr = ["aaa", "bbb", "ccc", "ddd"];
// console.log(arr[0]);
// for(let i=0; i<arr.length; i++){
// 	console.log(arr[i]);
// }


// let len = arr.length;
// //if(arr.length>0){
// 	for (var i = 0; i <len; i++){
// 		console.log(arr[i]);}
	
// let obj = {
// 	user : 'aaa',
// 	pass : '12345'
// }
// for (x in obj){
// 	console.log(x);//shows user and pass //cant put . as it will show undefined
// 	console.log(obj[x]); //shows aaa and 12345
// 	console.log (x,obj[x]) //all info in obj
// }

// for (x of obj)// do not use of with an object..only in
// 	console.log(x)
 
// let arr = ["aaa", "bbb", "ccc", "ddd"];
// arr.forEach((item,i)=>{
// 	console.log(item,i);
// })


// let arr = ["aaa" + "bbb" + "ccc" + "ddd" + "eee"];
//  for (var i = 0; i<10)


// for (let i = 0; i<10 i++){
// console.log(i);
// }
// //option 1
// let i = 0;
// console.log("before")
// while(i<2){
// 	console.log(i);
// 	i++;//implent to the loop
// }
// while (i< 10){
// 	console.log(i); // console nothing
// 	i++;
// }
// //2nd 
// let i = 0;
// do{
// console.log(i); //
// i++;


// }
// while(i < 10) // while is asking to do the condition; and "do while is asking to do it and then doing the condition"

// let i = 0
// console.log ('before');
// do{
// 	console.log(i);
// 	i++;
// }

// while(i<2)
// console.log("after")



//------------------------------------------------
//scope

// for(let i=0; i<10 ; i++){ //use var instead of let to be able to access it outside the box
// 	console.log(i);
// }
// console.log(i);
// example : var i=10
          //   var i =9 // we will get no error
//but if let i=10 is used 
//        let i = 9 //error will be obtained
//------------------------------------------------------

//RegEX aka regular expressions...used to checked pattern/words







