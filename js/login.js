(()=>{
    let admindat=JSON.parse(localStorage.getItem("admin"));
    if(admindat.islogin){
        window.location.href="./pennal.html"
    }
})();





let btn1=document.getElementById("button1")
let span1=document.getElementById("error")








let fun=()=>{
    let email=user.value
    let password=pass.value
    if(email===""){
  
    span1.innerHTML='enter email'

    }else if(password===""){
        span1.innerHTML='enter password'
    }else{
        span1.innerHTML=""
        sachinhans= JSON.parse(localStorage.getItem("admin"))

if(email!==sachinhans.email){
    span1.innerHTML="vailed email"
    
}else if(password!==sachinhans.password){
    span1.innerHTML="wrong password"

}
else{
span1.style.color="green"
span1.innerHTML="login succesfull"
    localStorage.setItem("admin",JSON.stringify({...sachinhans , islogin:true}))
    window.location.href="http://127.0.0.1:5500/pages/pennal.html"
}
}
}
btn1.addEventListener('click',fun)