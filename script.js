window.addEventListener('load', function () {
  getName()
  setInterval(time, 1000)
})

// clock
function time() {
  const date = new Date()
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  document.querySelector('.time').innerHTML = `${h}:${m}:${s}`
  calendar(date)
  greetings()
}

//calendar

const calendarDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const calendarMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function calendar(date) {
  const day = calendarDay[date.getDay()]
  const month = calendarMonth[date.getMonth()]
  const numDay = date.getDay()
  document.querySelector('.date').innerHTML = `${day}, ${month} ${numDay}`
}

/// greetings

function greetings() {
  let h = new Date().getHours()
  const greeting = document.querySelector('.greeting')
  if (h <= 5) {
    greeting.innerHTML = 'Good night,'
    return 'night'
  } else if (h >= 6 && h < 12) {
    greeting.innerHTML = 'Good morning,'
    return 'morning'
  } else if (h >= 12 && h < 18) {
    greeting.innerHTML = 'Good afternoon,'
    return 'afternoon'
  } else if (h > 18) {
    greeting.innerHTML = 'Good evening,'
    return 'evening'
  }
}

/// name

function getName() {
  const input = document.querySelector('.greeting-container input')
  input.addEventListener('change', function () {
    localStorage.setItem('name', this.value)
  })
  input.value = localStorage.getItem('name')
}

//slider

function randomInt() {
  const int = Math.floor(Math.random() * (20 - 1 + 1) + 1)
  return int < 10 ? '0' + int : int
}

function randomPic() {
  document.querySelector(
    'body',
  ).style.background = `url(./assets/images/${greetings()}/${randomInt()}.jpg)`
}

randomPic()

function slider(direction) {
  const bg = document.querySelector('body').style.background
  let count = +bg.replace(/[^0-9]/gi, '')
  if (direction === 'right') {
    if (count < 20) {
      count++
    } else {
      count = 1
    }
  } else {
    if (count > 1) {
      count--
    } else {
      count = 20
    }
  }
  document.querySelector(
    'body',
  ).style.background = `url(./assets/images/${greetings()}/${
    count < 10 ? '0' + count : count
  }.jpg)`
}

document.querySelector('.slide-next').addEventListener('click', function () {
  slider('right')
  console.log(document.querySelector('body').style.background)
})

document.querySelector('.slide-prev').addEventListener('click', function () {
  slider('left')
  console.log(document.querySelector('body').style.background)
})
