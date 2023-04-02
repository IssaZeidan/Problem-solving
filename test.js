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


// class MyStack {
//     constructor() {
//         this.s = [];
//         this.minEle;
//     }
  
//     // Prints minimum element of MyStack
//     getMin() {
//         if (this.s.length == 0)
//             console.log("Stack is empty");
  
//         // variable minEle stores the minimum element
//         // in the stack.
//         else
//             console.log("Minimum Element in the stack is: ", this.minEle);
//     }
  
//     // Prints top element of MyStack
//     peek() {
//         if (this.s.length == 0) {
//             console.log("Stack is empty ");
//             return;
//         }
//         let t = this.s[0]; // Top element.
  
//         console.log("Top Most Element is: ");
  
//         // If t < minEle means minEle stores
//         // value of t.
//         (t < this.minEle) ? console.log(this.minEle) : console.log(t);
  
//     }
  
//     // Remove the top element from MyStack
//     pop() {
//         if (this.s.length == 0) {
//             console.log("Stack is empty ");
//             return;
//         }
//         console.log("Top Most Element Removed: ");
//         let t = this.s[0]; // Top element.
//         this.s.shift();
  
//         // Minimum will change as the minimum element
//         // of the stack is being removed.
//         if (t < this.minEle) {
//             console.log(this.minEle);
//             this.minEle = (2 * this.minEle) - t;
//         }
  
//         else
//             console.log(t);
//     }
  
//     // Removes top element from MyStack
//     push(x) {
//         // Insert new number into the stack
//         if (this.s.length == 0) {
//             this.minEle = x;
//             this.s.unshift(x);
//             console.log("Number Inserted: ", x);
//             return;
//         }
  
//         // If new number is less than minEle
//         else if (x < this.minEle) {
//             this.s.unshift(2 * x - this.minEle);
//             this.minEle = x;
//         }
  
//         else
//             this.s.unshift(x);
  
//         console.log("Number Inserted: ", x);
//     }
  
  
// };
  
  
// // Driver Code
// let s = new MyStack;
  
// // Function calls
// s.push(3);
// s.push(5);
// s.getMin();
// s.push(2);
// s.push(1);
// s.getMin();
// s.pop();
// s.getMin();
// s.pop();



// Q2: Given a queue of integers, reverse the order of the elements in the queue.


// function printQueue(queue)
//     {
//         while (queue.length != 0)
//         {
//             document.write(queue[0] + " ");
//             queue.shift();
//         }
//     }
      
//     // Recursive function
//     // to reverse the queue
//     function reverseQueue(q)
//     {
//         // Base case
//         if (q.length == 0)
//             return;
      
//         // Dequeue current
//         // item (from front)
//         let data = q[0];
//         q.shift();
      
//         // Reverse remaining queue
//         reverseQueue(q);
      
//         // Enqueue current
//         // item (to rear)
//         q.push(data);
//     }   
     
//     let queue = [];
//     queue.push(56);
//     queue.push(27);
//     queue.push(30);
//     queue.push(45);
//     queue.push(85);
//     queue.push(92);
//     queue.push(58);
//     queue.push(80);
//     queue.push(90);
//     queue.push(100);
//     reverseQueue(queue);
//     console.log(queue);


// Q3: Implement a Queue using 2 stacks s1 and s2.


class Queue{
      
    constructor()
    {
        this.s1 = [];
        this.s2 = [];
    }
      
    enQueue(x)
    {
          
        // Move all elements from s1 to s2 
        while (this.s1.length != 0)
        { 
            this.s2.push(this.s1.pop()); 
            //s1.pop(); 
        } 
      
        // Push item into s1 
        this.s1.push(x); 
      
        // Push everything back to s1 
        while (this.s2.length != 0) 
        { 
            this.s1.push(this.s2.pop()); 
            //s2.pop(); 
        } 
    }
      
    // Dequeue an item from the queue  
    deQueue() 
    {
          
        // If first stack is empty 
        if (this.s1.length == 0) 
        { 
            console.log("Q is Empty"); 
        } 
      
        // Return top of s1 
        let x = this.s1[this.s1.length - 1]; 
        this.s1.pop(); 
        return x; 
    }
    }
      
    // Driver code
    let q = new Queue(); 
    q.enQueue(1); 
    q.enQueue(2); 
    q.enQueue(3); 
      
    console.log(q.deQueue()); 
    console.log(q.deQueue());
    console.log(q.deQueue());









