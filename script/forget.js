const API_URL = "https://script.google.com/macros/s/AKfycbzW2HZasraDWvt8CAfLwKJkGMqfQSOnThP1JOsAlaorhy2a5Tyb0mkbsgzm3lJJBvk/exec";
(function () {
    emailjs.init("SzxlHRy5_sMUejOLM");
})();
function sendPassword() {
    const username = document.getElementById("fusername").value.trim();
    const email = document.getElementById("femail").value.trim();
    const msg = document.getElementById("msg");
    const loader = document.getElementById("loader");

    if (!username || !email) {
        msg.innerText = "All fields required";
        return;
    }
    loader.style.display = "block";
    msg.innerText = "";
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "forgot",
            username: username,
            email: email
        })
    })
    .then(res => res.json())
    .then(data => {
        loader.style.display = "none";
        if (data.status === "success") {
            const password = data.password;
            emailjs.send("service_rtu5a8u", "template_3ptohal", {
                to_email: email,
                username: username,
                password: password
            })
            .then(function () {
                msg.innerText = "Password sent to your email";
            })
            .catch(function () {
                msg.innerText = "Email sending failed";
            });

        } else {
            msg.innerText = data.message;
        }
    })
    .catch(() => {
        loader.style.display = "none";
        msg.innerText = "Server error";
    });
}