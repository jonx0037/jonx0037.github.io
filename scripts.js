/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

	// Smooth scroll function
	const smoothScroll = () => {

	  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
		  e.preventDefault();
		  document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth' 
		  });
		});
	  });

	}

	// Modal function 
	const initModals = () => {

	  const portfolioImages = document.querySelectorAll('.portfolio img');

	  portfolioImages.forEach(image => {
		image.addEventListener('click', () => {
		  // Get image data
		  // Show modal
		});
	  });

	}

	// Form validation function
	const validateForm = () => {

		const form = document.querySelector('#contact-form');

		form.addEventListener('submit', e => {
		  if (!form.elements.name.value) {
			e.preventDefault();
			alert('Please enter your name');
		  }
  
		  // Check other fields
  
		  if(!formIsValid) {
			e.preventDefault();
		  }
	})

	// Fade in on load
	document.addEventListener('DOMContentLoaded', () => {
	  document.querySelector('body').style.opacity = 0;
  
	  window.setTimeout(() => {
		document.querySelector('body').style.opacity = 1;  
	  }, 500)
	})

	// Fade in function
	const fadeIn = () => {

	  document.querySelector('body').style.opacity = 0;
  
	  setTimeout(() => {
		document.querySelector('body').style.opacity = 1;
	  }, 500); 

	}


	// Initialize
	document.addEventListener('DOMContentLoaded', () => {

	  smoothScroll();

	  initModals();

	  validateForm();

	  fadeIn();

	});
