
const acc = document.getElementsByClassName("accordion");
// let i;

for (let i = 0; i < acc.length; i++) {
  // 
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const submit = () =>{
  alert("thankyou for the request, wait for our confirmation");
  console.log("im submitted");

}