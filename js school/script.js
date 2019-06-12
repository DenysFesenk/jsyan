
let start = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
	budgetValue = document.getElementsByClassName('budget-value')[0],
	daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'), //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2], //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'), //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	incomeItem = document.querySelector('.choose-income'), //статьи возможного дохода
	checkSavings = document.querySelector('#savings'),//чекбокс
	sumValue = document.querySelector('.choose-sum'),//сумма
	percentValue = document.querySelector('.choose-percent'),//процент
	yearValue = document.querySelector('.year-value'), //год
	monthValue = document.querySelector('.month-value'), //месяц
	dayValue = document.querySelector('.day-value'); //день


let money, time;

start.addEventListener('click', function(){ 
	time = prompt('Введите дату в формате YYYY-MM-DD', ''),
	money = +prompt('Ваш бюджет на месяц?', '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	};
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
			let a = expensesItem[i].value,
				b = expensesItem[++i].value;

			if  ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
				sum += +b;
			} else {
				i = i - 1;
			}
	};
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
	for (let i = 0; i < optionalexpensesItem.length; i++) {
			let opt = optionalexpensesItem[i].value;
			appData.optionalExpenses[i] = opt;
			optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
		};
});

countBtn.addEventListener('click', function() {

	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'минимальный уровень достатка !';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка !';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка !';
		} else {
			levelValue.textContent = 'Произошла ошибка !';
		};	
	} else {
		daybudgetValue.textContent = 'Произошла ошибка !';
	};
});

incomeItem.addEventListener('input', function() {
	let item = incomeItem.value;
	appData.income = item.split(', ');
	incomeValue.textContent = appData.income;
})

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
})

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			persent = +percentValue.value;

		appData.monthIncome = sum/100/12*persent;	
		appData.yearIncome = sum/100*persent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
})

percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			persent = +percentValue.value;

		appData.monthIncome = sum/100/12*persent;	
		appData.yearIncome = sum/100*persent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
})

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};
