function reverseSeq(n) {
  if(n > 0) {
    let arr = [];
    for(let i = 0; i < n; i++) {
      arr[i] = i + 1;
    }
    return arr.reverse();
  }
}
