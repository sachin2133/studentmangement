let button = document.getElementById("btn1")
let students = () => {
    let eror = document.getElementById("error");
    let firstname = document.getElementById("name").value;
    let lastname = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if (firstname == "") {
        eror.innerHTML = "enter the name "
    } else if (lastname == "") {
        eror.innerHTML = "enter the last name"
    } else if (email == "") {
        eror.innerHTML = "enter email"
    } else if (password == "") {
        eror.innerHTML = "enter password"
    }
    else {
        button.innerHTML = '<div class="loader">';
        let admindata = JSON.stringify({ firstname, lastname, email, password, islogin: false })
        localStorage.setItem("admin", admindata);
   if(!localStorage.getItem("student")){
   localStorage.setItem("student",JSON.stringify([]));
    JSON.parse(localStorage.getItem("student"))
   }

   alert('signup success')
   window.location.href="./login.htm"
    }
}
button.addEventListener('click', students);
