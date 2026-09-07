
const project=document.getElementById('project');
function updateTypes(){document.querySelectorAll('[data-project]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.project===project.value)));}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{project.value=button.dataset.project;updateTypes();}));
project.addEventListener('change',updateTypes);
document.getElementById('steel-brief').addEventListener('submit',event=>{
 event.preventDefault();
 const fields=[['Project',project.value],['Stage',document.getElementById('stage').value],['Floor area',document.getElementById('area').value],['Next step',document.getElementById('next').value]];
 const details=document.getElementById('details').value.trim();if(details)fields.push(['Details',details]);
 document.getElementById('steel-result').textContent=fields.map(pair=>pair[0]+': '+pair[1]).join('\n')+'\n\nProject brief preview.';
});
