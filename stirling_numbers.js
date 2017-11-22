function stirlingNumberFirstKind() {
    let n = document.getElementById('firstN').value;
    let k = document.getElementById('firstK').value;
    n = parseInt(n);
    k = parseInt(k);
    if ( n == NaN || k == NaN ) {
	alert("Error, n or k is not a number!");
	return;
    }

    let cnk = stirlingNumberFirstKindHelper(n,k);
    let snk = Math.pow(-1,(n-k))*cnk;
    let answerText = "s("+n+","+k+") = " + snk.toString() + " and c("+n+","+k+") = " + cnk.toString();
    document.getElementById('firstKindOutput').innerHTML = answerText;

}

var firstKindDP = [];
function stirlingNumberFirstKindHelper(n, k) {
    let cached = firstKindDP[n.toString()+","+k.toString()];
    if ( cached !=undefined ) {
	return cached;
    }

    if ( n === k ) {
	return 1;
    }

    if ( n < k ) {
	return 0;
    }

    if ( k === 0 && n !== 0 ) {
	return 0;
    }

    let answer = stirlingNumberFirstKindHelper(n-1,k-1)  + (n-1) * stirlingNumberFirstKindHelper(n-1,k); 
    firstKindDP[n.toString()+","+k.toString()] = answer;
    return answer;
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

var secondKindDP = [];
function stirlingNumberSecondKindHelper(n, k) {
    let cached = secondKindDP[n.toString()+","+k.toString()];
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
    secondKindDP[n.toString()+","+k.toString()] = answer;
    return answer;
}
