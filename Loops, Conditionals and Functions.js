// //Loops, Conditionals and Functions
// 1. Fix the issues in this code
// calculateArea();
// greetUser();
// function calculateArea() {
// const radius 5;
// let area;
// var area Math.PI radius radius;
// console.log(area);
// }
calculateArea();
greetUser();
function calculateArea(){
    const radius=5
    let area=Math.PI*radius*radius
    console.log(area);
    
}
function greetUser(){
    names="Guna"
    console.log(names);
    
}


// 2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?
let count=100;
while(count>0){
    console.log("counting down"+ count);
    count--;
}

// 3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!
let temperature=30
if(temperature<20){
    console.log("it's very cold");
    
}
else{
    console.log("it's warm");
    
}




// 4. Fix the issues in the code so that output is printed correctly
//possitive or negative
function checkNum(num){
    if(num<0){
        console.log("It's is negative");
        
    }
    else if(num>0){
        console.log("it's posssitive");
        
    }
    else{
        console.log("zero");
        
    }

}
checkNum(2)
checkNum(-2)
checkNum(0)


// 5. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.
function sumNUm(num){
    sum=0;
    let i=1;
    while(i<=num){
        sum+=i;
        i++;
    }
    return sum;
}
console.log(sumNUm(10));




// 6. Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loo?
function factorial(n){
    let fact=1;
    while(n>0){
        fact*=n;
        n--;
    }
    return fact;
}
console.log(factorial(3));



// 7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.
function printEvenNumbers(n){
    let i=1;
    while(i<=n){
        if(i%2===0){
            console.log(i);
            
        }
        i++;
    }

}
printEvenNumbers(10)


// 8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.
// function sumNumbers(n) {
// let sum 0;
// let 10; while (in) {
// sum i;
// 1++
// } return sum;

function swumNUm(n){
    let sum=0;
    i=1;
    while(i<=n){
        sum+=i;
        i++;

    }
    console.log(sum);
    
}
swumNUm(10)

// 9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rulles:

// If the number is divisible by 3, return "Divisible by 3".
// If the number is divisible by 5, return "Divisible by 5".
// If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5"..
// If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5"..


function classifyNumber(num){
    if(num%3===0 && num%5===0){
       return "Divisible by both 3 and 5"
        
    }
    else if(num %3===0){
        return  "Divisible by 3"
    }
    else if(num %5===0){
        return "Divisible by 5"
    }
    else{
        return "Not divisible by 3 or 5"
    }
}
console.log(classifyNumber(15));
console.log(classifyNumber(7));
console.log(classifyNumber(5));




// 10. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.
function getDayName(dayNum){
    switch(dayNum){
        case 1: return "sunday";
        case 2: return "monday";
        case 3: return "tuesday";
        case 4: return "wednerday";
        case 5: return "thursday";
        case 6: return "friday";
        case 7: return "saturday";
       default: return "invalid day"

    }
}
console.log(getDayName(3));
console.log(getDayName(9));


// 11. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6
// Expected O/P
// 5*6=30
// 5-5-25
// 54 20
// 53-15
// 52-10
// 51-5
 

function multiplication(n,r){
    for(let i=r;i>=1;i--){
        console.log(`${n} * ${i} = ${n*i}`);
        
    }
}
multiplication(5,6)
// 12. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.
let laps=0
while(laps<10){
    laps++;
    console.log(`Lap ${laps} completed`);
    
}
// 13. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.

let batteryLevel=100;
while(batteryLevel>20){
    console.log(`Battery level: ${batteryLevel}%`);
    batteryLevel-=5;
    
}
console.log("Battery is low");

// 14. A robot can move in 4 directions. North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.
function Move(direction){
    switch(direction){
        case "North":
            console.log("movinng NOrth");
            break;
        case "SOuth":
            console.log("MOving south");
            break;
        case "East" :
            console.log("MOving East");
            break;
        case "west":
            console.log("MOving west");
            break;
            default:
                console.log("Invalid direction");      
    }
}
Move("North")
Move("day")


// 15. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print "Flight arrived" when the airplane altitude reaches Oft

let altitude=1000;
while(altitude>0){
    altitude-=10
    console.log(`Altitude: ${altitude} ft`);
    
}
console.log("Flight Arrived");

// 16. Based on the flight's destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.

function assignRunway(destination){
    switch(destination){
        case "New York":
            console.log("Run way A");
            break
            case "Londen":
            console.log("Run way B");
            break
            case "Tokyo":
            console.log("Run way C");
            break
            default:
                console.log("No runway assigned");     
    }
}
assignRunway("New York")
// 17. Write a program where an airplane dimbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

for (let i=1;i<=10;i++){
    console.log(`Altitude : ${i *100}FT`);
    
}
