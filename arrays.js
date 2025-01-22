//Arrays
// 1. Given the array train_departures [10, 15, 7, 20, 5), where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.
function findSmall(arr){
    let small=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    console.log(small);
    
}
findSmall ([10, 15, 7, 20, 5,1])
// 2. Given the array seats (1, 0, 1, 1, 0, 0, 1, 0), where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.
function seatCount(seat){
    let count=0;
    for(let i=0;i<seat.length;i++){
        if(seat[i]===0){
            count++;
        }
    }
    console.log(count);
    

}

seatCount([1, 0, 1, 1, 0, 0, 1, 0])
// 3. Given the array soldiers [120, 300, 250, 180, 158), where each element represents the number of soldiers assigned to different
// regions, find the region with the highest number of soldiers.

function soldiers(arr){
    let maxSol=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxSol){
            maxSol=arr[i]
        }
    }
    console.log(maxSol);
    
}
soldiers([120, 300, 250, 180, 158])
// 4. Given the array populations [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
function population(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    avg=total/arr.length;
    console.log(avg);
    
}

population( [50, 60, 70, 80, 90])
// 5. Given the array water levels [30, 50, 20, 40, 68), where each element represents the current water level in a tank, find the tank with the lowest water level.
function water(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(min);
    
}
water([30, 50, 20, 40, 68])

// 6. Given the array days_untli festival [30, 15, 45, 18, 253, where each element represents the number of days left until an
// important festival, find the closest upcoming festival.

function festival(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(min);
    
}
festival([30, 15, 45, 18, 253])
// 7. Given the array landing times [12, 15, 12, 18, 28), where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

function landingFlight(arr){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            return true;
        }
    }
}
return false;
}

console.log(landingFlight([12, 15, 11, 18, 28]));
console.log(landingFlight([12, 15, 12, 18, 28]));

// 8. Given the array temperatures [75, 80, 72, 85, 98), where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.
function temp(arr){
    let region=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>80){
            region.push(arr[i]);
        }
    }
    console.log(region);
    
}
temp([75, 80, 72, 85, 98])

// 9. Given the array students_per_route [45, 55, 30, 60, 40), where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.

function bus(arr){
    let totalBuses=0;
    for(let i=0;i<arr.length;i++){
        totalBuses+=Math.ceil(arr[i]/50)
    }
    console.log(totalBuses);

}
bus([45, 55, 30, 60, 40])
//     10. You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.
function expenses(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    console.log(total);
    
}
expenses([12,12,34,56,78])
//     11. You are given an array of student grades. Write a function that calculates the average grade.

function grades(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    let avg=total/arr.length;
    let guna=Math.floor(avg)
    console.log(guna);
    
}
grades([87,98,54,34])
//     12. You have an array of people ages. Write a function that filters out people who are 18 years old or older.
     function age(arr){
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>=18){
                count++;
            }
        }
        console.log(count);
        
     }
     age([12,13,18,17,19,23,24,25])
//     13. You have an array of integers. Write a function that returns the count of the even numbers in the array.
function integers(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++
        }
    }
    console.log(count);
    
}
integers([1,2,3,4,5,6,7,8,9,10])
//     Array Methods and Objects
//     1. Push Multiple Elements
//     Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

function pushColors(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i]+"violet"+"pink")
    }
    console.log(newArr);
    

}
pushColors(["orange","red"])
function pushCol(){
    let colors=["Red","Blue"];
    colors.push("Green","Yellow");
    return colors;
}
console.log(pushCol());

//     2. Shift Multiple Times
//     Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, and print the array after each removal.
function fruits(){
    let fruits=["Apple","Banana","Cherry","fig","Grapes"]
    fruits.shift()
    fruits.shift()
    return fruits;
}
console.log(fruits());

//     3. Unshift with Multiple Arguments
//     Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the beginning in a single line and print the array.
function sports(){
    let sports=["chess","FootBall"];
    sports.unshift("Tennis","Cricket","Hockey")
    return sports;
}
console.log(sports());

//     4. Find Non-Existing Element with indexOf()
//     Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.
function findNonExistingElement(){
    let devices=["Phone","Tablet","Monitor"];
    return devices.indexOf("Monitor");
}
console.log(findNonExistingElement());

//     5. Split String with Different Delimiter
//     Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.
function splitStr(){
    let str="HTML-CSS-JavaScript";
    let parts=str.split("-");
    return parts;
}
console.log(splitStr());

//     6. Reverse Order of Array Using pop()
//     Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a new array in reverse
//     order. Print the reversed array.
function reversePop(){
    let num=[1,2,3,4];
    let reversed=[];
    while(num.length>0){
        reversed.push(num.pop());
    }
    return reversed;
    // num.reverse()
    // return num;
}
console.log(reversePop());

//     7. Joining Array Elements Without a Separator
//     Create an array of 4 fruits. Use join() without any separator to combine the array elements into a single string and print the result.
function joinFruit(){
    let fruits=["Apple","Banana","Fig","Grape"]
    return fruits.join(" ");
}
console.log(joinFruit());

//     8. Object with Simple Properties
//     Write a program to create an object car with properties make, model, and year. Print the model of the car.
function carObject(){
    let car={
        make: "Toyota",
        model: "Camry",
        year : 2020
    }
    return car.year
}
console.log(carObject());

