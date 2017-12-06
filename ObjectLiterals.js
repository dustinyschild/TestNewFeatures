//Testing wrapping in quotes allows instaniating a fuction in an object
//Saw this on pluralsight.com in the 'New ES6 Syntax' Course

var productView = {
  price: 5.99,
  quantity: 5,
  'calculatevalue1'() {
    return this.price * this.quantity;
  },
  calculatevalue2() {
    return this.price * this.quantity;
  }
};

console.log(productView.calculatevalue1());
console.log(productView.calculatevalue2());

//CONCLUSION: True But not necessary