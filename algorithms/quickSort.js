function quickSort(a,start,end) {

    if (end<=start) return;

    pivot  = start;
    j = start;

    for (var i = start+1; i <= end; i++) {
        if (a.isLess(i,pivot)) {
        	j++;
        	a.swap(j,i);
        }

    }
    a.swap(pivot,j);
    quickSort(a,start,j-1);
    quickSort(a,j+1,end);


}
