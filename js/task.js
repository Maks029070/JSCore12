function show(data) {
	console.log(data);
}

function task1() {
	function Person() {
		this.person1 = {name: "Maxim", age: 19};
		this.person2 = {name: "Vasyl", age: 22};
		this.person3 = {name: "John", age: 33};
		this.person4 = {name: "Oleg", age: 18};
		this.person5 = {name: "Vlad", age: 41};

		this.getPerson = function(id) {
			if(id == 1) {
				return this.person1;
			}

			else if(id == 2) {
				return this.person2;
			}

			else if(id == 3) {
				return this.person3;
			}

			else if(id == 4) {
				return this.person4;
			}

			else if(id == 5) {
				return this.person5;
			}
		}
	}

	function mapValues(map) {
		for (let value of map.values()) {
			show(value);
		}
	}

	let persons = new Person();

	let map = new Map([
		[1, persons.getPerson(1)],
		[2, persons.getPerson(2)],
		[3, persons.getPerson(3)],
		[4, persons.getPerson(4)],
		[5, persons.getPerson(5)]
	]);

	mapValues(map);
}

function task2() {
	function mathFn(a, b, sign) {

		let result;
		if (sign == '+' && typeof(a) == 'number' && typeof(b) == 'number') {
			result = a + b;
			//show(result);
 		}

 		else if (sign == '-' && typeof(a) == 'number' && typeof(b) == 'number') {
 			result = a - b;
			//(result);
		}

		else if (sign == '*' && typeof(a) == 'number' && typeof(b) == 'number') {
			result = a*b;
			//(result);
		}

 		else if (sign == '/' && typeof(a) == 'number' && typeof(b) == 'number' && b != 0 && a != 0) {
 			result = a/b;
			//show(result);
 		}

		show(result);
	}

	try {
		let res1 = mathFn(b, 4, '+');
		show(res1);
	} catch (err) {
		show('Помилка!' + '/n' + err.name + ':' + err.message);
	}

	try {
		let res1 = mathFn(5, 4, '+');
		show(res1);
	} catch (err) {
		show('Помилка!' + '/n' + err.name + ':' + err.message);
	}

	try {
		let res1 = mathFn(10, 5, '/');
		show(res1);
	} catch (err) {
		show('Помилка!' + '/n' + err.name + ':' + err.message);
	}
}