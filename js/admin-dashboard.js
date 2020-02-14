const bText = document.getElementById("b-text");
const select = document.getElementById("select");
const deleteBtn = document.getElementById("delete-btn");
const infoDiv = document.getElementById("info-container");

select.addEventListener("change", ()=>{
    console.log(select.value);
})
select.addEventListener("click", ()=>{
    console.log(select.value);
    bText.innerText = select.value;
});

deleteBtn.addEventListener("click",()=>{
    console.log("im clicked");
    infoDiv.style.display = "none";
})
