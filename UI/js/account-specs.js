
const tableRow = document.getElementsByClassName("table-row");
const table = document.getElementById("table");
// console.log(table);

for (let i = 0; i<tableRow.length;i++){
    tableRow[i].addEventListener("click", ()=>{
        tableRow[i].parentNode.removeChild(tableRow[i]);
    
        
        
    })
}