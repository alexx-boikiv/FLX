let a = prompt('Enter a');
let b = prompt('Enter b');
let c = prompt('Enter c');
let discriminant;
let x1;
let x2;

if(a === 0 || isNaN(a) || b === 0 || isNaN(b) || c === 0 || isNaN(c)){
  alert('Invalid input data');

} else {
  discriminant = Math.pow(b, 2) - (4 * a * c);
  if(discriminant > 0){
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert(`x1 = ${x1} and x2 = ${x2}`);

  } else if(discriminant === 0){
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    alert(`x = ${x1}`);

  } else {
    alert('no solution');
  }
}
