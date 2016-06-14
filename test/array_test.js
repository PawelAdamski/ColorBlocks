
var assert = require('chai').assert;
var bubbleSort = require('../algorithms/bubbleSort');
var array = require('../tracers/array');

describe('array', function() {

  it('records "set" operation', function()  {
  	input = new array(3);
  	input.startRecording();
  	input[0] = 1;
  	input[1] = "1";
  	input[2] = true;
	input.finishRecording();

	assert.deepEqual(input.log[0],{index:0,value:1,operation:"set"});
	assert.deepEqual(input.log[1],{index:1,value:"1",operation:"set"});
	assert.deepEqual(input.log[2],{index:2,value:true,operation:"set"});
  });

  it('records "get" operation', function()  {
  	input = new array(3);
  	input[0] = 123;
  	input.startRecording();
  	v = input[0];
	input.finishRecording();

	assert.deepEqual(v,123);
	assert.deepEqual(input.log[0],{index:0, operation:"get"});
  });

  it('records "swap" operation', function()  {
  	input = new array(3);
  	input[0] = 4;
  	input[1] = 1;
  	input.startRecording();
  	input.swap(0,1);
	input.finishRecording();

	assert.equal(input[0],1);
	assert.equal(input[1],4);
	assert.deepEqual(input.log[0],{left:0,right:1,operation:"swap"});
  });

   it('records "isGreater" operation', function()  {
  	input = new array(3);
  	input[0] = 0;
  	input[1] = 1;
  	input[2] = 0;
  	input.startRecording();
  	v1 = input.isGreater(0,1);
  	v2 = input.isGreater(1,2);
	input.finishRecording();

	assert.deepEqual(v1,false);
	assert.deepEqual(v2,true);
	assert.deepEqual(input.log[0],{left:0,right:1,operation:"isGreater"});
  });

});
