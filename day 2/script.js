/*let age = prompt ("please enter your age");
console.log (Number(age));
age = Number(age);

if(age<18){
	alert("Sorry, you are too young to drive this car.Powering off");
}

 else if (age==18){
	alert("Congratulations on your first year of driving. Enjoy the ride!");

}

else { 
alert("Powering On. Enjoy the ride!");
}


let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );// this will be the outcome
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}



let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!'); //  this will be outcome
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
 let browser = 'Firefox'
if (browser==Edge)
	alert( “You’ve got the Edge!” );

else if (browser== 'Chrome'|| browser=='Firefox' || browser=='Safari'||browser== 'Opera');
alert( ‘Okay we support these browsers too’ );

else {
alert( ‘We hope that this page looks ok!’ );
}



/*switch (browser) {
  case ‘Edge’:
    alert( “You’ve got the Edge!” );
    break;
  case ‘Chrome’:
  case ‘Firefox’:
  case ‘Safari’:
  case ‘Opera’:
    alert( ‘Okay we support these browsers too’ );
    break;
  default:
    alert( ‘We hope that this page looks ok!’ );
}*/



//Check the range between
//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
let age = 20 



if (age >= 14 && age <= 90){
  console.log("true");
}
else {
  console.log("false");
}


//Check the range outside
//Write an if condition to check that age is NOT between 14 and 90 inclusively.
//Create two variants: the first one using NOT !, the second one – without it.

if (!(age >= 14 )&& ( age >=90) ){
console.log("true");
}

else{
  console.log("false");
}


if(age< 14 || age>90){
  console.log("right");
}


else {
  console.log("wrong");
}






