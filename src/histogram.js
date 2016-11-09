

function VisualHistogram(svgSelector,width,height) {

	var defaultColor = 'blue';

	this.elements = [];
	this.snap = {};

	this.init = function (data, name) {

		document.querySelector(svgSelector).classList.add('active');

		this.snap = Snap(svgSelector);

		line = this.snap.rect(0, 0, 450, 60);
		line.attr({
			    fill: "lightGrey",
		});
		text = this.snap.text(150, 40, name);
	    text.attr({
	          'font-size':25
	    });

	    this.header = this.snap.g(line,text);


		var canvasHeight = document.querySelector(svgSelector).clientHeight;
		for (var i=0; i<data.length; i++ ) {
			var x = i*width+width;
			var y = canvasHeight-height*data[i];
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
		var canvasHeight = document.querySelector(svgSelector).clientHeight;
		this.elements[index].attr({
			height:height*data,
			y: canvasHeight-height*data
		});
	};

	this.swap = function(left,right,callBack) {
		var x1 = this.elements[left].attr("x");
		var x2 = this.elements[right].attr("x");


		this.elements[left].attr({x: x2});
		this.elements[right].attr({x: x1});
		this.backgroundColor(left,'red');
		this.backgroundColor(right,'red');

		var tmp = this.elements[left];
		this.elements[left] = this.elements[right];
		this.elements[right] = tmp;
	};

	this.clean = function() {
	for (var i = 0; i < this.elements.length; i++) {
    		this.elements[i].remove();
   		}
   		this.header.remove();
   		if (this.summary) {
   			this.summary.remove();
   		}
	}

	this.finish = function(time) {
		var r = this.snap.rect(0,60, 450,450);

			r.attr({
			    fill: "lightGrey",
			     "fill-opacity": 0.9
			});

		text = this.snap.text(100, 250, "Time: "+time+"s");
	    text.attr({
	          'font-size': 50
	    });

	    this.summary = this.snap.g(r,text);

	}

}

