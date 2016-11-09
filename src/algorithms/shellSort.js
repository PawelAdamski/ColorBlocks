

function shellSort(array) {
	var gap = Math.floor(array.length()/2);
	while  (gap>1 ){
		gapSort(gap,array);
		gap = Math.floor(gap/2)
	}
	gapSort(1,array)
}


function gapSort(gap, array) {
	for (var i=gap ; i<array.length() ; i++) {
		temp = array[i];
		var j
		for (j=i; j>=gap && temp<array[j-gap] ; j-=gap) {
			array[j] = array[j-gap];
		}
		array[j] = temp;
	}
}


var hasModules = module != undefined
if (hasModules) {module.exports = shellSort;}