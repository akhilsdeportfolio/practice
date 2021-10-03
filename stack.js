class Stack{
     

     constructor(size)
     {
          this.top=-1;
          this.max=size;
          this.arr=[]
     }


     push(x)
     {
          if(this.ifFull())
               console.log("Overflow error");
          else 
               {
                    this.top++;
                    console.log(this.arr[this.top]);
                    this.arr[this.top]=x;
               }
     }




     peek()
     {
          return this.peek();
     }


     pop()
     {
          if(this.isEmpty())
               console.log("underflow error");
          else
               {
                    console.log(this.arr[this.top]);
                    this.top--;
                    
               }
     }

     

     isEmpty()
     {
          return this.top==-1;
     }



     ifFull()
     {
          return this.top==this.max-1;
     }







}


let stack = new Stack(10);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(11);

console.log(stack);

stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log(stack);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
console.log(stack);
stack.push(15);
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
