const transpose =(matrix) => {
  return matrix.reduce((prev, next) => next.map((item, i) =>
    (prev[i] || []).concat(next[i])
  ), []);
}


console.log(transpose([[1,2],[3,4]]));
console.log(transpose([[[1,2,3],[3,4,5]],[[1,2,3],[3,4,5]]]));