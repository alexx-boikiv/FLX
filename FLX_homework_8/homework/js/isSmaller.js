function isBigger(x1, x2){
  return x1 > x2;
}

function isSmaller(x1, x2){
  return isBigger(x2, x1);
}

isSmaller(5, -1);
