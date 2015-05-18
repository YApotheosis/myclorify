var $ = require('jquery');

function colorify(selector, color){
  $(selector).css('background-color', color);
}


//module.exports = colorify;

exports.init = function  (argument) {
	colorify('.cls','red')
}