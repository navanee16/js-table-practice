// var unitprice = document.querySelectorAll(".num");
var button = document.querySelectorAll(".btn");
// var qty = document.querySelectorAll(".num1");
// var price = document.querySelectorAll(".num2");

button.forEach(action)

function action(act){
    act.addEventListener("click", func2)
}
 function func2(){
     let x = this.parentNode.parentNode.querySelector("td .num1")
    //  console.log(x.value);

     let y = this.parentNode.parentNode.querySelector("td .txt")
    //  console.log(y.value);

     let z = y.value;
     let q = x.value;
     let a = z*q;
    //  console.log(a);
 let out = this.parentNode.nextElementSibling.firstChild
 out.innerText = a;
 }