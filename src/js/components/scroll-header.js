export const scrollWindow = () => {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = 'var(--neutral-color-10)';
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const body = document.body;

    if (currentScroll > lastScrollTop) {
      if (currentScroll < 70) return;
      header.classList.add('scroll');
      if (currentScroll >= 70) {
        header.style.transition = '.3s';
        header.style.background = 'var(--neutral-color-10)';
      }
    } else {
      header.classList.remove('scroll');
      if (currentScroll < 70) {
        header.style.transition = '.3s';
        header.style.background = 'transparent';
      }
    }

    const burgerBtn = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');

    body.addEventListener('click', headerLimpid);

    let headerIsLimpid = false;

    function headerLimpid(e) {
      if (e.target !== burgerBtn && e.target !== overlay) return;
      if (window.pageYOffset <= 70) return;
      if (headerIsLimpid) {
        header.style.transition = '0.4s';
        header.style.background = 'var(--neutral-color-10)';
        headerIsLimpid = false;
      } else {
        header.style.transition = '0.4s';
        header.style.background = 'transparent';
        headerIsLimpid = true;
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
};
