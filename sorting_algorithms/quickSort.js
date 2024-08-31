function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    console.log("🚀 ~ quickSort ~ pivot:", pivot)
    const left = [];
    console.log("🚀 ~ quickSort ~ left:", left)
    const right = [];
    console.log("🚀 ~ quickSort ~ right:", right)
    const equal = [];
    console.log("🚀 ~ quickSort ~ equal:", equal)
  
    for (let el of arr) {
      if (el < pivot) {
        left.push(el);
      } else if (el > pivot) {
        right.push(el);
      } else {
        equal.push(el);
      }
    }
  
    return [...quickSort(left), ...equal, ...quickSort(right)];
  }
  
  console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));