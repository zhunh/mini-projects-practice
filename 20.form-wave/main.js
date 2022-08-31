const labels = document.querySelectorAll("label")
const inputs = document.querySelectorAll("input")

labels.forEach(label => {
  label.innerHTML = label.innerText
      .split('')
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
      .join('')
})