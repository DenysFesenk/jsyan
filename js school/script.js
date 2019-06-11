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
	optexp = document.querySelectorAll('.optionalexpenses-item'), //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
	incomeItem = document.querySelector('.choose-income'), //статьи возможного дохода
	checkSavings = document.querySelector('#savings'),//чекбокс
	sumValue = document.querySelector('.choose-sum'),//сумма
	percentValue = document.querySelector('.choose-percent'),//процент
	yearValue = document.querySelector('.year-value'), //год
	monthValue = document.querySelector('.month-value'), //месяц
	dayValue = document.querySelector('.day-value'); //день


let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	incone: [],
	timeData: time,
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется?','');

			if  ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				console.log('bad result');
				i--;
			}
		};
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay); 
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log ('минимальный уровень достатка !');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log ('Средний уровень достатка !');
		} else if (appData.moneyPerDay > 2000) {
			console.log ('Высокий уровень достатка !');
		} else {
			console.log ('Произошла ошибка !');
		};
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сума накоплений?',),
				persent = +prompt('Под какой процент?');

			appData.monthIncome = save/100/12*persent;
			alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i < 3; i++) {
			let opt = prompt('Статья необязательных расходов', '');
			appData.optionalExpenses[i] = opt;
		}
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?'))ж
		appData.income.sort();
	}
};
