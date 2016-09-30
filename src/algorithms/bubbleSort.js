

function bubbleSort(array){
	var n = array.length();
	for (var i=0; i<n; i++) {
		for (var j=0; j<n-i; j++) {
			if (array.isGreater(j,j+1)) {
				array.swap(j,j+1);
			}
		}
	}
}

var hasModules = module != undefined
if (hasModules) {module.exports = bubbleSort;}