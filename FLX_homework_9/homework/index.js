// TASK 1
function findTypes() {
  let typesArray = [];
  let i = 0;
  while(i < arguments.length) {
    typesArray[i] = typeof arguments[i];
    i++;
  }
  return typesArray;
}

findTypes(null, 5, 'hello')

// TASK 2
function executeforEach(arr, func) {
  let transformedArray = [];
  let i = 0;
  while(i < arr.length) {
    transformedArray[i] = func(arr[i]);
    i++;
  }
  return transformedArray;
}

executeforEach([1,2,3], function(el) {
  console.log(el)
});

// TASK 3
function mapArray(arr, func) {
  return executeforEach(arr, func);
}

mapArray([2,5,8], function(el) {
  return el + 3
});

// TASK 4
function filterArray(arr, func) {
  let transformedArray = executeforEach(arr, func);
  let i = 0;
  let filteredArray = [];
  while(i < transformedArray.length) {
    if(transformedArray[i] === true) {
      filteredArray.push(arr[i]);
    }
  i++;
  }
  return filteredArray;
}

filterArray([2,5,8], function(el) {
  return el > 3
});

// TASK 5
function getAmountOfAdultPeople(data) {
  let i = 0;
  let adultPeopleArray = [];
  while(i < data.length) {
    adultPeopleArray[i] = data[i].age;
    i++;
  }
  adultPeopleArray = filterArray(adultPeopleArray, function(el) {
    return el > 18
  }).length;

  return adultPeopleArray;
}

getAmountOfAdultPeople([
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]
);

// TASK 6
function getGreenAdultBananaLovers(data) {
  let colorArrey = [];
  let fruitArrey = [];
  let returnedArray = [];
  let i = 0;
  while(i < data.length) {
    colorArrey[i] = data[i].eyeColor
    fruitArrey[i] = data[i].favoriteFruit
    i++;
  }
  colorArrey = mapArray(colorArrey, function(el) {
    return el === 'green'
  });
  fruitArrey = mapArray(fruitArrey, function(el) {
    return el === 'banana'
  });
  i = 0;
  while(i < data.length) {
    if(colorArrey[i] === true && fruitArrey[i] === true) {
      returnedArray.push(data[i].name);
    }
    i++;
  }
  return returnedArray;
}

getGreenAdultBananaLovers([
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]
);

// TASK 7
function keys() {
  let keysArray = [];
  for(const propt in arguments[0]) {
    if (arguments[0].hasOwnProperty(propt)) {
      keysArray.push(propt)
    }
  }
  return keysArray;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

// TASK 8
function values() {
  let valuesArray = [];
  for(const propt in arguments[0]) {
    if (arguments[0].hasOwnProperty(propt)) {
      valuesArray.push(arguments[0][propt])
    }
  }
  return valuesArray;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});

// TASK 9
function showFormattedDate(date) {
  console.log(`Date: ${date.getDate()} of ${date.toString().slice(4, 7)}, ${date.getFullYear()}`);
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

// TASK 10
function isEvenYear(date) {
  return date.getFullYear() % 2 === 0;
}

isEvenYear(new Date('2019-01-27T01:10:00'));

// TASK 11
function isEvenMonth(date) {
  return date.getMonth() % 2 !== 0;
}

isEvenMonth(new Date('2019-02-27T01:10:00'));
