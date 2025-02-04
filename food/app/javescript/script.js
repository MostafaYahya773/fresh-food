// import { btn } from './script2.js';
const btn = document.querySelectorAll('#btn');
//send data to deferent page
btn.forEach((ele) => {
  ele.addEventListener('click', function () {
    let word = ele.textContent.trim();
    window.open(`show.html?word=${encodeURIComponent(word)}`, '_blank');
  });
});

const foodBox = document.querySelectorAll('.products__item');
const rate = document.querySelectorAll('#rate');
foodBox.forEach((ele, index) => {
  ele.addEventListener('mouseenter', function () {
    btn[index].style.right = '10px';
    rate[index].style.left = '10px';
    btn[index].classList.add('animation');
    rate[index].classList.add('animation');
  });
  ele.addEventListener('mouseleave', function () {
    btn[index].style.right = '-300px';
    rate[index].style.left = '-300px';
  });
});
// nav open
const ul = document.querySelector('ul');
const humborger = document.querySelector('.humborger');

humborger.addEventListener('click', function () {
  ul.classList.toggle('nav-dis');
});

// animation
window.addEventListener('scroll', () => {
  const about = document.querySelector('#about');
  const services = document.querySelector('#services');
  const pricing = document.querySelector('#pricing');
  const contact = document.querySelector('#contact');
  const sectionTargetContact = contact.getBoundingClientRect();
  const sectionTargetPricing = pricing.getBoundingClientRect();
  const sectionTargetAbout = about.getBoundingClientRect();
  const sectionTargetServices = services.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (
    sectionTargetPricing.top <= windowHeight &&
    sectionTargetPricing.bottom >= 0
  ) {
    document.querySelectorAll('.pricing__box').forEach((ele) => {
      ele.classList.add('animation-subscripe');
    });
  }
  if (
    sectionTargetServices.top <= windowHeight &&
    sectionTargetServices.bottom >= 0
  ) {
    document
      .querySelector('.services__img')
      .classList.add('services_animation');
    document
      .querySelector('.services_list')
      .classList.add('services_animation');
  }

  if (
    sectionTargetAbout.top <= windowHeight &&
    sectionTargetAbout.bottom >= 0
  ) {
    document.querySelectorAll('.about__box').forEach((ele) => {
      ele.classList.add('about-animation');
    });
  }
  if (
    sectionTargetContact.top <= windowHeight &&
    sectionTargetContact.bottom >= 0
  ) {
    document.querySelector('.contact__info').classList.add('contact-animation');
    document.querySelector('.contact__form').classList.add('contact-animation');
  }
});

// submit form
const inputFild = document.querySelectorAll('.felds');
const button = document.querySelector('button');
const messageDone = document.querySelector('.message-done');
button.addEventListener('click', function () {
  validation();
});

function showMessage() {
  messageDone.classList.add('form-anemation');
  setTimeout(() => {
    messageDone.classList.remove('form-anemation');
  }, 5000);
}

function validation() {
  let allValues = true;
  inputFild.forEach((ele) => {
    if (!ele.value.trim()) {
      ele.classList.add('validation');
      allValues = false;
    } else {
      ele.classList.remove('validation');
      ele.value = '';
    }
  });
  if (allValues) {
    showMessage();
  }
}
