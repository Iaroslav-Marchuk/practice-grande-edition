// 🔹 Завдання 1.
// Напиши функцію createPerson(name, age), яка приймає ім'я та вік людини й повертає об'єкт із цими властивостями. Додай метод introduce(), який виводить у консоль рядок:
// Привіт! Мене звати < name >, мені < age > років.

// function createPerson(name, age) {
//   const person = {
//     name,
//     age,

//     introduce() {
//       console.log(`Привіт! Мене звати ${this.name}, мені ${this.age} років.`);
//     },
//   };

//   return person;
// }

// const newPerson = createPerson("Wilson", 25);
// newPerson.introduce();

// 🔹 Завдання 2: Оновлення значень

// Напиши функцію updateCarInfo(car, newModel, newYear), яка приймає об'єкт автомобіля car, нову модель та рік випуску. Функція повинна оновити відповідні властивості об'єкта.

// Приклад:

// const car = { brand: "Toyota", model: "Corolla", year: 2010 };
// // updateCarInfo(car, "Camry", 2022);
// // console.log(car); // { brand: "Toyota", model: "Camry", year: 2022 }

// function updateCarInfo(car, newModel, newYear) {
//   car.model = newModel;
//   car.year = newYear;
// }

// updateCarInfo(car, "octavia", 2015);
// console.log(car);

// 🔹 Завдання 3: Перебирання об'єкта

// Напиши функцію countProperties(obj), яка приймає об'єкт і повертає кількість його властивостей.

// const user = {
//   name: "Іван",
//   age: 28,
//   city: "Львів",
//   profession: "Програміст",
// };

// function countProperties(obj) {
//   const totalObj = Object.keys(obj).length;
//   return totalObj;
// }

// console.log(countProperties(user));

// 🔹 Завдання 4: Робота з масивом об'єктів

// Є масив користувачів:

// const users = [
//   { name: "Олексій", age: 25 },
//   { name: "Марія", age: 30 },
//   { name: "Іван", age: 20 },
// ];

// // Напиши функцію getUserNames(users), яка повертає масив імен користувачів.

// function getUserNames(users) {
//   const namesList = [];
//   for (let user of users) {
//     namesList.push(user.name);
//   }
//   return namesList;
// }

// console.log(getUserNames(users));

// 🔹 Завдання 5: Використання методів об'єкта

// Створи обєкт calculator із методами:

// add(a, b) — повертає суму a і b

// subtract(a, b) — повертає різницю a і b

// multiply(a, b) — повертає добуток a і b

// divide(a, b) — повертає результат ділення a на b, якщо b ≠ 0, і повідомляє про помилку, якщо b = 0.

// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
//   divide(a, b) {
//     if (b != 0) {
//       return a / b;
//     } else {
//       console.log("error");
//     }
//   },
// };

// 🔹 Завдання 6: Використання spread і rest

// Напиши функцію mergeObjects(obj1, obj2, ...restObjs), яка приймає два або більше об'єктів і повертає новий об'єкт, що містить усі властивості з вхідних.

// function mergeObjects(obj1, obj2, ...restObjs) {
//   const newObj = { ...obj1, ...obj2, ...restObjs };

//   return newObj;
// }

// 🔹 Завдання 7: Доступ до властивостей у методах

// Створи об'єкт book із властивостями title, author, pages та методом describe(), який повертає рядок у форматі:
// "<title>" написана <author> і має <pages> сторінок.

// const book = {
//   title: "Майстер і Маргарита",
//   author: "Михайло Булгаков",
//   pages: 384,
//   describe() {
//     return `${this.title} написана ${this.author} і має ${this.pages} сторінок.`;
//   },
// };

// console.log(book.describe());

// 🔹 Задача 1:

// const student = {
//   name: "Іван",
//   age: 20,
//   course: "Frontend",
//   skills: ["HTML", "CSS", "JavaScript"],
// };

// // Додай нову властивість isGraduated зі значенням false.

// // Видали властивість course.

// // Перевір, чи є у студента навичка "React" (виведи відповідь у консоль).

// // Використовуючи деструктуризацію, дістань значення name та age у змінні.

// // Створи копію об'єкта student, але додай до масиву skills ще один елемент — "Git".

// student.isGraduated = false;
// delete student.course;
// console.log(student.skills.includes("React"));
// const { name, age } = student;
// const newStudent = { ...student, skills: [...student.skills, "Git"] };

// 🔹 Задача 2:

// Є об’єкт із інформацією про книгу:

// const book = {
//   title: "Володар Перснів",
//   author: "Джон Р. Р. Толкін",
//   year: 1954,
//   genres: ["Фентезі", "Пригоди"],
// };

// // Додай нову властивість rating зі значенням 9.5.

// // Зміни значення властивості year на 1955.

// // Видали властивість author.

// // Виведи в консоль перший жанр із масиву genres.

// // Створи копію об’єкта book та додай до неї новий жанр — "Класика".

// book.rating = 9.5;
// book.year = 1955;
// delete book.author;
// console.log(book.genres[0]);
// const newBook = { ...book, genres: [...book.genres, "Класика"] };

// 🔹 Задача 3:

// Є об'єкт із інформацією про користувача:

// const user = {
//   name: "Олег",
//   age: 25,
//   city: "Львів",
//   profession: "Вчитель",
// };

// // Отримай і виведи в консоль усі ключі цього обєкта (метод Object.keys).

// // Отримай і виведи всі значення цього обєкта (метод Object.values).

// // Отримай масив пар ключ-значення цього обєкта (метод Object.entries).

// // Створи копію обєкта user і додай до неї нову властивість hobby зі значенням "Футбол" (метод Object.assign).

// // Перевір, чи є в об'єкті властивість "city" (метод hasOwnProperty).

// console.log(Object.keys(user));
// console.log(Object.values(user));
// const array = Object.entries(user);
// const newUser = Object.assign({}, user, { hobby: "Футбол" });
// const newUser = { ...user, hobby: "Футбол" };
// user.hasOwnProperty("city");

function processNumber(num, callback) {
  const result = num * 2;
  callback(result);
}

processNumber(5, function (result) {
  console.log(`Результат подвоєння: ${result}`);
});
