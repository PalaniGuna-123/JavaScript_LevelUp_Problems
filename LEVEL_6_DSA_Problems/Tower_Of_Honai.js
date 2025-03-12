// Question 1: Tower of Hanoi: We have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, find & return the total moves.

// Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. You can only move 1 disk at a time.

function towerOfHanoi(n, from,using , to) {
  if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
  } else {
      towerOfHanoi(n - 1, from, to, using); 
      console.log(`Move disk ${n} from ${from} to ${to}`); 
      towerOfHanoi(n - 1, using, from  , to); 
  }
}
towerOfHanoi(3, "A","B","C");
