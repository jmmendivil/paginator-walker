function walker (currentPage = 1, totalPages = 0, _config = {}) {
  if (totalPages === 0) return []
  if (currentPage === 0) throw new Error('currentPage should not be 0.')
  if (currentPage > totalPages) throw new Error('currentPage should not be bigger than totalPages.')

  // assign config default values
  // *no defaults on params for comments
  const config = Object.assign({
    threshold: 1, // threshold to show prev/next pages
    showPages: 5 // total pages to generate
  }, _config)

  let { threshold, showPages } = config

  let firstPage = (currentPage - showPages) + threshold + 1 // +1 because 0 index

  // check left threshold margin ( min 1 )
  if (firstPage < 1) firstPage = 1

  // check right threshold margin ( max totalPages )
  if ((firstPage + showPages) > totalPages) firstPage = totalPages - showPages + 1 // +1 because 0 index

  // generate array
  const pages = []
  do pages.push(firstPage++)
  while (pages.length < showPages)

  return pages
}
module.exports = walker
