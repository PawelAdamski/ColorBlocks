"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (data) {

	this.log = [];
	this.tab = data.slice(0);
	this.firstState = [];
	this.record = false;

	this.addLog = function (e) {
		if (this.record) {
			this.log.push(e);
		}
	};

	this.startRecording = function () {
		this.record = true;
	};

	this.finishRecording = function () {
		this.record = false;
	};

	this.length = function () {
		return this.tab.length;
	};

	this.shuffle = function (n) {
		for (i = 0; i < this.tab.length; i++) {
			this.tab[i] = i;
		}
		shuffle(this.tab);

		this.firstState = this.tab.slice(0);
	};

	this.isLess = function (i, j) {
		this.log.push({ left: i, right: j, operation: "isLess" });
		return this.tab[i] < this.tab[j];
	};

	this.isGreater = function (i, j) {
		this.addLog({ left: i, right: j, operation: "isGreater" });
		return this.tab[i] > this.tab[j];
	};

	this.swap = function (i, j) {
		this.addLog({ left: i, right: j, operation: "swap" });
		var tmp = this.tab[i];
		this.tab[i] = this.tab[j];
		this.tab[j] = tmp;
	};

	this.createProps = function (n) {
		var _this = this;

		return {
			get: function get() {
				_this.addLog({ index: n, operation: "get" });return _this.tab[n];
			},
			set: function set(newValue) {
				_this.addLog({ index: n, value: newValue, operation: "set" });_this.tab[n] = newValue;
			}
		};
	};

	for (var i = 0; i < this.tab.length; i++) {
		var props = this.createProps(i, this.log, this.tab);
		Object.defineProperty(this, i, props);
	}
};

function shuffle(a) {
	var j, x, i;
	for (i = a.length; i; i -= 1) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
}

//module.exports = array
"use strict";

function VisualHistogram(svgSelector, width, height) {

	var defaultColor = 'blue';

	this.elements = [];
	this.snap = {};

	this.init = function (data) {

		this.snap = Snap(svgSelector);
		for (var i = 0; i < data.length(); i++) {

			var canvasHeight = document.querySelector(svgSelector).clientHeight;
			var x = i * width + width;
			var y = canvasHeight - height * data[i];
			var r = this.snap.rect(x, y, width, height * data[i]);

			r.attr({
				fill: defaultColor,
				stroke: "black",
				strokeWidth: 1 });

			this.elements[i] = r;
		}
	};

	this.resetBackgroundColor = function () {
		for (var i = 0; i < this.elements.length; i++) {
			this.backgroundColor(i, defaultColor);
		}
	};

	this.backgroundColor = function (index, color) {
		this.elements[index].attr({ fill: color });
	};

	this.set = function (index, data) {
		var canvasHeight = document.querySelector(svgSelector).clientHeight;
		this.elements[index].attr({
			height: height * data,
			y: canvasHeight - height * data
		});
	};

	this.swap = function (left, right, callBack) {
		var x1 = this.elements[left].attr("x");
		var x2 = this.elements[right].attr("x");

		this.elements[left].attr({ x: x2 });
		this.elements[right].attr({ x: x1 });
		this.backgroundColor(left, 'red');
		this.backgroundColor(right, 'red');

		var tmp = this.elements[left];
		this.elements[left] = this.elements[right];
		this.elements[right] = tmp;
	};
}

function randomTabWithDuplicates(size, max) {
	var tab = [];
	for (i = 0; i < size; i++) {
		tab.push(parseInt(Math.random() * max) + 1);
	}
	return tab;
}

function randomTab(size) {
	var tab = [];
	for (var _i = 0; _i < size; _i++) {
		tab[_i] = _i + 1;
	}
	for (var _i2 = 0; _i2 < 10000; _i2++) {
		var a = parseInt(Math.random() * (size - 1) + 1);
		var b = parseInt(Math.random() * (size - 1) + 1);
		var tmp = tab[a];
		tab[a] = tab[b];
		tab[b] = tmp;
	}
	return tab;
}
"use strict";
"use strict";

