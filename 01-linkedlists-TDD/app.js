const LinkedList = require('./linkedlist');

const ll = LinkedList.fromValues(10, 20, 30, 40, 50);

ll.print();
ll.removeAtIndex(1);
ll.print();