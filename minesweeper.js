function MineSweeper(rows, columns) {
	var mineValue = '*';
	
	function calculateMinesCount(inputArray, i, j) {
		var count = 0;
		
		if(j > 0) {
			if(i > 0) { // keep track of [i-1][j-1]
				if(inputArray[i-1][j-1] == mineValue)
					count += 1;
			}
			if(inputArray[i][j-1] == mineValue) { // keep track of [i][j - 1]
				count += 1;
			}		
			if(i < (rows - 1)) { // keep track if [i+1][j-1]
				if(inputArray[i+1][j-1] == mineValue)
					count += 1;
			}
			
		}
		if(j < (columns - 1)) { 
			if(i > 0){ // keep track of [i-1][j+1]
				if(inputArray[i-1][j+1] == mineValue)
					count += 1;
			}
			if(inputArray[i][j+1] == mineValue) { // ket track of j + 1
				count += 1;
			}
			if(i < (rows - 1)) { // keep track if [i+1][j+1]
				if(inputArray[i+1][j+1] == mineValue)
					count += 1;
			}
		}
		if(i > 0) { // keep track of i - 1
			if(inputArray[i-1][j] == mineValue)
				count += 1;
		}
		if(i < (rows - 1)) { // keep track of i + 1
			if(inputArray[i+1][j] == mineValue)
				count += 1;
		}
			
		return count;
	}
	
	function createMinesArray(inputArray) {
		var array = []
		for(var i = 0; i < rows; i++){
			array[i] = [];
			for(var j = 0; j < columns; j++){
				array[i][j] = (inputArray[i][j] == mineValue) ? mineValue : calculateMinesCount(inputArray, i, j)  + '';
			}
		}
		return array;
	};
	
	return {
		process: function(input) {
			var inputArray = this.parseToArray(input);
			return createMinesArray(inputArray);
		},
		parseToArray: function (input) {		
			var array = [];
			var index = 0;
			for(var i = 0; i < rows; i++){
				array[i] = [];
				for(var j = 0; j < columns; j++){					
					array[i][j] = input.charAt(index);
					index += 1;
				}
			}
			return array;
		}
	};
}