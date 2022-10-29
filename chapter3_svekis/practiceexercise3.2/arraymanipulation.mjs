const shoping=[];
shoping.push("Milk","Bread","Apple");// adding in array
console.log(shoping);
shoping.splice(1,0,"Banana","Butter");// Splice(index to insert,delete count,what to be added)
console.log(shoping);
console.log(shoping.pop());//removing last element from array
console.log(shoping.sort()); // sorting array alphabetically
console.log(shoping.indexOf("Milk"));
shoping.splice(1,0,"Carrots","Leuttce");
console.log(shoping);