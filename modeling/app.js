const art=document.querySelector('#main-art');
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
 art.classList.toggle('wire',button.dataset.mode==='wire');
}));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
 document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter});
 document.querySelector('#portfolio-count').textContent=button.dataset.filter==='all'?'3 sample studies':'1 sample study';
}));
document.querySelector('#project-brief').addEventListener('submit',event=>{
 event.preventDefault();
 const data=new FormData(event.currentTarget);
 const result=document.querySelector('#brief-result');
 result.hidden=false;
 result.textContent='Project brief ready\n\nService: '+data.get('service')+'\nUse: '+data.get('use')+'\nTiming: '+data.get('timing')+'\nReferences: '+data.get('reference')+'\nDetails: '+data.get('details')+'\n\nDemo preview · this brief stays in your browser.';
 result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
});
