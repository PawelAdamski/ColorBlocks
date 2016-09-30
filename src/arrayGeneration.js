


arrayGeneration = {

	"Nearly sorted": function(size) {
		var tab = [];
		for (var i=0;i<size;i++) {
			tab[i] = i+1;
		}
		for (var i=0; i<size; i++ ) {
			var a = parseInt(Math.random()*(size-1)+1);
			var b = parseInt(Math.random()*size*0.1);
			b = Math.min(b,size-1);
			var tmp = tab[a];
			tab[a] = tab[b];
			tab[b] = tmp;
		}
		return tab;
	},


	Random: function(size) {
		var tab = [];
		for (var i=0;i<size;i++) {
			tab[i] = i+1;
		}
		for (var i=0; i<10000; i++ ) {
			var a = parseInt(Math.random()*(size-1)+1);
			var b = parseInt(Math.random()*(size-1)+1);
			var tmp = tab[a];
			tab[a] = tab[b];
			tab[b] = tmp;
		}
		return tab;
	},



	Reversed: function(size) {
		var tab = [];
		for (var i=0;i<size;i++) {
			tab[i] = size-i;
		}
		return tab;
	},


}