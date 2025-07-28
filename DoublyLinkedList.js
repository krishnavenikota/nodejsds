class Node{
    constructor(data, next = null, prev=null){
        this.data = data;
        this.next= next;
        this.prev=prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    addBefore(data){
    let n = new Node(data, null, this.head);
    let current = this.head
    if(!this.head)
    this.head = n;
    else{
        this.head = n;
        this.head.next = current
        current.prev = this.head;
    }

    }
    
    printList(){
        let c = this.head;
        while(c){
            process.stdout.write(c.data+ '<---->');
            c =c.next;
        }
    }
    
}

const dll = new DoublyLinkedList();

dll.addBefore(100);
dll.addBefore(200);
dll.addBefore(300);
dll.printList();
