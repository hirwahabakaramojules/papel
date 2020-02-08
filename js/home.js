
// calling everything from the DOM
const openBtn = document.getElementById("open-model-btn");
const model = document.getElementById("model");

// functions

const openModel = () => {
    // console.log(1,2,3);
    model.style.display = "block";
}

// initializations

openBtn.addEventListener("click", openModel);