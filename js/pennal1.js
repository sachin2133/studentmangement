let modal = document.getElementById("modal")
let showbtn = document.getElementById("show")
let hidebtn = document.getElementById("hidebtn")
showbtn.addEventListener('click', () => {
  modal.setAttribute('class', 'parent')
})

hidebtn.addEventListener('click', () => {
  modal.setAttribute('class', 'hide')
});
let hide1 = document.getElementById("hidebtn1")
let modal1 = document.getElementById("modal1")
hide1.addEventListener('click', () => {
  modal1.setAttribute('class', 'hide')

})


let subbutton = document.getElementById("sub")

subbutton.addEventListener("click", () => {

  let name = document.getElementById("inputname").value
  let email = document.getElementById("inputemail").value
  let mobile = document.getElementById("inputmobile").value
  let address = document.getElementById("inputaddress").value


  let student = JSON.parse(localStorage.getItem("student")) ? JSON.parse(localStorage.getItem("student")) : []
  student.push({
    "name": name,
    "email": email,
    "mobile": mobile,
    "address": address

  })
  localStorage.setItem("student", JSON.stringify(student));
  modal.setAttribute('class', 'hide')
  let studentdatabase = JSON.parse(localStorage.getItem("student"));
  current(studentdatabase);
})


// delete logic
let deletestudent = (id) => {
  let confiemation = confirm("are you sure delete the student")
  if (confiemation) {
    let studentdatabase = JSON.parse(localStorage.getItem("student"))
    studentdatabase.splice(id, 1)
    localStorage.setItem("student", JSON.stringify(studentdatabase))
    alert("student delete success")
    current(studentdatabase)

  }
}
// edit stude






modal1.setAttribute('class', 'hide1')

const editbtn = (id) => {
  let modal1 = document.getElementById("modal1");
  let rowNumer = document.getElementById("studentRow");
  let name = document.getElementById("inputname1")
  let email = document.getElementById("inputemail1")
  let mobile = document.getElementById("inputmobile1")
  let address = document.getElementById("inputaddress1")

  const rowId = document.getElementById(`index${id}`).innerHTML;
  const rowName = document.getElementById(`name${id}`).innerHTML;
  const rowEmai = document.getElementById(`email${id}`).innerHTML;
  const rowMobile = document.getElementById(`mobile${id}`).innerHTML;
  const rowMAddress = document.getElementById(`address${id}`).innerHTML;
  rowNumer.value = id;
  name.value = rowName
  email.value = rowEmai
  mobile.value = rowMobile
  address.value = rowMAddress

  modal1.setAttribute('class', 'parent1')


  let sub1 = document.getElementById("sub1")
  sub1.addEventListener('click', () => {
    let id = document.getElementById("studentRow").value;
    let name = document.getElementById("inputname1").value
    let email = document.getElementById("inputemail1").value
    let mobile = document.getElementById("inputmobile1").value
    let address = document.getElementById("inputaddress1").value
    let studentupdate = JSON.parse(localStorage.getItem("student"))
    studentupdate[id] = { name, email, mobile, address };
    localStorage.setItem('student', JSON.stringify(studentupdate))
    current(studentupdate)

    modal1.setAttribute('class', 'hide1')
  })




}