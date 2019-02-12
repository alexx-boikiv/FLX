function reverseNumber(num){
  let reverseNum = [];
  num = num.toString();
  let i = 0;
  while(i < num.length){
    if(num[0] === '-'){
      reverseNum[0] = '-';
      reverseNum[i] = num[num.length - i];
      i++;
    }else{
      reverseNum[i] = num[num.length - 1 - i];
      i++;
    }
  }
  reverseNum = parseInt(reverseNum.join(''));
  return reverseNum;
}

reverseNumber(123);
