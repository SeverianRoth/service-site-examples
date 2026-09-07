
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
  document.querySelectorAll('.card').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter);
}));
let amount='25',frequency='einmalig';
function updateSelection(){document.getElementById('donation-selection').textContent='Deine Auswahl: '+amount+' € '+frequency+'.';}
for(const type of ['amount','frequency']){
 document.querySelectorAll('[data-'+type+']').forEach(button=>button.addEventListener('click',()=>{
   document.querySelectorAll('[data-'+type+']').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
   if(type==='amount')amount=button.dataset.amount;else frequency=button.dataset.frequency;
   updateSelection();
 }));
}
