export const calculateSum = (n: number): number => {
  var sum = 0
	for (let i = 0 ; i <= n ; i++) {
        sum += i;
  }
	return sum;
};
	
// Exemplos de uso:
console.log(calculateSum(3));
console.log(calculateSum(10));
console.log(calculateSum(100));