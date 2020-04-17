var charNum = '>=8, <=128';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var uppeCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()';

function mix() { }
console.log(mix(10, [lowerCase, upperCase, number, symbol]));


var charNum = document.getElementById('charNum');
var lower = document.getElementById('lowerBtn');
var upper = document.getElementById('upperBtn');
var symbol = document.getElementById('symBtn');
var generate = document.getElementById('generate');
var password = document.getElementById('password');


