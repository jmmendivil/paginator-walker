# Paginator walker

Simple pages-numbers array generator.

---

Generates what pages numbers you should show, based on current page position and total pages, with custom threshold and number of pages to show.

With the default config params, from _page 1_ to _page 4_ generates `[1, 2, 3, 4, 5]`, for _page 5_ it will walk and show `[2, 3, 4, 5, 6]`; if custom threshold config is in use, _page 4_ will start the walk `[2, 3, 4, 5, 6]` _(threshold with value of 2)_.

## Usage

```
const walker = require('pages-walker')
const currentPage = 1 // dynamic value from user
const totalPages = 10 // total pages from pagination
const pages = walker(currentPage, totalPages)

// pages -> [1,2,3,4,5] - 5 pages by default
```

## Params

- *currentPage:1*: Current page to calculate prev/next pages.
- *totalPages:5*: Total pages from your pagination results.
- *Configuration:{ threshold: 1, showPages: 5 }*: Configuration object for threshold and pages to generate.
