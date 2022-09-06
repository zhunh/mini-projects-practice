const range = document.getElementById('range')

range.addEventListener('input', e => {
  // console.log(e.target.value)
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  const label_width = getComputedStyle(label).getPropertyValue('width')

  // 获得slide 和label的宽度值
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  // const left = value / max * (num_width) - 12
  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

  label.style.left = `${left}px`
  label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}