const d = document

d.addEventListener('click', e => {
    if(e.target.matches(".panel-btn") || e.target.matches(`.panel-btn *`)){
        d.querySelector(".panel-btn").classList.toggle("is-active")
        d.querySelector(".navigation").classList.toggle("is-active")
    }

    if(e.target.matches(".navigation a")){
        d.querySelector(".panel-btn").classList.remove("is-active")
        d.querySelector(".navigation").classList.remove("is-active")
    }
})