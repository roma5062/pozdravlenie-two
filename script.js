let poems = [
    {
        poemText:
        <p>
                                    С Новым годом! Желаю в новом году чтобы сбылось все то, что Вы пожелали. 
                        Все цели были достигнуты, а планы перевыполнены.
                        Всё плохое и неприятное осталось в уходящем году. 
                        Желаю в новом году ощутить новые эмоции, узнать и увидеть много 
                        нового, встретить новых людей, чтобы Новый год принёс в каждый дом много улыбок, 
                        много смеха, исполнения всех желаний, материального достатка и стабильности везде и во всём!
        </p>
    },
    {
        poemText:
        <p>
                    Этот праздник любит каждый,
Этот праздник каждый ждет,
Для детей он самый важный,
А зовется — Новый год!
Будет елка наша яркой,
В разноцветной мишуре,
Принесет Мороз подарки
И подарит детворе!

        </p>



    }
]

let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('#btn')
let poem = document.querySelector('.poem')

btn.addEventListener('click',() => {
  let randomIndex
  randomIndex = Math.floor((Math.random() * poems.length))
  console.log(randomIndex)
    poem.innerHTML = ''
    poem.innerHTML = poems[0].poemText
})