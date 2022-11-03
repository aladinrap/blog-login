form.addEventListener("submit", () => {
    const register = {
        email: email.value,
        password: password.value
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
    .then(data => {
        if(data.status == "error") {
            succes.style.display = "none"
            error.style.display= "block"
            error.innerText = data.message
        } else {
            error.style.display = "none"
            succes.style.display= "block"
            succes.innerText = data.message
            }
        })
})