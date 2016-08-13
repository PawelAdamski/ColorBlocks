

function mergeSort(array, start, end){
	if (start>=end) {
		return;
	}
	var h = Math.floor((end-start)/2)+start;
	mergeSort(array,start,h);
	mergeSort(array,h+1,end);
	merge(array,start,h,end);
}

function merge(array,start,h,end) {
	var b = [];
	var i = start;
	var j = h+1;
	while (i<=h && j<=end) {
		if (array[i]<array[j]) {
			b.push(array[i]);
			i++;
		} else {
			b.push(array[j]);
			j++;
		}
	}
	for (;i<=h;i++) {
		b.push(array[i]);
	}
	for (;j<=end;j++) {
		b.push(array[j]);
	}
	for (i=0;i<b.length;i++) {
		array[start+i] = b[i];
	}
}