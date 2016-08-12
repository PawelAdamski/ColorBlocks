

function VisualHistogram(svgSelector,width,height) {

	defaultColor = 'blue';

	this.elements = [];
	this.snap = {};

	this.init = function (data) {


		this.snap = Snap(svgSelector);
		for (var i=0; i<data.length(); i++ ) {

			canvasHeight = document.querySelector(svgSelector).clientHeight;
			x = i*width+width;
			y = canvasHeight-height*data[i];
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
		canvasHeight = document.querySelector(svgSelector).clientHeight;
		this.elements[index].attr({
			height:height*data,
			y: canvasHeight-height*data
		});
	};

	this.swap = function(left,right,callBack) {
		x1 = this.elements[left].attr("x");
		x2 = this.elements[right].attr("x");


		this.elements[left].attr({x: x2});
		this.elements[right].attr({x: x1});
		this.backgroundColor(left,'red');
		this.backgroundColor(right,'red');

		tmp = this.elements[left];
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
	for ( i=0;i<size;i++) {
		tab[i] = i+1;
	}
	for ( i=0; i<10000; i++ ) {
		a = parseInt(Math.random()*(size-1)+1);
		b = parseInt(Math.random()*(size-1)+1);
		tmp = tab[a];
		tab[a] = tab[b];
		tab[b] = tmp;
	}
	return tab;
}
