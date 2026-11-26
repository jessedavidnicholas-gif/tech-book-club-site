document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (event) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
const copyright = document.getElementById('copyright');
if (copyright) {
  copyright.textContent =
    © ${new Date().getFullYear()} Tech Book Club. All rights reserved.;
}
function showEmail(){
  alert("contact us at:Boolykjesse@gmail.com");
}