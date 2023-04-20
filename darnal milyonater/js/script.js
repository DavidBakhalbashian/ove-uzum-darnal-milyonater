
const play = document.querySelector(".play")
const mainGame = document.querySelector(".main > .game")
const main = document.querySelector(".main")
const dom_question = document.getElementById("questions-h2")
const answer1 = document.getElementById("first")
const answer2 = document.getElementById("two")
const answer3 = document.getElementById("thirth")
const answer4 = document.getElementById("forth")
const fifty_fifty = document.querySelector(".fifty_fifty")
const hall = document.querySelector(".hall")
const call = document.querySelector(".call")
let money = document.getElementById("money_1")
mainGame.addEventListener('click', () => {
    main.style.display = "none"
    play.style.display = ""
})

class Question {
    constructor(_question, _answer1, _answer2, _answer3, _answer4, _rigth_answer, _money) {
        this.question = _question
        this.answer1 = _answer1
        this.answer2 = _answer2
        this.answer3 = _answer3
        this.answer4 = _answer4
        this.money = _money
        this.rigth_answer = _rigth_answer
    }

}



class Milion {
    questions = [];
    question_index = 0



    add(_question, _answer1, _answer2, _answer3, _answer4, _rigth_answer, _money) {
        const milyonater = new Question(_question, _answer1, _answer2, _answer3, _answer4, _rigth_answer, _money)
        this.questions.push(milyonater);
    }

    askQuestion() {
        const currect_index = this.questions[this.question_index]
        dom_question.innerText = currect_index.question
        answer1.innerText = currect_index.answer1
        answer2.innerText = currect_index.answer2
        answer3.innerText = currect_index.answer3
        answer4.innerText = currect_index.answer4

    }
    check() {
        let arr = [answer1, answer2, answer3, answer4]
        arr.map((item) => {
            item.addEventListener('click', () => {

                const currect_index = this.questions[this.question_index]
                const rigth_answer = currect_index.rigth_answer
                const pox = currect_index.money

                item.style.background = "rgb(218, 218, 16)"
                if (item.innerText === rigth_answer) {
                    setTimeout(() => {
                        item.style.background = "green"
                        money.innerText = `${pox}`
                    }, 1000)
                    setTimeout(() => {
                        item.style.background = ""

                        this.question_index++
                        this.askQuestion()

                    }, 3000)
                } else {
                    setTimeout(() => {
                        item.style.background = "red"
                        location.reload()
                    }, 1000)
                }
            })
        })

        call.addEventListener('click', () => {
            this.call()
        })
        money.addEventListener('click', () => {
            this.money()
        })

    }

    fifty() {

        fifty_fifty.addEventListener('click', () => {


            const currect_index = this.questions[this.question_index]
            const rigth__answer = currect_index.rigth_answer
            answer1.innerText = currect_index.answer1
            answer2.innerText = currect_index.answer2
            answer3.innerText = currect_index.answer3
            answer4.innerText = currect_index.answer4
            let answerss = [answer1, answer2, answer3, answer4]

            let wrong = []


            answerss.map((item) => {
                if (item.innerText !== rigth__answer) {
                    wrong.push(item)

                    wrong.map((itemm) => {
                        if (itemm === wrong[0] || itemm === wrong[1]) {
                            itemm.style.display = "none"
                            setTimeout(() => {
                                itemm.style.display = ""
                            }, 5000)
                        }

                    })
                    fifty_fifty.style.display = "none"

                }

            })

        })




    }
    hall() {
        hall.addEventListener('click', () => {
            const currect_index = this.questions[this.question_index]
            const rigth_answer = currect_index.rigth_answer
            const ansswer1 = currect_index.answer1
            const ansswer2 = currect_index.answer2
            const ansswer3 = currect_index.answer3
            const ansswer4 = currect_index.answer4
            let anserss = [ansswer1, ansswer2, ansswer3, ansswer4]
            const wrong = []
            anserss.map((item) => {
                if (item !== rigth_answer) {
                    wrong.push(item)
                }

            })
            alert(`${rigth_answer}-70%
${wrong[0]}-10%
${wrong[1]}-10%
${wrong[2]}-10% `)
            hall.style.display = "none"
        })

    }
    call() {
        const curect__index = this.questions[this.question_index]
        const rigth_answer = curect__index.rigth_answer

        alert(`Բարեվ ընկերս կարող ես պատասխանել այս հարցին  ${curect__index.question} `)
        alert('Մ-մ-մ-մ-մ կարծում եմ ...')
        setTimeout(() => {
            alert(rigth_answer)
            call.style.display = "none"
        }, 2000)

    }
    money() {
        const curect__index = this.questions[this.question_index]
        const moneyy = curect__index.money

        alert(`duq vercriq der gumarr ${moneyy}`)
        location.reload()
    }

