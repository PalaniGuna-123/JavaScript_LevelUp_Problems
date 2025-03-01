// Given array of purchases and cities find the sum of a given city.

// Example
// calculate([100, 200, 300, 100, 10, 300], ["chennai", "bangalore", "hyderabad", "chennai", "chennai", "bangalore"],"chennai")

// output 100 + 100 + 300 and print 500

// calculate([100, 200, 300, 100, 10, 300],
//     ["chennai", "bangalore", "hyderabad", "chennai", "chennai", "bangalore"],
//     "bangalore");
// 500
// 500
// calculate([50, 75, 120, 90, 30],
//     ["delhi", "mumbai", "kolkata", "pune", "goa"],
//     "chennai");
// 0
// 0
// calculate([60, 40, 80, 100],
//     ["Mumbai", "BANGALORE", "mumbai", "bangalore"],
//     "mumbai");
// 140
// 140
// calculate([30, 20, 50, 40],
//     ["delhi", "delhi", "delhi", "delhi"],
//     "delhi");
// 140
// 140
// calculate([], [], "hyderabad");
// 0
// 0

function calculate(purchases, cities, targetCity) {

    let total=0;
    let city=cities.join(",").toLowerCase();
        cit=city.split(",");
;
  
    for(let i=0;i<cit.length;i++){
        if(cit[i]===targetCity){
            total+=purchases[i];
        }
  }
    console.log(total);
  }

  calculate([100, 200, 300, 100, 10, 300], 
    ["chennai", "bangalore", "hyderabad", "chennai", "chennai", "bangalore"], 
    "bangalore");

    function calculate(purchases, cities, targetCity) {
      let total = 0;
      for (let i = 0; i < cities.length; i++) {
          if (cities[i].toLowerCase() === targetCity.toLowerCase()) {
              total += purchases[i];
          }
      }
      console.log(total);
  }
  calculate([100, 200, 300, 100, 10, 300],
      ["chennai", "bangalore", "hyderabad", "chennai", "chennai", "bangalore"],
      "bangalore");