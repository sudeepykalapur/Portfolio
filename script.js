
let menuIcon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let selections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');


window.onscroll=()=>{
    selections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbz5vaDReLT0QR2XgtHMFYgxgmk-PwiLkO3vokND1JYkIU-NVx9zSVv9d-TamgDWV0Pf/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ),8000)
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
