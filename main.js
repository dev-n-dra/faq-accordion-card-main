// const question = document.querySelectorAll('.question')
// console.log(question)
// question.forEach(element => {
//     element.addEventListener('click', function() {
//         let arr = (element.parentElement).classList

//         if (arr.value === 'active') {
//             (element.parentElement).classList.remove('active')
//         } else {
//             (element.parentElement).classList.add('active')

//         }

//     })
// });

let questionsList = document.getElementsByClassName("questions-list")[0].children
let questionEl

for (let i = 0; i < questionsList.length; i++) {
    questionsList[i].addEventListener('click', () => {
        showAnswer(questionsList[i])
    })

}

function showAnswer(el) {
    if (questionEl == el) {
        questionEl.classList.remove('active')
        questionEl = null
        return
    }
    if (questionEl) {
        questionEl.classList.remove('active')
    }
    questionEl = el
    console.log(questionEl)
    questionEl.classList.add('active')
}