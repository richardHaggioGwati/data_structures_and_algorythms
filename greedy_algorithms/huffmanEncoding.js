function huffmanEncoding(data) {
    const freqCounter = {};
    for (let char of data) {
      freqCounter[char] = (freqCounter[char] || 0) + 1;
    }
  
    const priorityQueue = new PriorityQueue();
    for (let char in freqCounter) {
      priorityQueue.enqueue(new HuffmanNode(char, freqCounter[char]));
    }
  
    while (priorityQueue.size() > 1) {
      const leftNode = priorityQueue.dequeue();
      const rightNode = priorityQueue.dequeue();
      const combinedFreq = leftNode.freq + rightNode.freq;
      priorityQueue.enqueue(new HuffmanNode(null, combinedFreq, leftNode, rightNode));
    }
  
    const huffmanCode = {};
    generateCode(priorityQueue.peek(), "", huffmanCode);
  
    let encodedData = "";
    for (let char of data) {
      encodedData += huffmanCode[char];
    }
    return encodedData;
  }
  
  class PriorityQueue {
    constructor() {
    this.queue = [];
  }
  
  enqueue(node) {
    let added = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (node.freq < this.queue[i].freq) {
        this.queue.splice(i, 0, node);
        added = true;
        break;
      }
    }
    if (!added) {
        this.queue.push(node);
      }
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    size() {
      return this.queue.length;
    }
  
    peek() {
      return this.queue[0];
    }
  }
  
  class HuffmanNode {
    constructor(char, freq, left = null, right = null) {
      this.char = char;
      this.freq = freq;
      this.left = left;
      this.right = right;
    }
  }
  
  function generateCode(node, code, huffmanCode) {
    if (node.char) {
      huffmanCode[node.char] = code;
      return;
    }
    generateCode(node.left, code + "0", huffmanCode);
    generateCode(node.right, code + "1", huffmanCode);
  }
  
  console.log(huffmanEncoding("aaaaabbbcccc")); // Output: "000001111101111100010010".