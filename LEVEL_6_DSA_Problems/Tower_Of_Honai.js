function towerOfHanoi(n, from,using , to) {
  if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
  } else {
      towerOfHanoi(n - 1, from, to, using); 
      console.log(`Move disk ${n} from ${from} to ${to}`); 
      towerOfHanoi(n - 1, using, from  , to); 
  }
}
towerOfHanoi(7, "A","B","C");