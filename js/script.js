const emailFiled = document.getElementById('email');
const passwordFiled = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener("click", function(){
    if(emailFiled.value == "imboy8585@gmail.com" && passwordFiled.value == "1234"){
        window.location.href = "bank.html"
    }
    else{
        alert("recheck your email and password")
    }
})

