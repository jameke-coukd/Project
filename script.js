searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

const userIcon = document.getElementById('login-btn');
const loginFormContainer = document.querySelector('.login-form-container');
const closeLoginButton = document.getElementById('close-login-btn');

// Function to toggle the login form container visibility
function toggleLoginForm() {
  loginFormContainer.classList.toggle('active');
}

// Add click event listeners to the user icon and close button
userIcon.addEventListener('click', toggleLoginForm);
closeLoginButton.addEventListener('click', toggleLoginForm);


window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    //fadeOut();
}
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".books-slider .swiper-container", {
      // Configure the options for the Swiper carousel
      slidesPerView: "auto",
      navigation: {
        nextEl: ".books-slider .swiper-button-next",
        prevEl: ".books-slider .swiper-button-prev",
      },
    });
  });

