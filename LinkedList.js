class Node{
    constructor(data, next = null){
        this.data = data;
        this.next= next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    
    addFirst(data){
        const n = new Node(data,this.head);
        this.head=n;
        return
    }
    
    addLast(data){
        const n = new Node(data);
        if(!this.head ){
            this.head =n;
        }
        else{
        let current = this.head;
        while(current.next){
        current = current.next;
        }
        current.next = n;  
        }

        return;
    }
    
    printList(){
        let current = this.head;
        while(current){
            process.stdout.write(current.data+ '-->');
            //console.log(current.data, '-->')
            current = current.next;
        }
         process.stdout.write('null');
    }
    
    createList(data){
        data.forEach((x) => {
        this.addLast(x);
        });
    }
    
    createCycle(){
        let current = this.head;
        let second = this.head.next;
        while(current.next){
            current= current.next;
        }
        current.next = second;
        console.log('\n',"cycle created");
    }
    
    hasCycle(){
        let slow = this.head;
        let fast = this.head;
        
        while(slow && fast){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true;
            }
        }
        return false;
    }
    
    kthElement(size,k){
        let slow = this.head;
        let fast = this.head;
        let count = 0;
        if(k > size){
            return null;
        }
        
        while(count < k){
            fast = fast.next;
            count+=1;
        }
        
        while(fast){
            slow = slow.next;
            fast = fast.next;
        }
        
        return slow;
        
    }
}


let ll = new LinkedList();
ll.addFirst(100);
ll.addFirst(200);
ll.addFirst(300);
ll.addLast(400);
ll.addLast(500);
ll.addFirst(650);

ll.printList();

ll.createCycle();

console.log('\n','Has Cycle', ll.hasCycle());


let ll1 = new LinkedList();
let dataLL1 = [1, 2, 3, 4, 5];

ll1.createList(dataLL1);
ll1.printList();
const c = ll1.kthElement(5, 10);

console.log('\n','kth element',c ? c.data: 'no element in that place'  );