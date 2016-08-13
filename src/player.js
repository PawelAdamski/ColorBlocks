

function play(logs,visual,operation) {

	logs = logs.filter(function(e){return e.operation===operation;});
    var rysuj = function (l) {
    	return function() {

    		visual.resetBackgroundColor();

	        if (l.length===0 ) {
	            clearInterval(rysowanie);
	            return;
	        }
	        let e = l.shift();
	        if (e.operation === "swap") {
	        	visual.swap(e.left,e.right);
	    	} else if (e.operation ==="set") {
	    		visual.set(e.index, e.value);
	    	}
    	};
    };

    var rysowanie = setInterval(rysuj(logs),20);
}