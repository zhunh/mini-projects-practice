const filter = document.querySelector("#filter")
const result = document.querySelector("#result")
const listItems = []

getData()

filter.addEventListener('input', e => {
  let input = e.target.value
  console.log(input)
  filterData(input)
})

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')
  const { results } = await res.json()

  result.innerHTML = ''

  results.forEach(user => {
    const li = document.createElement('li')
    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.fist}"/>
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    result.appendChild(li)
  })
}

function filterData(input) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(input.toLowerCase())) {
      item.classList.remove("hide")
    } else {
      item.classList.add('hide')
    }
  })
}