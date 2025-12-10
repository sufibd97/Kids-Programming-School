
document.addEventListener('DOMContentLoaded',function(){
  const nav = document.querySelector('.nav');
  // simple small-screen scroll shadow
  window.addEventListener('scroll', ()=>{
    if(window.scrollY>10) nav.style.boxShadow = '0 6px 20px rgba(16,80,120,0.06)';
    else nav.style.boxShadow = 'none';
  });
});
