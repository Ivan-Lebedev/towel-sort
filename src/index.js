module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      matrix[i].reverse()
    }
  }
  arr = matrix.join(',').split(',')
  return arr.map(item => +item)
}