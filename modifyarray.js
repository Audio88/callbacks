var myData = [1,2,3,4,5];

function modifyArray(arr, callback) {
	var result = "";
	for (i = 0 ; i<arr.length ; i++){
		result += callback(arr, i) + " ";
	}
	return result
}

function hello(arr, i){
	return "Hello " + arr[i]; 
}

function addzero(arr, i){
	return arr[i] + "0";
}

modifyArray(myData, addzero);


