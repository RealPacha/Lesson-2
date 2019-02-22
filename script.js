var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 // c = 2, потому что мы сначала к а прибавляем 1 и только потом приравниваем
d = b++; alert(d);           // 1 // d = 1, потому что мы сначала вывели результат и только потом прибавили единицу к b
c = (2+ ++a); alert(c);      // 5 // 2 + 3, потому что значение "а"" осталось из предыдущего примера равно двойке и сейчас мы прибавили к ней единицу, из-за чего она стала равно 3
d = (2+ b++); alert(d);      // 4 // 2 + 2, по аналогии с предыдущим примером, значение "b" осталось старым, после предыдущего использования этой переменной, однако мы сначала проводим операции, после чего увеличиваем значение на единицу
alert(a);                    // 3 // сначала а = 1, после первого примера стала равно 2, после 4 строчки, уже равна 3
alert(b);                    // 3 // b = 1 сначала, в 3 строчке она увеличилась на единицу и в строчке 5 так же была увеличина на единицу

/* Пример 2 */

var a = 2;
var x = 1 + (a *= 2);
// x будет равен 5, потому что сначала производим действие в скобках, а именно умножаем значение "а"" на 2 и сразу приравниваем это значение переменной "а", после чего прибавляем единицу

/* Пример 3 */

/*var a = 1;
var b = 3;

if (a > 0 && b > 0) {
	console.log(a - b);
}else if (a < 0 && b < 0){
	console.log(a * b);
}else if (a < 0 && b >= 0 || a >= 0 && b < 0){
	console.log(a + b);
}

///3.4///

//Не совсем понял задание, но, мой вариант, вроде бы, работает :)
var a = 5;
switch (a){
	case 0:
		console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 1:
		console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 2:
		console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 3:
		console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 4:
		console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 5:
		console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 6:
		console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 7:
		console.log(7, 8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 8:
		console.log(8, 9, 10, 11, 12, 13, 14, 15);
		break;
	case 9:
		console.log(9, 10, 11, 12, 13, 14, 15);
		break;
	case 10:
		console.log(10, 11, 12, 13, 14, 15);
		break;
	case 11:
		console.log(11, 12, 13, 14, 15);
		break;
	case 12:
		console.log(12, 13, 14, 15);
		break;
	case 13:
		console.log(13, 14, 15);
		break;
	case 14:
		console.log(14, 15);
		break;
	case 15:
		console.log(15);
		break;
	default:
		console.log('Выводим только число от 0 до 15');
		break;
}

//3.5//

function Sum (a, b){
	return (a + b);
}
	console.log(Sum(2,2)); // 4

function Raz (c, d){
	return (c - d);
}
	console.log(Raz(2,2)); // 0

function  Proizv(e, f){
	return (e * f);
}
	console.log(Proizv(5,2)); // 10

function  Del(g, h){
	return (g / h);
}
	console.log(Del(16,2)); // 8 

//3.6//

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

//3.7//

//Полчучается, что null и 0 равны между собой...

if (null < 0){
	console.log('null меньше 0');
}else if (null > 0){
	console.log('null больше 0');
}else if (null == 0){
	console.log('null и 0 равны');
}else{
	console.log('all right');
}

//3.8//

//К сожалению, не получилось реализовать задуманное :( 

var step;
var i = 0;
function power(val, pow){
	if (i == pow){

	}else{
		val = val * val;
		i++;
	}

}

console.log(power(12,2));*/
