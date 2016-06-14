

function array(n){

	this.log = [];
	this.tab = [];
	this.firstState = [];
	this.record = false;

	this.addLog = function (e) {
		if (this.record) {
			this.log.push(e)
		}
	}

	this.startRecording = function () {
		this.record = true;
	}

	this.finishRecording = function () {
		this.record = false;
	}

	this.length = function () {
		return this.tab.length;
	}

	this.shuffle = function (n) {
		for (i=0;i<n;i++ ){
			this.tab[i] = i;
		}
		shuffle(this.tab);

		this.firstState = this.tab.slice(0);
	}

	this.isLess = function (i,j) {
		this.log.push({left:i,right:j,operation:"isLess"});
		return this.tab[i]<this.tab[j];
	}


	this.isGreater = function (i,j) {
		this.addLog({left:i,right:j,operation:"isGreater"});
		return this.tab[i]>this.tab[j];
	}

	this.swap = function (i,j) {
		this.addLog({left:i,right:j,operation:"swap"});
		tmp = this.tab[i];
		this.tab[i] = this.tab[j];
		this.tab[j] = tmp;
	}

	function createProps(n) {
		return {
			  get: function() {  this.addLog({index:n,operation:"et"});return this.tab[n]},
			  set: function(newValue) { this.addLog({index:n,value:newValue,operation:"set"});this.tab[n]=newValue;},
	}
}


	for (var i=0;i<n;i++) {
		props = createProps(i,this.log,this.tab);
		Object.defineProperty(this,i,props);
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

module.exports = array