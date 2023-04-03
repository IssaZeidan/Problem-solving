// Q1:

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib( n - 2);
// }
// console.log(fib(5));
// console.log(fib(4));
// console.log(fib(3));
// console.log(fib(2));
// console.log(fib(1));
// console.log(fib(0));

// Q2:

// let sum= function(array){
//     return array.length === 0 ? 0 : array [0] + sum (array.slice(1))
// }

// console.log(sum([1,2,3,4,5]));

// Q3:

//  function reverse (str) {
//  if (str === "")
//  {
//  return "";
// }
//  else
//  {
//  return reverse(str.substr(1)) + str.charAt(0);
//  }
//  }
//  console.log(reverse("hello"));





// Q1 : Implement a function that returns the minimum element in a stack in constant time complexity.

// const stack = [];
// const minStack = [];

// function myPush(num){
//     stack.push(num);
//     if (minStack.length === 0 || num <= minStack[minStack.length - 1]) {
//         minStack.push(num);
//     }
// }
// function getMin(){
//     return minStack[minStack.length - 1];
// }

// myPush(7);
// myPush(9);
// myPush(8);
// myPush(6);
// myPush(5);
// console.log(getMin());
  
// Q2: Given a queue of integers, reverse the order of the elements in the queue.

// function reverseQueue(queue){
//   const stack = [];
//   while(queue.length > 0) {
//     stack.push(queue.shift());
//   }
//   while(stack.length > 0) {
//     queue.push(stack.pop());
//   }
//   return queue;
// }

// console.log(reverseQueue([1,2,3,4,5])); 

// output will be [5 , 4 , 3 , 2 , 1]

// Q3: Implement a Queue using 2 stacks s1 and s2.

// class Queue {
//   constructor() {
//     this.s1 = [];
//     this.s2 = [];
//   }

//   enQueue(x) {
//     // Move all elements from s1 to s2
//     while (this.s1.length != 0) {
//       this.s2.push(this.s1.pop());
//       //s1.pop();
//     }

//     // Push item into s1
//     this.s1.push(x);

//     // Push everything back to s1
//     while (this.s2.length != 0) {
//       this.s1.push(this.s2.pop());
//       //s2.pop();
//     }
//   }

//   // Dequeue an item from the queue
//   deQueue() {
//     // If first stack is empty
//     if (this.s1.length == 0) {
//       console.log("Q is Empty");
//     }

//     // Return top of s1
//     let x = this.s1[this.s1.length - 1];
//     this.s1.pop();
//     return x;
//   }
// }

// // Driver code
// let q = new Queue();
// q.enQueue(1);
// q.enQueue(2);
// q.enQueue(3);
// q.enQueue(4);
// q.enQueue(5);
// q.enQueue(6);

// console.log(q.deQueue());
// console.log(q.deQueue());
// console.log(q.deQueue());
// console.log(q.deQueue());
// console.log(q.deQueue());
// console.log(q.deQueue());


// Q4 : Create a function that takes a LinkedList and deletes the middle node in it and returns it

// class Node {
//   constructor() {
//       this.data = 0;
//       this.next = null;
//   }
// }

// // count of nodes
// function countOfNodes(head)
// {
//   let count = 0;
//   while (head != null) {
//       head = head.next;
//       count+=1;
//   }
//   return count;
// }

// // Deletes middle node and returns
// // head of the modified list
// function deleteMid(head)
// {
//   // Base cases
//   if (head == null)
//       return null;
//   if (head.next == null) {
//       return null;
//   }
//   var copyHead = head;

//   // Find the count of nodes
//   var count = countOfNodes(head);

//   // Find the middle node
//   var mid = parseInt(count / 2);

//   // Delete the middle node
//   while (mid-- > 1) {
//       head = head.next;
//   }

//   // Delete the middle node
//   head.next = head.next.next;

//   return copyHead;
// }

// // A utility function to print
// // a given linked list
// function printList( ptr) {
//   while (ptr != null) {
//       console.log(ptr.data + "->");
//       ptr = ptr.next;
//   }
//   console.log("NULL");
// }

// // Utility function to create a new node.
// function newNode(data) {
//    temp = new Node();
//   temp.data = data;
//   temp.next = null;
//   return temp;
// }

// /* Driver code */

//   /* Start with the empty list */
//    head = newNode(1);
//   head.next = newNode(2);
//   head.next.next = newNode(3);
//   head.next.next.next = newNode(4);

//   console.log("Given Linked List");
//   printList(head);

//   head = deleteMid(head);

//   console.log(
//   "Linked List after deletion of middle"
//   );
//   printList(head);


// Q5 : Create a function that takes a LinkedList and reverses it



class Node {
  constructor(val) {
      this.data = val;
      this.next = null;
  }
}

/* Function to reverse the linked list */
function reverse(node) {
let prev = null;
let current = node;
let next = null;
  while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  node = prev;
  return node;
}

// prints content of double linked list
function printList(node) {
  while (node != null) {
      console.log(node.data + " ");
      node = node.next;
  }
}

// Driver Code

  head = new Node(10);
  head.next = new Node(20);
  head.next.next = new Node(30);
  head.next.next.next = new Node(40);

  console.log("Given linked list");
  console.log(head);
  head = reverse(head);
  console.log("Reversed linked list ");
  console.log(head);