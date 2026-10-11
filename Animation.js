const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "🙈";
    } else {
        password.type = "password";
        toggle.textContent = "👁";
    }

});

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let pass = password.value;

    if(username==="2500040104" && pass==="250017515")
        {
        alert("Login Successful");
    }
    else{
        alert("Invalid Username or Password");
    }

});
