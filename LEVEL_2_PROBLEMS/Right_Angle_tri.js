function printRightAngleTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""; // Initialize an empty string for the current row
        for (let j = 1; j <= i; j++) {
            row += "*"; // Add a star to the current row
        }
        console.log(row); // Print the current row
    }
}

printRightAngleTriangle(5);

function right(n){
    for(i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+="* "
        }
        console.log(row);
        
    }

}
right(4)