

function player(log, visual, operation) {

	var logs = log.filter(function(e){return e.operation===operation;});
	var index = 0;
	var stopAnimation = false;
	var speed = 100;

	var rysuj = function() {
		visual.resetBackgroundColor();

        if (logs.length<=index || index<0 || stopAnimation ) {
        	stopAnimation = false;
            clearInterval(rysowanie);
            rysowanie = undefined;
            return;
        }
        var e = logs[index];
        if (e.operation === "swap") {
        	visual.swap(e.left,e.right);
    	} else if (e.operation ==="set") {
    		visual.set(e.index, e.value);
    	}
    	index += 1;
	}

	var rysowanie;

	this.play = function() {
		if (rysowanie === undefined) {
			rysuj();
			rysowanie = setInterval(rysuj,speed);
		}
	};


	this.stop = function() {
		stopAnimation = true;
	};

	this.setSpeed = function(s) {
	 	this.stop();
	 	speed = 500-(4*s);
	 	var playAgain = function() {
	 			if (rysowanie===undefined) {
	 				this.play();
	 				clearInterval(waiting);
	 			}
	 	};
	 	var waiting = setInterval(playAgain.bind(this),speed);
	};

	this.clean = function() {
		visual.clean();
		this.stop();
	}
}