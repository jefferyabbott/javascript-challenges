class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) { 
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }

  printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join('')}`);
    }
  }
}

// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };

module.exports = Graph;
