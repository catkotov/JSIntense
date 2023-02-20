// alert('Hello!')
// confirm('Вы учите JS?')
// prompt("Какой язык вы учите", "пока не вкурсе")

// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')
//
// const skillText = prompt("Какой язык вы учите", "пока не вкурсе")
// const isLoveValue = confirm('Вы любите изучаемый язык?')
// console.log(isLoveValue)
//
// skill.innerText = skillText
//
// isLove.innerText = isLoveValue == true ? 'Да' : 'Нет'
//
// string.innerText = "str"



// String
//
// const str1 = 'Greeting. I\'m OK'
// const str2 = "Text"
// const str3 = `Reverse ${str1}`
// console.log(str1, typeof str1)
// console.log(str2)
// console.log(str3)

// Numnber
//
// const num1 = 75 + 15
// const num2 = 79 * 9
// const num3 = 79 / 3
// console.log(num1)
// console.log(num2)
// console.log(num3)
// const numNaN = 8 * "a"
// console.log(numNaN)
// console.log(typeof (7 * "5"))

// BigInt
//
// const bigint = 12401231232334567432n
// console.log(bigint)
// console.log(9999999999999999999)

// boolean
//
// const tt = 'a' > 'AAA' // true
// console.log(tt)

// null
//
// let empty = null
// console.log(typeof empty) // object

// undefined
//
// let box
// console.log(box, typeof box)

// symbol
//
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq)
// console.log(uniq === uniq2)

// object
//
// const obj = {
//     name: "Sasha",
//     age: 59,
//     isHappy: true,
// }
//
// obj.fifo = "result"
// console.log(obj.name)
// console.log(obj.fifo)
// console.log(obj['name'])
//
// console.log(obj)

// array
//
// const array = ['Anna', 18, false]
// array.job = "Facebook"
// console.log(array)
// console.log(array[1]) // 18
// console.log(array[3]) // undefined


// console.log("example 1")
// console.log(5 == '5')
// console.log(5 === '5')
//
// console.log("example 2")
// console.log('abc' > String(15))
// console.log(15 < 'abc')
//
// console.log("example 3")
// console.log(Boolean(0))
// console.log(Boolean(null))
//
// console.log("example 4")
// const go = false
// if (go) {
//     console.log("show must go on.")
// } else {
//     console.log("the end.")
// }

// const counts = 100;
// let i = 0;
//
// while (i <= counts) {
//     console.log(i)
//     i += 1
// }

// const arr = []
// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)
// }
// console.log(arr)
//
// const newArr = []
// for (element of arr) {
//     const marker = element % 3
//     if (!marker) {
//         newArr.push(element)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Alex",
//     age: 59,
//     city: "SPb",
// }
// for (key in obj) {
//     console.log(key, " is " + obj[key])
// }

// Function
//
// declaration
// function scream() {
//     alert("AAAAAA!!!")
//     return "I'm OK"
// }

// console.log(scream(13, 10))
// function scream(a, b) {
//     return a * b
// }
// console.log(scream(23, 10))
//
// expression
// wowScream()
// const wowScream = function () {
//     alert("WOOOOW!")
// }
//wowScream()
//
// arrow
// const arrow = () => {
//     alert("arrow is in the sky")
// }
//arrow()

// ИГРА
// Нажав на кнопку начать игра запускается, гененируется задача,
// пользователь может ввести ответ, должна появисться кнопка проверить

// Нажав кнопку проверить мы сравниваем ввод пользователя с ответом,
// Вывести результат


const getRandomNumberInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumberInRange(0, 100)} ${symbol} ${getRandomNumberInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {

}

const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const  myEvent = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась"
        userAnswer.value = null
        // генерируем задачу и ответ
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        gameState.taskInProcess = true
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = "+ gameState.rightAnswer
        // вывести поздравление
        title.innerText = (isRight) ? "Вы выиграли!" : "Вы проиграли!"
        gameState.taskInProcess = false
        btnGame.innerText = "Начать заново"
    }
}

btnGame.addEventListener("click", myEvent)
userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        myEvent()
    } else if (e.key == "Escape") {
        userAnswer.blur()
    }
})

const choosedEl = document.querySelectorAll(".choose_block_container > div")
const counterEl = document.querySelector(".choose_block span")

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
//        console.log(e)
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}

//choosedEl[2].removeEventListener("click", eventFunc)