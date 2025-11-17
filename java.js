// Toggle mobile nav, smooth scroll, simple contact handler
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle && toggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); nav.classList.remove('open'); }
    });
  });

  // contact form (client-only)
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', e=>{
    e.preventDefault();
    const data = new FormData(form);
    alert('Merci — message prêt à être envoyé via votre backend:\n' + JSON.stringify(Object.fromEntries(data)));
    form.reset();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});