document.querySelector('._navLinks').onclick = scrollTo;

document.querySelector('._nextSection').onclick = scrollTo;

document.querySelector('._contactSection').onclick = scrollTo;

function scrollTo(event) {
	event.preventDefault();
	section = document.querySelector(event.target.getAttribute('href'));
   window.scroll({
     top: section.getBoundingClientRect().top + window.scrollY,
     behavior: 'smooth'
   });
}