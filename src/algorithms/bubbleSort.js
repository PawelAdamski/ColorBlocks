

function bubbleSort(array){
	const n = array.length();
	for (var i=0; i<n; i++) {
		for (var j=0; j<n-i; j++) {
			if (array.isGreater(j,j+1)) {
				array.swap(j,j+1);
			}
		}
	}
}


module.exports = bubbleSort;