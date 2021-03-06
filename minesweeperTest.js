(function(){
	YUI({ logInclude: { TestRunner: true } }).use('console', 'test', function(Y){
		var suite = new Y.Test.Suite("Minesweeper");
		
		suite.add(new Y.Test.Case({				
			testParseOneSingleLine: function() {					
				var input = '.*.';
				
				var game = new MineSweeper(1,3);
				var result = game.parseToArray(input);
				
				Y.Assert.areEqual(1, result.length, 'array has one row');
				Y.Assert.areEqual(3, result[0].length, 'array has three columns');
				
				Y.Assert.areEqual('.', result[0][0], 'set first element');
				Y.Assert.areEqual('*', result[0][1], 'set second element');
				Y.Assert.areEqual('.', result[0][2], 'set third element');
			},
			
			testParseMultipleLines: function() {					
				var input = '.*.'+
							'*..'+
							'..*';
							
				var game = new MineSweeper(3,3);
				var result = game.parseToArray(input);
				
				Y.Assert.areEqual(3, result.length, 'array has one row');
				Y.Assert.areEqual(3, result[0].length, 'array has three columns');
				
				Y.Assert.areEqual('.', result[0][0], 'set first element first column');
				Y.Assert.areEqual('*', result[0][1], 'set second element first column');
				Y.Assert.areEqual('.', result[0][2], 'set third element first columns');
				
				Y.Assert.areEqual('*', result[1][0], 'set first element second column');
				Y.Assert.areEqual('.', result[1][1], 'set second element second column');
				Y.Assert.areEqual('.', result[1][2], 'set third element second columns');
				
				Y.Assert.areEqual('.', result[2][0], 'set first element third column');
				Y.Assert.areEqual('.', result[2][1], 'set second element third column');
				Y.Assert.areEqual('*', result[2][2], 'set third element third columns');
			}
		}));
		
		suite.add(new Y.Test.Case({
			testBaseCase: function() {
				var input = '...';					
				
				var game = new MineSweeper(1,3);
				var result = game.process(input);

				Y.Assert.areEqual('0', result[0][0], 'first column is zero.');
				Y.Assert.areEqual('0', result[0][1], 'second column is zero.');
				Y.Assert.areEqual('0', result[0][2], 'third column is zero.');					
			},

			testPrintMinesInSingleLineGame: function() {
				var input = '*.*';
				
				var game = new MineSweeper(1,3);
				var result = game.process(input);

				Y.Assert.areEqual('*', result[0][0], 'first column is *.');
				Y.Assert.areEqual('2', result[0][1], 'second column is 2.');
				Y.Assert.areEqual('*', result[0][2], 'third column is *.');
			},
			
			testPrintMinesInThreeLinesGame: function() {
				var input = '.**'+
							'*.*'+
							'**.';
				
				var game = new MineSweeper(3,3);
				var result = game.process(input);

				Y.Assert.areEqual('2', result[0][0], 'first line and first column is 2.');
				Y.Assert.areEqual('*', result[0][1], 'first line and second column is *.');
				Y.Assert.areEqual('*', result[0][2], 'first line and third column is *.');
				
				Y.Assert.areEqual('*', result[1][0], 'second line and first column is *.');
				Y.Assert.areEqual('6', result[1][1], 'second line and second column is 6.');
				Y.Assert.areEqual('*', result[1][2], 'second line and third column is *.');
				
				Y.Assert.areEqual('*', result[2][0], 'thrid line and first column is *.');
				Y.Assert.areEqual('*', result[2][1], 'third line and second column is *.');
				Y.Assert.areEqual('2', result[2][2], 'thrid line and third column is 2.');
			},
			testPrintMinesInFourLinesGame: function() {
				var input = '*.*.'+
							'.**.'+
							'.*..'+
							'..**';
				
				var game = new MineSweeper(4,4);
				var result = game.process(input);

				Y.Assert.areEqual('*', result[0][0], 'first line and first column is *.');
				Y.Assert.areEqual('4', result[0][1], 'first line and second column is 4.');
				Y.Assert.areEqual('*', result[0][2], 'first line and third column is *.');
				Y.Assert.areEqual('2', result[0][3], 'first line and fourth column is 2.');
				
				Y.Assert.areEqual('3', result[1][0], 'second line and first column is 3.');
				Y.Assert.areEqual('*', result[1][1], 'second line and second column is *.');
				Y.Assert.areEqual('*', result[1][2], 'second line and third column is *.');
				Y.Assert.areEqual('2', result[1][3], 'second line and fourth column is 2.');
				
				Y.Assert.areEqual('2', result[2][0], 'thrid line and first column is 2.');
				Y.Assert.areEqual('*', result[2][1], 'third line and second column is *.');
				Y.Assert.areEqual('5', result[2][2], 'thrid line and third column is 4.');
				Y.Assert.areEqual('3', result[2][3], 'third line and fourth column is 3.');
				
				Y.Assert.areEqual('1', result[3][0], 'fourth line and first column is 1.');
				Y.Assert.areEqual('2', result[3][1], 'fourth line and second column is 2.');
				Y.Assert.areEqual('*', result[3][2], 'fourth line and third column is *.');
				Y.Assert.areEqual('*', result[3][3], 'fourth line and fourth column is *.');
			}
		}))	;

		Y.Test.Runner.add(suite);

		//initialize the console
		var yconsole = new Y.Console({
			newestOnTop: false
		});
		yconsole.render('#log');

		//run the tests
		Y.Test.Runner.run();
	});
}());