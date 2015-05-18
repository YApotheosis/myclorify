var colorify = require('../index');
var $ = require('jquery');

var assert = require('assert');

describe('colorify', function() {
  it('should set the background color properly', function() {
    colorify('#paper', 'red');
    assert($('#paper').css('background-color'), 'red');
  });
});