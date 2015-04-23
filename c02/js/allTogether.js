var firstName = 'Molly';
var customSign = 'Montague House';
var perTilePrice = 5;

var totalTiles = customSign.length;
var subTotal = totalTiles * perTilePrice;
var shipping = subTotal * .10;
var grandTotal = subTotal + shipping;

var elName = document.getElementById('first_name');
elName.textContent = firstName;

var elCustomSign = document.getElementById('custom_sign');
elCustomSign.textContent = customSign;

var elTotalTiles = document.getElementById('total_tiles');
elTotalTiles.textContent = totalTiles;

var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;

var elGrandTotal = document.getElementById('grand_total');
elGrandTotal.textContent = grandTotal;
