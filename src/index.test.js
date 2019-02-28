const walker = require('./index')

// Basics
test('return 5 elements array (currentPage 1)', () => {
  const walks = walker(1, 11)
  expect(walks.length).toBe(5)
})
test('show first 5 pages (currentPage 1)', () => {
  const walks = walker(1, 11)
  const pages = [1,2,3,4,5]
  expect(walks).toEqual(pages)
})
test('show first 5 pages (currentPage 4)', () => {
  const walks = walker(3, 11)
  const pages = [1,2,3,4,5]
  expect(walks).toEqual(pages)
})
test('walk forward 1 page (currentPage 5)', () => {
  const walks = walker(5, 11)
  const pages = [2,3,4,5,6]
  expect(walks).toEqual(pages)
})
test('do not walk on last page (currentPage 11, totalPages 11)', () => {
  const walks = walker(11, 11)
  const pages = [7,8,9,10,11]
  expect(walks).toEqual(pages)
})

// Custom config
test('walk forward 2 pages (currentPage 4, threshold 2)', () => {
  const walks = walker(4, 11, { threshold: 2 })
  const pages = [2,3,4,5,6]
  expect(walks).toEqual(pages)
})
test('walk 2 pages backwards (currentPage 3, threshold 2)', () => {
  const walks = walker(3, 11, { threshold: 2 })
  const pages = [1,2,3,4,5]
  expect(walks).toEqual(pages)
})
test('show 7 pages (currentPage 1, totalPages 11, showPages: 7)', () => {
  const walks = walker(1, 11, { showPages: 7 })
  const pages = [1,2,3,4,5,6,7]
  expect(walks).toEqual(pages)
})
test('show last 7 pages (currentPage 1, totalPages 11, showPages: 7)', () => {
  const walks = walker(11, 11, { showPages: 7 })
  const pages = [5,6,7,8,9,10,11]
  expect(walks.length).toBe(7)
  expect(walks).toEqual(pages)
})
test('walk 3 pages with custom threshold and showPages (currentPage 5, totalPages 11, threshold: 3, showPages: 7)', () => {
  const walks = walker(5, 11, { threshold: 3, showPages: 7 })
  const pages = [2,3,4,5,6,7,8]
  expect(walks.length).toBe(7)
  expect(walks).toEqual(pages)
})


// Validations
test('return clean array if total pages is 0', () => {
  const walks = walker(1, 0)
  expect(walks.length).toBe(0)
})
test('throw error when current page is 0', () => {
  expect(() => { walker(0, 11) }).toThrow()
})
test('throw when currentPage > totalPages', () => {
  expect(() => { walker(12, 1) }).toThrow()
})
