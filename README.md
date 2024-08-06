# Understanding Algorithms

Every programmer should have a robust understanding of algorithms and the ability to implement them effectively. This knowledge is crucial because algorithms provide structured steps and rules to solve problems, enabling more efficient and optimized solutions.

Why Algorithms matter

- **Problem Solving**: Algorithms offer systematic approaches to solving complex issues, enhancing the efficiency and performance of code.
- **Universality**: Understanding algorithms transcends specific programming languages, making the knowledge applicable across  various languages and development fields.
- **Efficiency**: Well-designed algorithms can significantly reduce the time and resources required for processing data and solving problems.

Algorithms in JavaScript

In JavaScript, various algorithms play crucial roles in development from sorting and searching to complex graph algorithms. Mastering these algorithms is beneficial for developing diverse applications.

Common Algorithms and their implementations

## Search Algorithms

### Binary Search [File](search_algorithms/binarySearch.js)

Binary Search is efficient for finding an item in a sorted array by repeating dividing the search interval in half until the target value is found.

Time complexity

- **Best Case**: 0(1)
- **Average Case**: 0(log n)
- **Worst Case**: 0(log n)

### Hash Tables [File](search_algorithms/hashTable.js)

Hash tables use a hash function to map keys to values, allowing efficient data retrieval.

The hash table implements uses a class `HashTable` with `put` and `get` methods to insert and retrieve key-value pairs respectively. The class also defined a `hashFunction` method to compute the index in the internal arrays where the key-value pairs are stored.

Time Complexity

- **Best Case**: 0(1) for both insertion and search
- **Worst Case**: 0(n) (due to collisions)