    startGame() {

        this.askQuestion()
        this.check()
        this.fifty()
        this.hall()
    }

}

const milyon = new Milion();

milyon.add("Ո՞ր կրոնական փիլիսոփայության ուղղություններից է Դզեն ուսմունքը.", "Բուդիզմ", "Հինդուիզմ", "Դաոսիզմ", "Հուդաիզմ", "Բուդիզմ", "100$"),
    milyon.add("1932թ. ո՞ր քաղաքում է առաջին անգամ անցկացվել առաջին միջազգային կինոփառատոնը.", "Մոսկվա", "Վենետիկ", "Կանն", "Բեռլին", "Վենետիկ", "200$"),
    milyon.add("Ո՞վ է առաջինը Նոբելյան մրցանակ ստացել գրականության ասպարեզում.", "Վիպասան", "Էսսեիստ", "Պոետ", "Դրամատուրգ", "Պոետ", "300$"),
    milyon.add("Ռուսաստանի քարտեզի վրա ինչպիսի՞ անվանումով գետ գոյություն չունի.", "Մատ (Палец)", "Մեջք (Спина)", "Պարանոց (Шея)", "Բերան (Уста)", "Մեջք (Спина)", "500$"),
    milyon.add("Քանի՞ ծով է ողողում Բալկանյան թերակղզին", "4", "3", "8", "6", "6", "1000$"),
    milyon.add("Հին Հունաստանի բնակչուհին Օլիմպիական խաղերի ո՞ր կարգում կարող էր հաղթել.", "Լող", "Ըմբշամարտ", "Կառքերի մրցավազք", "Վազք", "Կառքերի մրցավազք", "2000$"),
    milyon.add("Բացի թվային ինդեքսից, ինչպիսի՞ անվանում ունի Android օպերացիոն համակարգի յուրաքանչյուր տարբերակը.", "«Գարնանային»", "«Հնդկացիական»", "«Ծովային»", "«Քաղցր»", "«Քաղցր»", "4000$"),
    milyon.add("Ինչպե՞ս են կոչվում իշամեղուները, որոնք բույն չեն կառուցում և նեկտար չեն հավաքում.", "Կկու իշամեղուներ", "Մակաբույծ իշամեղուներ", "Ծույլ իշամեղուներ", "Բզզան իշամեղուներ", "Կկու իշամեղուներ", "8000$"),
    milyon.add("Ինչպե՞ս է կոչվում քամու արագությունը չափող օդերևութաբանական սարքը․", "Բարոմետր", "Պիկտոմետր", "Պիրոմետր", "Անեմոմետր", "Անեմոմետր", "16000$"),
    milyon.add("Նշված վայրերից որտե՞ղ է ամբողջ տարվա ընթացքում օրվա և գիշերվա տևողությունը հավասար․", "Հարավային բևեռ", "Հասարակած", "Հյուսիսային բևեռ", "Զրոյական միջօրեական", "Հասարակած", "32000$")
milyon.add("Նախքան ավտոմեքենաներ արտադրելը Ֆերուչո Լամբորգինիի գործարանը արտադրում էր․", "Գնացքներ", "Հեծանիվ", "Տրակտորներ", "Կարի մեքենաներ", "Տրակտորներ", "64000$")
milyon.add("Մարդու օրգանիզմի ո՞ր գեղձն է ադրենալին արտադրում․", "Մակերիկամ", "Էպիֆիզ", "Շագանակագեղձ", "Հիպոֆիզ", "Մակերիկամ", "125000$")
milyon.add("Եվրոպայի ո՞ր պետությունն է Մեծ Դքսություն", "Լիխտենշտեյն ", "Անդորրա", "Մոնակո", "Լյուքսեմբուրգ", "Լյուքսեմբուրգ", "250000$")
milyon.add("Ո՞ր օվկիանոսում է գտնվում աշխարհի ամենախոր վայրը՝ Մարիանյան իջվածքը.", "Հյուսիսային Սառուցյալ", "Ատլանտյան", "Խաղաղ", "Հնդկական", "Խաղաղ", "500000$")
milyon.add("Օլիմպիական դրոշի ո՞ր գույնի օղակն է ներկայացնում Եվրոպան.", "Կարմիր", "Կապույտ", "Դեղին", "Կանաչ", "Կապույտ", "1000000$")
milyon.startGame();