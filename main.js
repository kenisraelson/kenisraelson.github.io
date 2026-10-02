document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href'));
  if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
}));

const box=document.getElementById('lightbox');
if(box){
  const img=box.querySelector('img');
  const title=box.querySelector('h3');
  const copy=box.querySelector('p');
  document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',()=>{
    img.src=card.dataset.image;
    img.alt=card.querySelector('img')?.alt || '';
    title.textContent=card.dataset.title || '';
    copy.textContent=card.dataset.copy || '';
    box.showModal();
  }));
  box.querySelector('.lightbox-close').addEventListener('click',()=>box.close());
  box.addEventListener('click',e=>{if(e.target===box) box.close();});
}
