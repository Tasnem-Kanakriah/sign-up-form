let button = document.querySelector(".button")
let buttonSuccess = document.querySelector(".button-success")
let email = document.querySelector("input")
let container = document.querySelector(".container")
let successDiv = document.querySelector(".success-div")
let successText = document.querySelector(".success-div p:last-of-type")
let error = document.querySelector("span h6:last-of-type")

button.onclick = () => {
    button.classList.toggle("active")
    if (email.value.match(/@company.com/) !== null) {
        successText.innerHTML = `A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscription`
        container.style.display = "none"
        successDiv.style.display = "block"
        button.classList.remove("active")
    }
    else {
        error.innerHTML = "Valid email required"
        email.classList.add("error")
        setTimeout(() => {
            email.classList.remove("error")
            error.innerHTML = ``
            email.value = ``
            button.classList.remove("active")
        }, 2000)
    }
}

buttonSuccess.onclick = () => {
    successDiv.style.display = "none"
    container.style.display = "grid"
    email.value = ``
}