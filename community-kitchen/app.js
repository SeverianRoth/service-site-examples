
const role=document.getElementById('role'),availability=document.getElementById('availability');
function update(){
 document.getElementById('role-tag').textContent=role.value;
 document.getElementById('time-tag').textContent=availability.selectedOptions[0].textContent;
 document.getElementById('route-title').textContent={'Kitchen preparation':'Join the kitchen team','Food collection':'Keep the pantry stocked','Welcoming guests':'Make everyone feel welcome'}[role.value];
 document.getElementById('notice').textContent='';
}
role.addEventListener('change',update);availability.addEventListener('change',update);
document.getElementById('preview-volunteer').addEventListener('click',()=>{
 document.getElementById('notice').textContent='Hello Open Table team, I would like to help with '+role.value.toLowerCase()+'. I can join '+availability.selectedOptions[0].textContent.toLowerCase()+'. Please tell me about the next introduction session.';
});
