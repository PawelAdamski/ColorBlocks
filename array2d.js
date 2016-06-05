

function array2d(d1){

	this.log = [];
	this.tab = [];

	this.shuffle = function (n) {
		for (i=0;i<n;i++ ){
			this.tab[i] = i;
		}
		shuffle(this.tab);
	}

	this.isLess = function (i,j) {
		this.log.push({left:i,right:j,operation:"isLess"});
		return this.tab[i]<this.tab[j];
	}


	this.swap = function (i,j) {
		this.log.push({left:i,right:j,operation:"swa"});
		tmp = this.tab[i];
		this.tab[i] = this.tab[j];
		this.tab[j] = tmp;
	}



	for (var i=0;i<d1;i++) {
 
		props = createProps(i,this.log,this.tab);

		Object.defineProperty(this,i,props);
	}
}

function createProps(n,log,tab) {
	return {
			  get: function() { return tab[n]},
			  set: function(newValue) { log.push({index:n,value:newValue,operation:"set"});tab[n]=newValue;},
	}
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

