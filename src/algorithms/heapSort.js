

function heapSort(array) {
	var heapSize = array.length();
	buildHeap(array);
	for (var i=array.length()-1; i>0 ; i-- ) {
		array.swap(0,i);
		heapSize--;
		heapify(array,0, heapSize);
	}


}


function buildHeap(array) {
	var s = Math.floor(array.length()/2);
	for (var i=s;i>=0;i--) {
		heapify(array,i,array.length());
	}
}


function heapify(array, i, heapSize) {
	while (true) {
		var left = (i+1)*2-1;
		var right = left+1;
		var max = i;
		if (array[max]<array[left] && left<heapSize) {
			max = left;
		}
		if (array[max]<array[right] && right<heapSize) {
			max = right;
		}
		if (max!=i){
			array.swap(max,i);
			i = max;
		} else {
			return;
		}
	}
}

var hasModules = module != undefined
if (hasModules){module.exports = heapSort;}
