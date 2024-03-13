let btn=document.getElementById("btn");
       
btn.addEventListener("click",()=>{
    let uservalue=prompt("set new name");
    document.getElementById("pname").innerHTML=uservalue;
    document.getElementById("username").innerHTML= "@"+uservalue+uservalue.length;
    //   name=value;
})
const editdes=()=>{
let mess=prompt("set your personal details");
document.getElementById("info").innerHTML=mess;
console.log(mess)

}