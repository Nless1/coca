export const scrollWindow = () => {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

}
