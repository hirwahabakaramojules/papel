
const loginBtn = document.getElementById("login-btn");
const email = document.getElementById("email")
const mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const noPass = document.getElementById("no-pass");
const password = document.getElementById("password");
const pwd = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/


const pwdCheck =()=>{
    if(password.value.match(pwd)){
        
        loginBtn.disabled = false;
        console.log("it matches");
    }else{
        console.log("weak password");
    }
}

password.addEventListener("keyup", pwdCheck);





const validateMail =()=>{
    console.log(email.value);
    if(email.value.match(mailFormat)){
        pwdCheck();
        console.log("emailmatches");
        // 
    }else{
        noPass.style.display = "block";
        console.log("no email");
    }

}
email.addEventListener("keyup",validateMail);
loginBtn.addEventListener("click", () => {     
window.location.href = "./user-profile.html";   
    
})