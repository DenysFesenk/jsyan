let start = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
	input = document.getElementsByClassName('expenses-item'), //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
	btn = document.getElementsByTagName('button'), //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
	optexp = document.querySelectorAll('.optionalexpenses-item'), //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	cib = document.querySelector('.choose-income'),
	box = document.querySelector('.checksavings'),
	sum = document.querySelector('.choose-sum'),
	percent = document.querySelector('.choose-percent'),
	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value');



console.log(start);
console.log(input);
console.log(btn[0]);
console.log(btn[1]);
console.log(btn[2]);
console.log(optexp);
console.log(cib);
console.log(box);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);