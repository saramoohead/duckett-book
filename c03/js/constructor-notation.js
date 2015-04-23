
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  }
};

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;

var decimalTest = 10.555
var toFixedOne = decimalTest.toFixed(1);
var toFixedZero = decimalTest.toFixed(0);
var toPrecision = decimalTest.toPrecision(2);
var randomNum = Math.floor((Math.random() * 100) + 1);

var decimalMsg = '<p> toFixedOne: ' + toFixedOne + '<br />';
decimalMsg += ' toFixedZero: ' + toFixedZero + '<br />';
decimalMsg += ' toPrecision: ' + toPrecision + '</p>';
decimalMsg += ' random: ' + randomNum + '</p>';

var elDecimals = document.getElementById('decimals');
elDecimals.innerHTML = decimalMsg;



