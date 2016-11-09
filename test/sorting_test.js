
var assert = require('chai').assert;
var insertSort = require('../src/algorithms/insertSort');
var bubbleSort = require('../src/algorithms/bubbleSort');
var quickSort  = require('../src/algorithms/quickSort');
var mergeSort  = require('../src/algorithms/mergeSort');
var heapSort  = require('../src/algorithms/heapSort');
var shellSort  = require('../src/algorithms/shellSort');
var array = require('../src/array');


tests = function(algorithm) {
return function() {

  it('sort empty array', function()  {
    input = new array([0]);
    algorithm(input);
  });

  it('sort one element array', function()  {
    input = new array([5]);
    input[0]=5;

    algorithm(input);

    assert.equal(input[0],5);
  });

  it('sort random array', function()  {
    input = new array([4,1,3,2,0]);
    algorithm(input);

    assert.equal(input[0],0);
    assert.equal(input[1],1);
    assert.equal(input[2],2);
    assert.equal(input[3],3);
    assert.equal(input[4],4);

  });

  it('sort reverted array', function()  {
    input = new array([9,8,7,6,5,4,3,2,1,0]);
    algorithm(input);

    assert.equal(input[0],0);
    assert.equal(input[1],1);
    assert.equal(input[2],2);
    assert.equal(input[3],3);
    assert.equal(input[4],4);
    assert.equal(input[5],5);
    assert.equal(input[6],6);
    assert.equal(input[7],7);
    assert.equal(input[8],8);
    assert.equal(input[9],9);

  });
}
};


describe('Bubble sort', tests(bubbleSort));
describe('Insert sort', tests(insertSort));
describe('Quick sort', tests(quickSort));
describe('Merge sort', tests(mergeSort));
describe('Heap sort', tests(heapSort));
describe('Shell sort', tests(shellSort));
