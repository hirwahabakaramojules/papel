const bText = document.getElementById("b-text");
const select = document.getElementById("select");


select.addEventListener("change", ()=>{
    console.log(select.value);
})
select.addEventListener("click", ()=>{
    console.log(select.value);
    bText.innerText = select.value;
})