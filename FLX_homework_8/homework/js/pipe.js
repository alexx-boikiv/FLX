function addOne(x){
    return x + 1;
}

function pipe(x){
  let i = 1;
  while(i < arguments.length){
    x = addOne(x);
    i++;
  }
  return x;
}

pipe(1, addOne);
