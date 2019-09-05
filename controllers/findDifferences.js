/*
	@This function is used to find all the numbers
	that occur only one time
*/

module.exports = function(set1, set2) {
	let listNumber = set1 + ',' + set2;

	let arrayNumber = listNumber.split(',');

	/* 
		@Using array.reduce() to find the occurrences of 
		each element in arrayNumber
	*/
	let occurrences = arrayNumber.reduce((accum, elem) => {
		if (!accum[elem]) {
			accum[elem] = 1;
		} else {
			accum[elem]++;
		}
		return accum;
	}, {});

	/* 
		@find all the elements that occur only one time
	*/
	let arrayDiff = [];
	for (let key in occurrences) {
		if (occurrences[key] === 1) {
			arrayDiff.push(key);
		}
	} 

	let diff = arrayDiff.join(',');
	return diff;
}