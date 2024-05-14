//QUESTION 1
// You are building a weather application. You want to display different messages based on the temperature. 
//If the temperature is above 25 degrees Celsius, display "It's a hot day!". If it's between 15 and 25 degrees Celsius, 
//display "It's a pleasant day.". Otherwise, display "It's a cold day.".

function weatherApplication(temp){
    if(temp>25){
        console.log ("It is a hot day")
    }
    else if(temp>=15 && temp<=25){
        console.log("It's a pleasant day")
    }
    else{
        console.log("It's a cold day")
    }
}
weatherApplication(40.0)

//Question2
//You are building a shopping cart for an e-commerce website. When a user adds items to the cart, 
//you need to update the total price. Write a code to calculate the total price. 
//Assume each item has a price property.
const itemsInCart = [{
    firstItem:"Trouser",price: 1000},
   {secondItem:"Tshirt",price: 1500},
   {thirdItem:"dress",price: 2000}
]
let total = 0
let i = 0;
while (i < itemsInCart.length) {
    total+= itemsInCart[i].price;
    i++;
}
console.log("total: $" + total);

//You are developing a simple game where the player earns points based on the number of enemies they defeat. 
//Write a JavaScript function called `calculatePoints` that takes the number of enemies defeated as input and 
//returns the number of points earned. The points earned should follow this rule: 1 point for defeating 1 enemy, 
//2 points for defeating 2 enemies, 3 points for defeating 3 enemies, and so on.

function calculatePoints(enemies){
let points = enemies * 1

return (points)
}
calculatePoints(8)