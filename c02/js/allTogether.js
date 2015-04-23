var greeting = 'Hello ';
var firstName = 'Molly';
var confirmationMessage = '. Please check your order:';
var customSign = 'Montague House';
var perTilePrice = 5;

var totalTiles = customSign.length;
var subTotal = totalTiles * perTilePrice;
var shipping = subTotal * .10;
var grandTotal = subTotal + shipping;

var message = greeting + firstName + confirmationMessage;

var elMessage = document.getElementById('greeting');
elMessage.textContent = message;

var elCustomSign = document.getElementById('custom_sign');
elCustomSign.textContent = customSign;

var elTotalTiles = document.getElementById('total_tiles');
elTotalTiles.textContent = totalTiles;

var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grand_total');
elGrandTotal.textContent = '$' + grandTotal;
