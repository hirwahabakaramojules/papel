
// calling everything from the DOM
const openBtn = document.getElementById("open-model-btn");
const loginModel = document.getElementById("login-model");
const closeBtn = document.getElementById("close-btn");
const closeBtnSignup = document.getElementById("close-btn-signup");
const signupModel = document.getElementById("signup-model");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const select = document.getElementById("select");
const loginBtn = document.getElementById("login-btn");
const client = "client";
const teller = "teller";
const admin = "admin";
const email = document.getElementById("email");
const mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const noPass = document.getElementById("no-pass");
const password = document.getElementById("password");
const pwd = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const noPwd = document.getElementById("no-pwd");
const fullName = document.getElementById("full-name");
const noMail = document.getElementById("no-mail");
const signupEmail = document.getElementById("signup-email");
const signupSelect = document.getElementById("signup-select");
const signupPwd = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");
const sNoPass = document.getElementById("s-no-pass");
const sNoMail = document.getElementById("s-no-mail");
const sNoname = document.getElementById("s-no-name");
const sNoPwd = document.getElementById("s-no-pwd");

// functions

const openLoginModel = () => {
    loginModel.style.display = "block";
    signupModel.style.display = "none";
    console.log(1,2,3);
}
const openSignupModel = () => {
    signupModel.style.display = "block";
}
const closeModel = () => {
    loginModel.style.display = "none";
    signupModel.style.display = "none";
}
const pwdCheck =()=>{
    if(password.value.match(pwd)){
         destination();
        console.log("it matches");
    }else{
        noPwd.style.display = "block";
        console.log("weak password");
    }
}

const checkMail =() =>{
    if(email.value.match(mailFormat)){
        console.log("emailmatches");
        pwdCheck();
    }else{
        console.log('not matchin')
        noMail.style.display = "block";
    }
}



const destination = () =>{
    if(select.value === client){
       return loginBtn.href = "./pages/user-profile.html"
    } else if(select.value === teller){
        return loginBtn.href = "./pages/teller-dashboard.html"
    }
    else if(select.value === admin){
        return loginBtn.href = "./pages/admin-dashboard.html"
    }else{
        noPass.style.display = "block";

    }

}
const validateName = () =>{
    if(fullName.value){
        console.log("fullname is valid");
        validateSignupMail();
    }
    else{
        sNoname.style.display = "block";
    }
}
const validateSignupMail = () =>{
    if(signupEmail.value.match(mailFormat)){
        console.log("mail is valid");
        validateSignupPwd();
    }else{
        sNoMail.style.display = "block";
    }
}
const validateSignupPwd = () =>{
    if(signupPwd.value.match(pwd)){
        console.log("pwd is strong");
        redirection();
    }
    else{
        sNoPwd.style.display = "block";
    }
}
const redirection = () =>{
    if(signupSelect.value === client){
        console.log("im a client");
        signupBtn.href = "./pages/user-profile.html";
    }else if(signupSelect.value === teller){
        signupBtn.href = "./pages/teller-dashboard.html";
    }else if(signupSelect.value === admin){
        signupBtn.href = "./pages/admin-dashboard.html";
    }else{
        sNoPass.style.display = "block";
    }

}
// initializations

openBtn.addEventListener("click", openLoginModel);

closeBtn.addEventListener("click", closeModel);
closeBtnSignup.addEventListener("click",closeModel);

loginLink.addEventListener("click", openLoginModel);

signupLink.addEventListener("click", openSignupModel);
email.addEventListener("keyup",checkMail);

loginBtn.addEventListener("click",()=> {
    console.log("i'm clicked");
    checkMail();
})
password.addEventListener("keyup", pwdCheck);


const signupFunct = () =>{
    console.log("signup btn clicked");
    validateName();
}

signupBtn.addEventListener("click",()=>{
    console.log("happy");
})
// signupSelect.addEventListener("change",()=> console.log(signupSelect.value));