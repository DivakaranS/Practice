const HighlyDivisibleTriangularNumber = () => {
            var number = 0,n=1;
            while(number === 0) {
            	var count = 0;
            	var numtrim = (n*(n+1))/2;
            	for(var i=1;i<=Math.sqrt(numtrim);i++){
            		if(numtrim%i === 0) {
            			count +=2;
            		}
            	}
            	if(count > 500){
            		number = numtrim;
            		break;
            	}
            	n+=1
            }
		return number;
}


console.log(HighlyDivisibleTriangularNumber());

