const checkbox = document.querySelector("#chk");

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('class', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('class', 'light')
    }
})



let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    },5000)
}