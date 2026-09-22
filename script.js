// เมนูแฮมเบอร์เกอร์สำหรับมือถือ
const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', function () {
    siteNav.classList.toggle('open');
    const isOpen = siteNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ทำเมนู active อัตโนมัติตามหน้าที่กำลังเปิด
let currentPage = window.location.pathname.split('/').pop();
if (currentPage === '') currentPage = 'index.html';

document.querySelectorAll('.site-nav a').forEach(function (link) {
  link.classList.toggle('active', link.getAttribute('href') === currentPage);
});
