module.exports = function zeros(expression) {
  function multiply(str) {
		let numbers = str.split('*');
		let output = BigInt(1);
		
		numbers.forEach(function(elem, i, array){
			let multNumber;
			let resNumber = BigInt(1);
			if(elem.match(/!/g).length === 2) {
				multNumber = elem.slice(0, -2);
				for(let i = multNumber; i > 0; i -= 2) {
					resNumber *= BigInt(i);
				}
			} else if(elem.match(/!/g).length === 1) {
				multNumber = elem.slice(0, -1);
				for(let i = multNumber; i > 0; i--) {
					resNumber *= BigInt(i);
				}
			};
			output *= resNumber;
		})
		
		return output;
	}

  let multString = multiply(expression).toString(10);
  let counter = 0;
  
  for(let i = multString.length; i > 0; i--) {
    multString = multString.slice(0, i);
    multString.slice(-1) === '0' ? counter++ : i = 0;
  }
  
  return counter;
	
}
