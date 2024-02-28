// //your JS code here. If required.
function highlightSquares(activeSquare){
	for(let i=1; i<=3; i++){
		if(i != activeSquare){
			document.getElementById(`square${i}`).style.backgroundColor = '#6F4E37';
		}
	}
}

function resetSquares(){
	for(let i=1; i<=3; i++){
			document.getElementById(`square${i}`).style.backgroundColor = '#E6E6FA';
	}
}