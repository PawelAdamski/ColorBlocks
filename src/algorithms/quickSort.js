
function quickSort(a) {
    quickSortRec(a,0,a.length()-1);
}

function quickSortRec(a,start,end) {

    if (end<=start) return;

    var pivot  = start;
    var j = start;

    for (var i = start+1; i <= end; i++) {
        if (a.isLess(i,pivot)) {
        	j++;
        	a.swap(j,i);
        }

    }
    a.swap(pivot,j);
    quickSortRec(a,start,j-1);
    quickSortRec(a,j+1,end);


}


module.exports = quickSort;