'use strict';

var should = require('should');
var bubbleSort = require('../src/algorithms/bubbleSort');
var array = require('../src/array');

describe('bubble sort', function () {

  it('sort empty array', function () {
    input = new array([]);
    bubbleSort(input);
  });

  it('sort one element array', function () {
    input = new array([5]);

    bubbleSort(input);

    input[0].should.equal(5);
  });

  it('sort random array', function () {
    input = new array([4, 2, 3]);
    input[0] = 4;
    input[1] = 2;
    input[2] = 3;
    input[3] = 1;
    input[4] = 0;

    bubbleSort(input);

    input[0].should.equal(0);
    input[1].should.equal(1);
    input[2].should.equal(2);
    input[3].should.equal(3);
    input[4].should.equal(4);
  });
});