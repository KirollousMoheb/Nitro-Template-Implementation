const navbar = document.querySelector('#navbarmain')
const brand = document.querySelector('#brand')
const ele = document.getElementsByClassName('section');


window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('navscroll')
		brand.classList.add('logo')
		for (var i = 0; i < ele.length; i++ ) {
		    ele[i].classList.add('link')
		}
  } else if (navbar.classList.contains('navscroll')) {
    navbar.classList.remove('navscroll')
		brand.classList.remove('logo')
		for (var i = 0; i < ele.length; i++ ) {
				ele[i].classList.remove('link')
		}

  } else {
    navbar.classList.remove('navscroll')
		brand.classList.remove('logo')
		for (var i = 0; i < ele.length; i++ ) {
				ele[i].classList.remove('link')
		}


  }
})