//     9. Array of Objects (Books)
//     Create an array of 2 objects, where each object represents a book with properties title and author, Print the title of the first book
function booksArr(){
    let books=[
        {
            title: "Book one",
            author: "Author A"
        },
        {
            title:"Book two",
            author: "Author B"
        }
    ];
    return books[0].title;
}
console.log(booksArr());

//     10. Adding New Property to Objects in an Array
//     You have an array of 4 objects, each representing a car with properties brand and model. Write a program to add a new property year to
//     each object and assign a value, then print the updated array.
//     Example:
//     cars = 1
//     1
//     1
//     (brand: "Tata", model "Nano"),
//     {brand: "Honda", model: "Civic)
//     Output:
//     cars=[
//     (brand: "Tata', model: 'Nano', year: "2009")
//     (brand: 'Honda', model 'Civic', year: "2021')
function addNew(){
    let cars=[
        {
            brand: "Tata", model: "Nano"
        },
        {
            brand: "Honda", model: "Civic"
            
        }
    ]
    for(let i=0;i<cars.length;i++){
        cars[i].year=i===0?"2009" : "2021"
    }
    return cars;
}
console.log(addNew());

//     11. Summing Object Property Values in an Array
//     You have an array of 3 objects, each representing a product with properties name and price. Write a program to calculate and print the total price of all the products in the array.
//     Example:
//     products = [
//     1
//     (name: "Laptop", price: 800),
//     (name: "Phone", price: 500 1.
//     Output:
//     1300
//     12. Finding an Object by Property Value in an Array
//     You have an array of 5 objects, each representing a student with properties name and grade. Write a program to find and print the name of the student whose grade is "A"
//     Example:
//     students = [
//     1
//     (name: "Amar", grade: "A" ],
//     (name: "Akbar", grade: "B" 1,
//     (name: "Anthony", grade: "A"),
//     Output:
//     ['Amar', 'Anthony']

const products=[
    {name: "Laptop", price: 800},
             {name: "Phone", price: 500}
]
let totalPrice=0;
for(let i=0;i<products.length;i++){
    totalPrice+=products[i].price;
}
console.log(totalPrice);




// Real-world use-cases:
// 1. Average of Scores
// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
// 2. Finding Maximum Score
// You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.
// 3. Number System Conversion
// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.
const decimals=[5,10,15];
let binary=[];
for(let i=0;i<decimals.length;i++){
    let binaries="";
    let num=decimals[i];
    while(num>0){
        binaries=(num %2)+binaries;
        num=Math.floor(num/2);
    }
    binary.push(binaries || "0");
}
console.log(binary);

// 4. Boolean Algebra (AND Operation)
// Write a program that takes two arrays of Boolean values (e.g.. [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.
const arr1=[true,false,true]
const arr2=[false,true,true]
let andResult=[];
for(let i=0;i<arr1.length;i++){
    andResult.push(arr1[i]&& arr2[i])
}
console.log(andResult);

// 5. Percentage Increase in Prices
// Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.
const old=[100,200,300]
const newPri=[120,240,360]
let percentageIncrese=[];
for(let i=0;i<old.length;i++){
    let increase=((newPri[i]-old[i]/old[i]*100))
    percentageIncrese.push(increase)
}
console.log(percentageIncrese);

// 6. Set Theory (Union of Two Sets)
// Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.
const set1=[1,2,3];
const set2=[3,4,5];
let union=[];
for(let i=0;i<set1.length;i++){
    union.push(set1[i])
}
for(let i=0;i<set2.length;i++){
    let exists=false;
    for(let j=0;j<union.length;j++){
        if (set2[i]===union[j]){
            exists=true;
            break;
        }
    }
    if(!exists){
        union.push(set2[i])
    }
}
console.log(union);

// 7. Finding the Mode (Most Frequent Element)
// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.
const numbers=[1,2,3,2,4,2,5,6,2,1];
let Frequency={};
let mode=numbers[0];
let max=0;
for(let i=0;i<numbers.length;i++){
    let num=numbers[i];
    if(!Frequency[num]){
        Frequency[num]=1;
    }else{B
        Frequency[num]++;
    }
    if(Frequency[num]>max){
        max=Frequency[num];
        mode=num;
    }
}
console.log(mode);

// 8. Modulus Operation for Time Calculation
// Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.
// 9. Simple Interest Calculation
// Create an array of 10 obiects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array.
// For example:
// details = [
// (principal: 10000, rateOfInterest: 5, noOfYears: 4), (principal: 15000, rateOfInterest: 4, noOfYears: 3),
// Output:
// [ 2000, 18001
// 10. Calculating Total Marks of Students
// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. Print the new array.
// students = [
// Example: 1
// (subject1Marks: 80, subject2Marks: 90, subject3Marks: 70},
// (subject1Marks: 60, subject2Marks: 50, subject3Marks: 65),
// Output:
// [240, 175]
// 11. Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
// Example:
// expenses = [
// (rent: 1000, groceries: 500, utilities: 200),
// (rent: 800, groceries: 400, utilities: 150),
// 1
// Output:
// 1700, 1350]