function play(logs, visual, operation) {

			logs = logs.filter(function (e) {
						return e.operation === operation;
			});
			var rysuj = function rysuj(l) {
						return function () {

									visual.resetBackgroundColor();

									if (l.length === 0) {
												clearInterval(rysowanie);
												return;
									}
									var e = l.shift();
									if (e.operation === "swap") {
												visual.swap(e.left, e.right);
									} else if (e.operation === "set") {
												visual.set(e.index, e.value);
									}
						};
			};

			var rysowanie = setInterval(rysuj(logs), 20);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bubbleSort;
function bubbleSort(array) {
	var n = array.length();
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n - i; j++) {
			if (array.isGreater(j, j + 1)) {
				array.swap(j, j + 1);
			}
		}
	}
}
"use strict";

function heapSort(array) {
	var heapSize = array.length();
	buildHeap(array);
	for (var i = array.length() - 1; i > 0; i--) {
		array.swap(0, i);
		heapSize--;
		heapify(array, 0, heapSize);
	}
}

function buildHeap(array) {
	var s = Math.floor(array.length() / 2);
	for (var i = s; i >= 0; i--) {
		heapify(array, i, array.length());
	}
}

function heapify(array, i, heapSize) {
	while (true) {
		var left = (i + 1) * 2 - 1;
		var right = left + 1;
		var max = i;
		if (array[max] < array[left] && left < heapSize) {
			max = left;
		}
		if (array[max] < array[right] && right < heapSize) {
			max = right;
		}
		if (max != i) {
			array.swap(max, i);
			i = max;
		} else {
			return;
		}
	}
}
"use strict";

function insertSort(array) {
	var n = array.length();
	for (var i = 0; i < n; i++) {
		for (var j = i; j > 0 && array.isGreater(j - 1, j); j--) {
			array.swap(j, j - 1);
		}
	}
}

//module.exports = sort
"use strict";

var _bubbleSort = require("src/algorithms/bubbleSort");

var _bubbleSort2 = _interopRequireDefault(_bubbleSort);

var _insertSort = require("src/algorithms/insertSort");

var _insertSort2 = _interopRequireDefault(_insertSort);

var _mergeSort = require("src/algorithms/mergeSort");

var _mergeSort2 = _interopRequireDefault(_mergeSort);

var _quickSort = require("src/algorithms/quickSort");

var _quickSort2 = _interopRequireDefault(_quickSort);

var _heapSort = require("src/algorithms/heapSort");

var _heapSort2 = _interopRequireDefault(_heapSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

algorithms["bubbleSort"] = _bubbleSort2.default;
algorithms["insertSort"] = _insertSort2.default;
algorithms["quickSort"] = _quickSort2.default;
algorithms["heapSort"] = _heapSort2.default;
algorithms["mergeSort"] = _mergeSort2.default;

function start(alg, canvas, tab, operation) {
  var input = new array(tab);
  var s = 6;
  var a = new VisualHistogram(canvas, s, s);
  a.init(input);
  input.startRecording();
  algorithms[alg](input);
  input.finishRecording();
  play(input.log, a, operation);
}
"use strict";

function mergeSort(array, start, end) {
	if (start >= end) {
		return;
	}
	var h = Math.floor((end - start) / 2) + start;
	mergeSort(array, start, h);
	mergeSort(array, h + 1, end);
	merge(array, start, h, end);
}

function merge(array, start, h, end) {
	var b = [];
	var i = start;
	var j = h + 1;
	while (i <= h && j <= end) {
		if (array[i] < array[j]) {
			b.push(array[i]);
			i++;
		} else {
			b.push(array[j]);
			j++;
		}
	}
	for (; i <= h; i++) {
		b.push(array[i]);
	}
	for (; j <= end; j++) {
		b.push(array[j]);
	}
	for (i = 0; i < b.length; i++) {
		array[start + i] = b[i];
	}
}
"use strict";

function quickSort(a, start, end) {

    if (end <= start) return;

    var pivot = start;
    var j = start;

    for (var i = start + 1; i <= end; i++) {
        if (a.isLess(i, pivot)) {
            j++;
            a.swap(j, i);
        }
    }
    a.swap(pivot, j);
    quickSort(a, start, j - 1);
    quickSort(a, j + 1, end);
}
"use strict";

function shellSort(array, steps) {}