

function Painter( n,log ) {

	this.n = n;
	this.log = log;
	this.tab = [];


	this.text = function(array) {
		for (var i=1;i<array.length;i++){
			this.tab[i].attr({text:array[i]});
		}
	}

	this.start = function () {

		var s = Snap("#svg");
		for (var i=1;i<=100; i++ ) {

			y = Math.floor((i-1)/10);
			x = (i-1)%10;

			var text = s.text((x+1)*50-25, (y+1)*50-25, i);
			text.attr({
			    'font-size':15
			});
			this.tab[i] = text;

		}



		rysuj = function () {
			if (this.log.length==0) {
				clearInterval(rysowanie);
				return;
			}
			log= this.log.shift()
			if (log.operation=="set") {
				t = log.index-1;
				y = Math.floor(t/10);
				x = t%10;
				r = s.rect(x*50, y*50, 50, 50);
				r.attr({
					fill: "red",
					"fill-opacity": 0.2,
				    stroke: "#000",
				    strokeWidth: 5
				});
			}
			if (log.operation=="swap") {
				tl = this.tab[log.left].attr("text");
				tr = this.tab[log.right].attr("text");

				this.tab[log.left].attr({text:tr});
				this.tab[log.right].attr({text:tl});


			}
		}.bind(this);


		rysowanie = setInterval(rysuj,40);

	}

}