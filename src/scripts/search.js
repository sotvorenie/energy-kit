document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search')
    const searchContent = document.querySelector('.search__content')
    const openBtn = document.querySelector('.search__open')
    const closeBtn = document.querySelector('.search__close')

    const classes = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    function openSearch() {
        document.documentElement.classList.add(classes.isLock)
        search.classList.add(classes.isActive)
        searchContent.classList.add(classes.isActive)
    }

    function closeSearch() {
        searchContent.classList.remove(classes.isActive)
        search.classList.remove(classes.isActive)
        document.documentElement.classList.remove(classes.isLock)
    }

    openBtn.addEventListener('click', openSearch)

    search.addEventListener('click', (e) => {
        if (e.target === search) closeSearch()
    })

    closeBtn.addEventListener('click', closeSearch)
})