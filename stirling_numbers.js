function stirlingNumberFirstKind() {
    let n = document.getElementById('firstN').value;
    let k = document.getElementById('firstK').value;
    n = parseInt(n);
    k = parseInt(k);
    if ( n == NaN || k == NaN ) {
	alert("Error, n or k is not a number!");
	return;
    }
    alert(n);
    alert(k);

}



function stirlingNumberSecondKind() {
    let n = document.getElementById('secondN').value;
    let k = document.getElementById('secondK').value;
    n = parseInt(n);
    k = parseInt(k);
    if ( isNaN(n) || isNaN(k)) {
	alert("Error, n or k is not a number!");
	return;
    }

    let answerText = "S("+n+","+k+") = " + stirlingNumberSecondKindHelper(n,k).toString();
    document.getElementById('secondKindOutput').innerHTML = answerText;
}

var firstKindDP = [];
function stirlingNumberSecondKindHelper(n, k) {
    let cached = firstKindDP[n.toString()+","+k.toString()];
    if ( cached !=undefined ) {
	return cached;
    }

    if ( n === k ) {
	return 1;
    }

    if ( k > n ) {
	return 0;
    }

    if ( k === 0 ) {
	return 0;
    }

    if ( k === 1 ) {
	return 1;
    }

    if ( n === 0 ) {
	return 0;
    }

    let answer = stirlingNumberSecondKindHelper(n-1,k-1)  + k * stirlingNumberSecondKindHelper(n-1,k); 
    firstKindDP[n.toString()+","+k.toString()] = answer;
    return answer;
}
