

function VisualHistogram(svgSelector,width,height) {

	const defaultColor = 'blue';

	this.elements = [];
	this.snap = {};

	this.init = function (data) {


		this.snap = Snap(svgSelector);
		for (var i=0; i<data.length(); i++ ) {

			let canvasHeight = document.querySelector(svgSelector).clientHeight;
			let x = i*width+width;
			let y = canvasHeight-height*data[i];
			var r = this.snap.rect(x,y, width, height*data[i]);

			r.attr({
			    fill: defaultColor,
			    stroke: "black",
    			strokeWidth: 1, // CamelCase...
			});

			this.elements[i] = r;
		}
	};

	this.resetBackgroundColor = function() {
    	for (var i = 0; i < this.elements.length; i++) {
    		this.backgroundColor(i,defaultColor);
   		}
	};


	this.backgroundColor = function(index,color) {
		this.elements[index].attr({fill:color});
	};

	this.set = function(index,data) {
		let canvasHeight = document.querySelector(svgSelector).clientHeight;
		this.elements[index].attr({
			height:height*data,
			y: canvasHeight-height*data
		});
	};

	this.swap = function(left,right,callBack) {
		let x1 = this.elements[left].attr("x");
		let x2 = this.elements[right].attr("x");


		this.elements[left].attr({x: x2});
		this.elements[right].attr({x: x1});
		this.backgroundColor(left,'red');
		this.backgroundColor(right,'red');

		let tmp = this.elements[left];
		this.elements[left] = this.elements[right];
		this.elements[right] = tmp;
	};

}


function randomTabWithDuplicates(size, max) {
	var tab = [];
	for ( i=0;i<size;i++) {
		tab.push(parseInt(Math.random()*max)+1);
	}
	return tab;
}



function randomTab(size) {
	var tab = [];
	for (let i=0;i<size;i++) {
		tab[i] = i+1;
	}
	for (let i=0; i<10000; i++ ) {
		let a = parseInt(Math.random()*(size-1)+1);
		let b = parseInt(Math.random()*(size-1)+1);
		let tmp = tab[a];
		tab[a] = tab[b];
		tab[b] = tmp;
	}
	return tab;
}
