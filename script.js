//  ПЕРВОЕ ЗАДАНИЕ
 
// const num   = +prompt("Введите число")
// const power = +prompt("Введите степень")
// let answer  = 1

// if (!isNaN(power) ? power : 2 && !isNaN(num) && num !== 0) {
//     for (let i = 0; i < power; i++) {
//         answer *= num
//     }
//     console.log(`Число: ${num} в степени ${power} = ${answer}`);
// } else {
//     console.log("404");
// }


// ВТОРОЕ ЗАДАНИЕ

// let num       = +prompt("Введите количество")
//     num       = !isNaN(num) ? num : 5
//     symbol    = prompt("Введите символ")
//     endSymbol = prompt("Введите последний символ")
//     space     = "*"

// for (let i = 0; i < num; i++) {
//     console.log(space + endSymbol);
//     space += symbol
// }






/* поговорим про функции, про обычные, про стрелочные, про способы их создания, а именно: function expression - выражение, function declaration - объявление, как передавать параметры и аргументы функции, 
есть ли разница между ними  */

// функции - это набор простых инструкций, которые мы группируем для какой либо цели

// пример с приготовлением пиццы

// 1. Выместить тесто.
// 2. Намазать соусом.
// 3. Посыпать сыром.
// 4. Добавить специи.
// 5. Выпекать в духовке.

// у нас получился набор инструкций, и договоримся что она называется makePizza
// название функции это makePizza 
// а тело функции это шаги которые мы описываем там

// и далее если нам снова нужно будет приготовить пиццу, мы вернемся к нашим инструкциям которые уже описали, говоря иначе вызовем функцию

// как создать функцию?
// есть два метода, первый это function declaration - объявление функции

function name() {
    // body
}

function calculateNumber() {
    let x = 5
    x = x + 10
    x = x / 2
    
    console.log(x);
}

calculateNumber() /* вызов функции */

// calculateNumber() 
// calculateNumber()  видим значение несколько раз


// усложним функцию и воспользуемся умением функций возвращать данные, напишем ключевое слово return

// function calculateNumber() {
//     let x = 5
//     x = x + 10
//     x = x / 2
    
//     return x;
//     // строки после return выполнены уже не будут
//     // return оборвет выполнение функции
// }

// const result = calculateNumber()
// console.log(result);


// сейчас мы использовали статичные значения а хорошо было бы если бы мы смогли использовать разные значения, и для этого есть параметры функции
// Вместо того, чтоб задавать значение переменной сразу, мы можем передвать его значение в функцию  в виде параметра 

// function calculateNumber(value) {
//     let x = value
//     x = x + 10
//     x = x / 2
    
//     return x;
//     // строки после return выполнены уже не будут
//     // return оборвет выполнение функции
// }

// const result = calculateNumber(100)
// console.log(result);

// Напишем близкий к реальному пример
// Будем находить площадь прямоугольника ((a + b) * 2)
function rectangleArea(aSide, bSide) /* ПАРАМЕТР */ {
    const area = (aSide + bSide) * 2 
    return area;
    
    // return (aSide + bSide) * 2  так тоже можно записать 
}

const rec1 = rectangleArea(10, 5) /* АРГУМЕНТ */
console.log(rec1);
/* РАЗНИЦА МЕЖДУ ПАРАМЕТРАМИ И АРГУМЕНТАМИ ФУНКЦИИ  */

// ПАРАМЕТР - ПЕРЕМЕННАЯ В СКОБКАХ ПРИ СОЗДАНИИ ФУНКЦИИ
// АРГУМЕНТ - ЗНАЧЕНИЕ КОТОРОЕ МЫ ПЕРЕДАЕМ ПРИ ВЫЗОВЕ ФУНКЦИИ
/* функция может принимать в себя сколько угодно параметров */

// function createHTMLElement() {
//     const element = document.createElement("div")
//     element.className = "1"
//     element.innerText = "Any text"
    
//     return element /* если мы не напишем return функция нам возвращает undefined */
// }

// console.log(createHTMLElement()); /* Несмотря на то, что это функция максимально приближена к реальному примеру она сейчас все ровно бесполезная, и давайте зададим ей динамики */

function createHTMLElement(tag, elemClass, value) {
    const element = document.createElement(tag)
    element.className = elemClass
    element.innerText = value
    
    return element;
}

const divElem = createHTMLElement("div", "main", "Done") /* Нам очень важен порядок записи параметров как мы их создаем так мы их и указываем */
console.log(divElem);
document.body.append(divElem) /* Для большей реальности */


// !!! ВАЖНО ПРОДУМЫВАТЬ ПОРЯДОК АРГУМЕНТОВ ФУНКЦИЙ, СНАЧАЛА УКАЗЫВАЮТСЯ ОСНОВНЫЕ ПАРАМЕТРЫ А ЗАТЕМ ТЕ БЕЗ КОТОРЫХ МОЖНО ОБОЙТИСЬ

function createHTMLElement(tag = "p", value="text", elemClass) {
    const element = document.createElement(tag)
    element.className = elemClass
    element.innerText = value
    
    return element;
}

// МОЖЕМ СОЗДАВАТЬ УСЛОВИЯ 

// function createHTMLElement(tag = "p", elemClass, value="text") {
//     const element = document.createElement(tag)
//     if (elemClass) {
//         element.className = elemClass
//     }
//     element.innerText = value
    
//     return element;
// }

// console.log(createHTMLElement("button", "отправить"));

// console.log(createHTMLElement());



// второй способ создания функции - function expression
// Создается как переменная 
// Разница заключается в том, что когда мы создаем переменную через function declaration мы можем вызвать ее даже до ее создания, а когда создаем через function expression - она ведет себя как переменная, 
// и мы не можем ее вызвать до ее создания 

const showMessage = function() {
    console.log("Hello world");
}

// стрелочные функции - безымянные, значит мы используем function expression т.е помещаем в переменную 

const logText = () => {
    console.log("Text");
}
// // const logText = () => console.log("Text"); простой синтаксис) далее когда мы познакомимся с массивами, и далее будем часто их использовать
logText()
// Стрелочная функция не создает свой собственный контекст, но сейчас это разбирать не стоит, так как это отдельная тема
// Math это работа с математикой (математическая функция)
// Math.random() - отдает случайное дробное число от 0 до 1 (1 никогда не выведится)

let num = Math.random()
console.log(num);


function random() {
    return Math.floor(Math.random() * 15 + 1);
}
console.log(random());
// Math.random() * (максимальное число - минимальное число) + минималое число
// Math.floor() округляет число до минимального целого числа например 86.6 округление будет 86 или -86.1 округление будет -87

function ran(min, max) {
    let num = Math.floor(Math.random() * (max + 1 - min) + min);
    return num;
}
console.log(ran(10, 100));



// Метод - это функция, которая принадлежит объекту и работает с его свойствами и методами. Функция - это независимый блок кода, который может быть вызван для выполнения определенных действий.
let obj = {
    name: "John",
    greet: function() {
      console.log("Привет, " + this.name + "!");
    }
  };
  
  obj.greet(); // Выведет "Привет, John!"

  
  function sayHello(name) {
    console.log("Привет, " + name + "!");
  }
  
  sayHello("Alice"); // Выведет "Привет, Alice!"
  

// чем метод отличается от функции


