const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible")
  console.log(visibility)
  console.log("hello")

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
    // navToggle.style.background = 
  }
  else {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }

  document.addEventListener('scroll', () => {
    primaryNav.setAttribute('data-visible', false)

  })

})

