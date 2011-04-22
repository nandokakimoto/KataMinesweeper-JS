function MineSweeper(rows, columns) {
	var mineValue = '*';
	
	function hasMineUp(inputArray, i, j){
		if(i > 0) {
			if(inputArray[i-1][j] == mineValue)
				return true;
		}
		return false;
	}
	
	function hasMineDown(inputArray, i, j) {
		if(i < (rows - 1)) {
			if(inputArray[i+1][j] == mineValue)
				return true;
		}
		return false;
	}
	
	function hasMineLeft(inputArray, i, j) {
		if(j > 0) {
			if(inputArray[i][j-1] == mineValue) 
				return true;			
		}
		return false;
	}
	
	function hasMineRight(inputArray, i, j){
		if(j < (columns - 1)) {
			if(inputArray[i][j+1] == mineValue)
				return true;
		}
		return false;
	}
	
	function hasMineUpLeftCorner(inputArray, i, j) {
		if(j > 0 && i > 0) {
			if(inputArray[i-1][j-1] == mineValue)
				return true;
		}
		return false;
	}
	
	function hasMineUpRightCorner(inputArray, i, j) {
		if(j < (columns - 1) && i > 0) {
			if(inputArray[i-1][j+1] == mineValue)
				return true;
		}
		return false;
	}
	
	function hasMineDownLeftCorner(inputArray, i, j) {
		if(j > 0 && i < (rows - 1)) {
			if(inputArray[i+1][j-1] == mineValue)
				return true;
		}
		return false;
	}
	
	function hasMineDownRightCorner(inputArray, i, j) {
		if(j < (columns - 1) && i < (rows - 1)) {
			if(inputArray[i+1][j+1] == mineValue)
				return true;
		}
		return false;
	}
	
	function calculateMinesCount(inputArray, i, j) {
		var count = 0;
		
		if(hasMineUp(inputArray, i, j)) {
			count += 1;
		}
		if(hasMineDown(inputArray, i, j)) {
			count += 1;
		}
		if(hasMineLeft(inputArray, i, j)) {
			count += 1;
		}
		if(hasMineRight(inputArray, i, j)) {
			count += 1;
		}		
		if(hasMineUpLeftCorner(inputArray, i, j)) {
			count += 1;
		}
		if(hasMineUpRightCorner(inputArray, i, j)) {
			count += 1;
		}
		if(hasMineDownLeftCorner(inputArray, i, j)) {
			count += 1;
		}
		if(hasMineDownRightCorner(inputArray, i, j)) {
			count += 1;
		}
		return count;
	}
	
	function createMinesArray(inputArray) {
		var array = []
		for(var i = 0; i < rows; i++){
			array[i] = [];
			for(var j = 0; j < columns; j++){
				array[i][j] = (inputArray[i][j] == mineValue) 
											? mineValue 
											: calculateMinesCount(inputArray, i, j)  + '';
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