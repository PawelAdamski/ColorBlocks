
var assert = require('chai').assert;
var bubbleSort = require('../algorithms/bubbleSort');
var array = require('../tracers/array');

describe('bubble sort', function() {

  it('sort empty array', function()  {
  	input = new array(0);
  	bubbleSort(input);
  });

  it('sort one element array', function()  {
  	input = new array(1);
  	input[0]=5;

  	bubbleSort(input);

  	assert.equal(input[0],5);
  });

  it('sort random array', function()  {
  	input = new array(5);
  	input[0]=4;
  	input[1]=2;
    input[2]=3;
    input[3]=1;
    input[4]=0;

  	bubbleSort(input);

  	assert.equal(input[0],0);
  	assert.equal(input[1],1);
  	assert.equal(input[2],2);
  	assert.equal(input[3],3);
  	assert.equal(input[4],4);

  });

});
