const counter = document.querySelector(".counter")

counter.innerText = '0'

const updateCounter = () => {
  const target = +counter.getAttribute('data-target')
  const c = +counter.innerText

  const increment = target / 200
  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}`
    setTimeout(updateCounter, 100)
  } else {
    counter.innerText = target
  }
}

updateCounter()