// heap 자료구조 우선순위 큐에 사용가능

class Heap {
  constructor() {
    this.heap = [];
  }
  enqueue(n) {
    this.heap.push(n);
    let cur = this.heap.length - 1;
    let parent = Math.floor((cur - 1) / 2);
    while (this.heap[cur] > this.heap[parent]) {
      this.swap(cur, parent);
      cur = parent;
      parent = Math.floor((parent - 1) / 2);
    }
  }
  dequeue() {
    this.swap(0, this.heap.length - 1);
    const top = this.heap.pop();
    let cur = 0;
    while (cur < this.heap.length - 1) {
      let leftChild = cur * 2 + 1;
      let rightChild = cur * 2 + 2;
      if (!this.heap[leftChild]) break;
      else if (!this.heap[rightChild]) {
        if (!this.heap[cur] > this.heap[leftChild]) {
          this.swap(cur, leftChild);
        }
        break;
      } else {
        const max = this.heap[leftChild] - this.heap[rightChild] > 0 ? leftChild : rightChild;
        if (this.heap[cur] < this.heap[max]) {
          this.swap(cur, max);
          cur = max;
        } else {
          break;
        }
      }
    }

    return top;
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  print() {
    console.log(this.heap);
  }
}

const heap = new Heap();
heap.enqueue(5);
heap.print();
heap.enqueue(9);
heap.print();
heap.enqueue(7);
heap.print();
heap.enqueue(10);
heap.print();
heap.enqueue(20);
heap.print();
heap.enqueue(30);
heap.print();
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
