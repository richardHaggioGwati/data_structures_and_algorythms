class Graph {
    constructor() {
      this.nodes = [];
      this.adjacencyList = {};
    }
  
    addNode(node) {
      this.nodes.push(node);
      this.adjacencyList[node] = [];
    }
  
    addEdge(node1, node2) {
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1);
    }
  
    bfs(start) {
      const visited = {};
      const result = [];
      const queue = [start];
      visited[start] = true;
  
      while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
  
        this.adjacencyList[current].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  const graph = new Graph();
  
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  graph.addNode("F");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
graph.addEdge("E", "F");
  
console.log(graph.bfs("A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']