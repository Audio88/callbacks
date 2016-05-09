var data = [1, 2, 3];

function map(arr, callback){
	var result = [];
	for (i = 0 ; i<arr.length ; i++){
		result.push(callback(arr, i));
	}
	return result
}

function add1(arr, i){
	return arr[i] + 1;
}

function multi2(arr, i) {
	return arr[i] * 2;
}

map(data, add1);
map(data, multi2);
