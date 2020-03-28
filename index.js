var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName
 var itemPrice
 var randomNumber = Math.floor(Math.random() * 100) + 1
 for (let i = 0; i < item.length; i++) {
  var itemsAddedToCart = Object.assign({itemName: item}, {itemPrice: randomNumber})
 }
 cart.push(itemsAddedToCart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    var items = cart[i]
    var itemPriceObject = Object.values(items)
    var itemPriceArray = []
    itemPriceArray.push(itemPriceArray)
    total += itemPriceArray[i]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
