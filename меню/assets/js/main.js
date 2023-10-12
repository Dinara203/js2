const category = document.querySelector('.category')
const menuList = document.querySelector('.menuList')

category.addEventListener('click', () => {
    menuList.classList.toggle('show')
})