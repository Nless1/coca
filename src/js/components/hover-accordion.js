export const useHoverAccordion = () => {
const footerItem = document.querySelectorAll('.footer__item');

footerItem.forEach(el =>{

  if(document.documentElement.clientWidth > 380) return
  
  el.addEventListener('mouseenter', function() {
    this.classList.add('footer__sublist-active');
    el.style.maxHeight = el.scrollHeight + 'px';
  });
  el.addEventListener('mouseleave', function() {
    this.classList.remove('footer__sublist-active');
    el.style.maxHeight = null
  });
})
}