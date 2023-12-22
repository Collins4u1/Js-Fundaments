/*THIS CODE WAS WRITTEN WITH QUOKKA EXTENSION */

///ADDING AND REPLACING ELEMENTS IN ARRAY//
//Elements can be added with push method
//push method adds element to the end of an array

//SPLICE METHOD
/*This array method is used for adding element in specific positions. The splice 
  method structure is like this
  Splice(first agument, second argument, "elements1", "element2", "element3")
  first argument: this is the position we want the elements to start adding.
  second argument: this is the number of element to be deleted from the original array
  starting from the position it started adding new elements.
  The elements are to be added to the array.
  */

  let yearOfBirth = [1991, 1995, 2002, 2012, 1995];
  console.log(yearOfBirth.length);
  yearOfBirth.splice(2, 0, 1989, 2015, 1956, 1926, 7463,);
  console.log(yearOfBirth)

//CONCATENATION 
//This is a method for adding elements to an array, from my point of view. it is a method that
//an element from the end part of the first array

let newYearOfBirth = yearOfBirth.concat(1900, 8464, 2364, 4764);
console.log(newYearOfBirth)

let cars = ["bmw", "benz", "peugeot", "gmc"];
let years = [2022, 2015, 2012, 2010]; 
let carsYears = cars.concat(years);
console.log(carsYears);

//DELETING ELEMENT FROM AN ARRAY
//There are several array methods for deleting element from an array
//The Pop() method: this method removes the last element from an array.
//The shift() method: this method deletes the first element from an array.
//The splice() method: This method can also be used to delete elements by 
//not adding new elements to be added to the array

carsYears.pop();
console.log(carsYears);
//2010 has been deleted from the array.

carsYears.shift();
console.log(carsYears);
//bmw has been deleted from the array.

carsYears
let carsYearSpliced = carsYears.splice(2, 3);
//we start deleting from index 2 and to delete 3 elements.
console.log(carsYearSpliced)
//gmc, 2022 and 2015 has been deleted as well.33
carsYearSpliced
carsYears
//Splice method create an array that returns the items removed from an
// array.

//FINDING AN ELEMENT IN AN ARRAY
//To find an element in an array, we use the find() method.
// The find() method contains the function(e) {return e === "target element"}
//The position of an element in an array can also be found with indexOf()
//The last occurence using lastIndexOf()

let languages = ["Arabic", "Chinese", "Igbo", "Hindu", "Urdu", "Hausa", "Ghana", 2011, 2013, 2017, 2057];
languages

let Arab = languages.find(function(e) { return e === 'Arabic'});
Arab
let ArabOne = languages.find(e => e === 'Arabic');
ArabOne

//Find function using normal function and arrow function method.

//finding position of elements using index

let igbo = languages.indexOf("Igbo");
igbo

let year1 = languages.indexOf(2013);
year1

//speccifying the start point for searching the elements

let Chinese = languages.indexOf(3, 'Chinese');
Chinese

// -1 because starting from index 3 there is no Chinese language.
//Chinese language is on index 1

let Chinese1 = languages.indexOf('Chinese');
Chinese1 

languages
let sortLanguages = languages.sort();
console.log(sortLanguages);

let reverseLanguages = sortLanguages.reverse();

console.log(reverseLanguages);


//EXERCISE
let shoppingList = [];
shoppingList.push('Milk', 'Bread', 'Apples')
shoppingList

shoppingList.splice(1, 1, 'Banana', 'Egg');

shoppingList

shoppingList.pop();
console.log(shoppingList);

shoppingList.sort()
shoppingList

let milk = shoppingList.indexOf('Milk')
milk

shoppingList.splice(1,0,'Carrots', 'Lettuce');
shoppingList

let cartTwo = ['Juice', 'pop'];

let newCart = shoppingList.concat(cartTwo, cartTwo);
newCart

let lastIndex = newCart.lastIndexOf('pop');
lastIndex

newCart


//Objects in Js

let myCar = {
  make: 'Honda',
  model: 2019,
  drive: '4wd',
  color: 'Blue',
  fullOwnership: true,
  amount: 34200,
  weight: 400,
  forSale: false,
}

let propColor = 'color';
propColor


myCar.propColor = 'red';
propColor

propColor = 'forSale';
propColor

myCar.propColor = true;
propColor

console.log(myCar.make + ' ' + myCar.model + ' ' + myCar.propColor);
console.log(myCar.forSale);





let people = {
  friends: [

  ]
}

let nonso = {
  FName: 'Nonso',
  LName: 'Anyaebosi',
  ID: 24
};

let arinze = {
  Fname: 'Arinze',
  LName: 'Anyaebosi',
  ID: 25,
}

let none = {
  Fname: 'Amadi',
  Lname: 'Oats',
  ID: 26
};


people.friends[0] = nonso;
people.friends[1] = arinze;
people.friends[2] = none;

//An alternate method to the above
//more preferred cos its clean
people.friends.push(nonso, arinze, none)

console.log(people)


/*COMPANY PRODUCT CATALOGUE*/
//1. Create an empty array
let storeInventory = [];
//2. Create 3 items with the specified properties
let itemOne = {
  name: 'Patek Watch',
  model: 2023,
  cost: 200,
  quantity: 5 ,
}

let itemTwo = {
  name: 'Casio Watch',
  model: 2031,
  cost: 290,
  quantity: 52
}

let itemThree = {
  name: 'Shoe',
  model: 2019,
  cost: 50,
  quantity: 12,
}
//3. Add all 3 items to the main array using an array method and log to console
storeInventory.push(itemOne, itemTwo, itemThree);
console.log(storeInventory)

//4.Access the quantity element of the third item.
let thirdItem = storeInventory[2].quantity 
console.log(thirdItem)
