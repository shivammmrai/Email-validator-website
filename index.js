console.log("This is Email Code Editor")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "Priyanshu Singh",
    "email": "singhvishal.vs60@gmail.com",
    "score": 0.94,
    "state": "undeliverable",
    "domain": "VishalSingh.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}



submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "ema_live_Ah2R4edWMUZ2FBAnlhnQInzSbUdv1N5nS1HnRxq9"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})




