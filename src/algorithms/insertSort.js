

function insertSort(array){
	var n = array.length();
	for (var i=0; i<n; i++) {
		for (var j=i; j>0 && array.isGreater(j-1,j); j--) {
				array.swap(j,j-1);
		}
	}
}




module.exports = insertSort;