const menuButton=document.querySelector('.menu'),navigation=document.querySelector('#navigation');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const service=document.querySelector('#service'),timing=document.querySelector('#timing'),capacity=document.querySelector('#capacity'),priorities=document.querySelector('#priorities'),result=document.querySelector('#result');
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{service.value=a.dataset.service;result.hidden=true}));
document.querySelector('#support-form').addEventListener('submit',event=>{event.preventDefault();document.querySelector('#summary').textContent=[service.value,`${capacity.value} · ${timing.value}`,priorities.value.trim()].filter(Boolean).join('\n');result.hidden=false});
[service,timing,capacity,priorities].forEach(field=>field.addEventListener('input',()=>{result.hidden=true}));
