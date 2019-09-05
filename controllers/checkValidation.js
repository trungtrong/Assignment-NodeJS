module.exports = function(data) {
	let error = {
		set1: false,
		set2: false
	};
	console.log(data);
	if (data.set1.startsWith(',') 
		|| data.set1.endsWith(',') 
		|| data.set1 === '') {
		error.set1 = true;
	}

	if (data.set2.startsWith(',') 
		|| data.set2.endsWith(',') 
		|| data.set2 === '') {
		error.set2 = true;
	}

	return error;
}