export const scrollWindow = () => {
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const body = document.body
        
        if (currentScroll > lastScrollTop) {
            if(currentScroll < 70) return
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

        body.addEventListener('click', headerLimpid)
        let headerIsLimpid = false

        function headerLimpid(){
            const burgerBtn = document.querySelector('.burger')
            const overlay = document.querySelector('.overlay')

            if(!burgerBtn && !overlay) return
            if(pageYOffset < 70) return

            if(headerIsLimpid){
                header.style.transition = '.4s';
                header.style.background = 'var(--neutral-color-10)';
                headerIsLimpid = false
            } else {
                header.style.transition = '.4s';
                header.style.background = 'transparent';
                headerIsLimpid = true
            }
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

}
