
let sidebaar = document.getElementById("sidebaar")
let sideshow = document.getElementById("sideshowbtn")
let hidediv = document.getElementById("hidebtn")
console.log(sideshow)

sideshow.addEventListener('click', () => {
  const cuurnetclass = sideshow.getAttribute("class");
  if (cuurnetclass === "fa fa-bars") {
    sideshow.setAttribute("class", "fa fa-times")
    sidebaar.setAttribute('class', 'sidemenu')
  }
  if (cuurnetclass === "fa fa-times") {
    sideshow.setAttribute("class", "fa fa-bars")
    sidebaar.setAttribute("class", "sidemenu1")
  }

})
const aboutus=document.getElementById("aboutus")
const feedback=document.getElementById("feedback")
const contactus=document.getElementById("contactus")
const students=document.getElementById("students")
const sidecontentdiv = document.getElementById("sidecontentdiv");
let sidepenaldes = document.getElementById('sidepenaldesh')
sidepenaldes.addEventListener('click', () => {
  document.title="deshboard"
  let sachin = new XMLHttpRequest();
  sachin.onload = ( ) => {
    sidecontentdiv.innerHTML=sachin.response
  }
  sachin.open('get', 'http://127.0.0.1:5501/pages/desboard.html', true)
  sachin.send(); 
})
students.addEventListener('click', () => {
  document.title="students"
  let sachin= new XMLHttpRequest();
  sachin.onload = ( ) => {
    sidecontentdiv.innerHTML=sachin.response
  }
  sachin.open('get', 'http://127.0.0.1:5501/pages/pennal1.html', true)
  sachin.send();
})
contactus.addEventListener('click', () => {
  document.title="contactus"
  let sachin= new XMLHttpRequest();
  sachin.onload = ( ) => {
    sidecontentdiv.innerHTML=sachin.response
  }
  sachin.open('get', 'http://127.0.0.1:5501/pages/contactus.html', true)
  sachin.send();
})
feedback.addEventListener('click', () => {
  document.title="feedback"
  let sachin= new XMLHttpRequest();
  sachin.onload = ( ) => {
    sidecontentdiv.innerHTML=sachin.response
  }
  sachin.open('get', 'http://127.0.0.1:5501/pages/feedback.html', true)
  sachin.send();
})
aboutus.addEventListener('click', () => {
  document.title = "about"
  let sachin= new XMLHttpRequest();
  sachin.onload = ( ) => {
    sidecontentdiv.innerHTML=sachin.response
  }
  sachin.open('get', 'http://127.0.0.1:5501/pages/aboutus.html', true)
  sachin.send();
})

const loadHomePage = () => {
  document.title = "about"
  let sachin= new XMLHttpRequest();
  sachin.onload = ( ) => {
    sidecontentdiv.innerHTML=sachin.response
  }
  sachin.open('get', 'http://127.0.0.1:5501/pages/aboutus.html', true)
  sachin.send();
  window.scrollBy(0,0)
}


































