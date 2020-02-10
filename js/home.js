
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

const destination = () =>{
    if(select.value === client){
       return window.location.href = "./pages/user-profile.html"
    } else if(select.value === teller){
        return window.location.href = "./pages/teller-dashboard.html"
    }
    else if(select.value === admin){
        return window.location.href = "./pages/admin-dashboard.html"
    }

}

// initializations

openBtn.addEventListener("click", openLoginModel);

closeBtn.addEventListener("click", closeModel);
closeBtnSignup.addEventListener("click",closeModel);

loginLink.addEventListener("click", openLoginModel);

signupLink.addEventListener("click", openSignupModel);

loginBtn.addEventListener("click",()=> {
    console.log("i'm clicked");
})





