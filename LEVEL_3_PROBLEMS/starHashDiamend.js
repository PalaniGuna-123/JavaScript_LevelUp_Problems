function star_diamond(n) {
    let row = "";

    // Upper part of the diamond
    for (let i = 1; i <= n; i++) {
        row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (n % 2 === 0) {
                row += "#";
            } else {
                row += "*";
            }
        }
        console.log(row);
    }

    // Lower part of the diamond
    for (let i = n - 1; i >= 1; i--) {
        row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (n % 2 === 0) {
                row += "#";
            } else {
                row += "*";
            }
        }
        console.log(row);
    }
}

// Example usage
star_diamond(4);
