document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.getElementById('formMessage');
      message.textContent = 'ส่งแบบฟอร์มตัวอย่างเรียบร้อยแล้ว (หน้านี้ยังไม่ได้เชื่อมระบบส่งข้อความจริง)';
    });
  }
});
