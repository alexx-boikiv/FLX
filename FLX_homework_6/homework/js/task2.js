let amount = prompt('Enter the amount');
let discount = prompt('Enter the discount %');
let price;
let saved;

if(amount <= 0 || amount > 9999999 || isNaN(amount) || discount <= 0 || discount > 99 || isNaN(discount)) {
  alert('Invalid input data');

} else {
  price = Math.floor(((amount - (amount * discount / 100)) * 100)) / 100;
  saved = Math.floor((amount - price) * 100) / 100;
  alert(`Price without discount: ${amount}
Discount: ${discount}%
Price with discount: ${price}
Saved: ${saved}`);
}
