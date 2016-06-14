
function sieve(n) {
	var a = new array2d(n);
	for (var i=2;i<=n;i++) {
		if (a[i]) {
			continue;
		}
		for (var j=i*2;j<n;j+=i) {
			a[j] = true;
		}
	}

	return array;
}
