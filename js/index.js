const navBackground = document.querySelector(".navigation__background");
const navMenu = document.querySelector(".navigation__menu");
const navButton = document.getElementById("navi-toggle");
const navButtonImg = navButton.querySelector('img');
const modal = document.querySelector('.modal');

function isMenuOpen() {
  return navBackground.classList.contains("navigation__background--show");
}

function toggleNavVisibility() {
  navBackground.classList.toggle("navigation__background--show");
  navMenu.classList.toggle("navigation__menu--show");

  navButtonImg.setAttribute(
    "src",
    isMenuOpen()
      ? "img/close-svgrepo-com.svg"
      : "img/burger-menu-svgrepo-com.svg"
  );
}

function toggleBookingModal(on = true) {
  const showClass = 'modal--show';
  on ? modal.classList.add(showClass) : modal.classList.remove(showClass);
}

function attachEventListeners() {
  navButton.onclick = toggleNavVisibility;

  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.onclick = toggleNavVisibility;
  });

  const ctaButtons = document.querySelectorAll('.card__cta .btn');
  ctaButtons.forEach(btn => {
    btn.onclick = () => {
      toggleBookingModal(true);
    }
  })

  modal.onclick = () => {
    toggleBookingModal(false);
  }

  const modalContent = modal.querySelector('.modal__content');
  modalContent.onclick = (e) => {
    e.stopPropagation();
  }

  const modalClose = modal.querySelector('.modal__close-btn');
  modalClose.onclick = () => {
    toggleBookingModal(false);
  }
}

attachEventListeners();
