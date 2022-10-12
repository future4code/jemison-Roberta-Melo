const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


function valores(operacao, num1, num2){

switch(operacao){
	case "soma":
		console.log(num1 + num2)
		break;
	case "subt":
		console.log(num1 - num2)
		break;
	case "mult":
		console.log(num1 * num2)
		break;
	case "div":
		console.log(num1 / num2)
		break;
	default:
		console.log("Erro, digite a operação correta!")
		break;	
}
}
console.log(valores(operacao, num1, num2))


