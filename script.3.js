/* Пример 3 */

var a = 1;
var b = 3;

if (a > 0 && b > 0) {
	console.log(a - b);
}else if (a < 0 && b < 0){
	console.log(a * b);
}else if (a < 0 && b >= 0 || a >= 0 && b < 0){
	console.log(a + b);
}