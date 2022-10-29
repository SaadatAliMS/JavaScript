let age=Number(prompt("Enter the age of person")); // prompt function consider everthing as string."Number used to convert string into number"
console.log(typeof age);
if (age< 2){
    console.log("The person is baby");
}else if(age>= 2 && age< 4){
    console.log("The person is toddler");

}else if (age>= 4 && age< 13 ){
    console.log("The person is a kid");
}else if (age>=13 && age<20 ){
    console.log("The person is a teenager");
}else if (age>=20 && age<65 ){
    console.log("The person is a an adult");
}else if (age>=65){
    console.log("The person is elder");
}else
    console.log("Match Not Found");
