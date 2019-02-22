///3.6///

function mathOperation(arg1, arg2, operation){
operation = prompt ('Enter "Sum" for the sum, "Raz" for the difference, "Proizv" for multiplication or "Del" for dividing');
	
	switch(operation){
		case 'Sum':
			return arg1 + arg2;
			break;
		case 'Raz':
			return arg1 - arg2;
			break;
		case 'Proizv':
			return arg1 * arg2;
			break;
		case 'Del':
			return arg1 / arg2;
			break;
		default:
			console.log('Неправильно введена операция');
	}
} 
	console.log(mathOperation(10, 5, 'operation'));