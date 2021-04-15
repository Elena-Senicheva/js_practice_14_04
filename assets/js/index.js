/* 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) */

const sum = function (n) {
  if (isNaN(n) || n < 0) {
    return "Error";
  }
  let result = null;
  for (let i = 1; i < n + 1; i++) {
    result += i;
  }
  return result;
};

console.log(sum(9));

/* Реализовать с использованием классов. Для каждого поля создать get и set с проверкой типов.
2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте */

class Student {
  constructor(name, surname, isMale, contact, university) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contact = contact;
    this.university = university;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  getInfoAboutFacultet() {
    return (
      this.university.nameFacultet +
      " кафедра" +
      " " +
      this.university.nameCafedra
    );
  }
  infoFunction() {
    return `Студент, ${this.getFullName()} навчається на факультеті ${this.getInfoAboutFacultet()}`;
  }
}

class University {
  constructor(nameFacultet, nameCafedra) {
    this.nameFacultet = nameFacultet;
    this.nameCafedra = nameCafedra;
  }
}

const schevcenko = new University("Finance", "Economy");
const student1 = new Student("Ivan", "Petrov", false, "258731", schevcenko);
const student2 = new Student("Vasya", "Ivanov", true, "2563731", schevcenko);

console.log(student1.infoFunction());

/* 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов
*/

function getRandomArr() {
const numsArr =[];
for (let i = 0; i < 25; i++) {
  numsArr.push(Math.floor(Math.random()*100));
}
return numsArr;
}
console.log(getRandomArr());
