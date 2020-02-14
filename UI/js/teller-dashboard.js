
// const balance = document.getElementsByClassName("balance");
const tableRow = document.getElementsByClassName("table-row");
const model = document.getElementById("model");
const moneyBox = document.getElementById("money-box");
const debit = document.getElementById("debit");
const credi = document.getElementById("credit");
const closeBtn = document.getElementById("close-btn");


closeBtn.addEventListener("click", ()=>{
    model.style.display = "none";
})


// for (let i = 0; i<balance.length; i++){
//     if(balance[i].value < 100){
//         balance[i].style.color = "red";
//         console.log("poor");
//     }
// }

for (let i = 0; i < tableRow.length ; i++){
    tableRow[i].addEventListener("click", ()=>{
        model.style.display = "block";
        const textToReplace = tableRow[i].lastChild.previousSibling.innerText;  
        
        const placeholder = tableRow[i].lastChild.previousSibling;
        const elem = document.createElement("td");
    
        console.log(placeholder); 
 
        // console.log(textToReplace);
        credit.addEventListener("click", ()=> {
            let creditFormula = parseInt(moneyBox.value) + parseInt(textToReplace);
           
            placeholder.innerText = creditFormula.toString();
            model.style.display = "none";  
                    
        });
        debit.addEventListener("click", ()=> {
            const debitFormula = parseInt(textToReplace) - parseInt(moneyBox.value);
            placeholder.innerText = debitFormula.toString();
            model.style.display = "none";
        });
        
    })
}

