// Navbar scroll
const header=document.getElementById('top');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>10)});
// Burger
const burger=document.getElementById('burger'),mmenu=document.getElementById('mmenu');
burger.addEventListener('click',()=>{const o=mmenu.classList.toggle('open');burger.classList.toggle('active',o);document.body.style.overflow=o?'hidden':''});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{mmenu.classList.remove('open');document.body.style.overflow=''}));
// Reveal on scroll
const revEls=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver'in window){
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
revEls.forEach((el,i)=>{el.style.transitionDelay=(i%3*60)+'ms';io.observe(el)});
// Fallback: if the observer never fires (some sandboxed embeds), reveal everything
window.addEventListener('load',()=>setTimeout(()=>{let anyIn=false;revEls.forEach(el=>{if(el.classList.contains('in'))anyIn=true});if(!anyIn&&window.scrollY===0)revEls.forEach(el=>el.classList.add('in'))},2200));
}else{revEls.forEach(el=>el.classList.add('in'))}
// Count up
const cio=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.count,sfx=el.dataset.suffix||'';let c=0,step=t/50;const tick=()=>{c+=step;if(c<t){el.textContent=Math.floor(c)+sfx;requestAnimationFrame(tick)}else el.textContent=t+sfx};tick();cio.unobserve(el)}})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
