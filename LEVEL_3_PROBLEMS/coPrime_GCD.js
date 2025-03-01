function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  function areCoPrime(a, b) {
    let g = gcd(a, b);
    if (g === 1) {
      console.log("co-prime");
    }
    else {
      console.log("Not a co-prime");
    }
  
  }
  areCoPrime(10,5);
  areCoPrime(17,19);