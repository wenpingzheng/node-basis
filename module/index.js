function xz2(res) {
  res.write('hello xz2')
}

function xz3(res) {
  res.write('hello xz3')
}

module.exports = {
  xz2: xz2,
  xz3: xz3
}