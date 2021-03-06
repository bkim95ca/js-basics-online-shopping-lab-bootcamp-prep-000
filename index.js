var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random()*100)+1;
cart.push({"itemName": item, "itemPrice": price });
return `${item} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    var cartItems = "In your cart, you have "
    for (var i = 0; i<cart.length; i++) {
      if(cart.length-2 === i) {
        cartItems+= `${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if (cart.length-1 === i){
         cartItems+= ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
         cartItems+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
    return cartItems
}
}

function total() {
  var total = 0
  for (var i = 0; i<cart.length; i++){
    total+=cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i<cart.length; i++) {
    if(item === cart[i].itemName) {
      return cart.splice(i,1)
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
 if (cardNumber === undefined) {
   return `Sorry, we don't have a credit card on file for you.`
 }
 else {
   var balance = total()
   cart = []
   return `Your total cost is $${balance}, which will be charged to the card ${cardNumber}.`
 }
}
