let button = document.getElementById("btn");
// console.log(button);
let text = document.getElementById("txt");
// console.log(text);

function action(){
text.style.color="red";
}


button.addEventListener("click",action)
