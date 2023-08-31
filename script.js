// clock
function time() {
  const date = new Date()
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  document.querySelector('.time').innerHTML = `${h}:${m}:${s}`
  calendar(date)
  greetings(h)
}

setInterval(time, 1000)

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

function greetings(h) {
  const greeting = document.querySelector('.greeting')
  if (h <= 5) greeting.innerHTML = 'Good night'
  else if (h >= 6 && h < 12) greeting.innerHTML = 'Good morning'
  else if (h >= 12 && h < 18) greeting.innerHTML = 'Good afternoon'
  else 'Good evening'
}


/// name
