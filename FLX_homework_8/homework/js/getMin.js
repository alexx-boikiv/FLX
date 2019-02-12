function getMin(){
  let min = arguments[0];
  let i = 0;
  while(i < arguments.length){
    if(arguments[i] < min){
      min = arguments[i];
    }
    i++;
  }
  return min;
}

getMin(3, 0, -3);
