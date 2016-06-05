

function array2d(d1){

	this.log = [];
	this.tab = [];

	for (var i=0;i<d1;i++) {
 
		props = createProps(i,this.log,this.tab);

		Object.defineProperty(this,i,props);
	}
}

function createProps(n,log,tab) {
	return {
			  get: function() { return tab[n]},
			  set: function(newValue) { log.push({index:n,value:newValue});tab[n]=newValue;},
	}
}


module.exports = array2d