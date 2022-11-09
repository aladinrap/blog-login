form.addEventListener("submit", () => {
    console.log("newpost button clicked");
    const userid = document.getElementById("userid");
    const newpost = {
        userid: userid.value,
        title: title.value,
        content: content.value
    }
    fetch("/api/newpost", {
        method: "POST",
        body: JSON.stringify(newpost),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(async res => {
        console.log(res);
        data = await res.json();
        if(data.status == "error") {
            succes.style.display = "none"
            error.style.display= "block"
            error.innerText = data.message
        } else {
            error.style.display = "none"
            succes.style.display= "block"
            succes.innerText = data.message

            setTimeout(function(){
                location.href = "/profile"
            },1000); 
            }
        })
})