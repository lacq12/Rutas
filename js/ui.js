export function renderStops(stops){
 const dl=document.getElementById('stops-list');
 dl.innerHTML=stops.map(s=>`<option value='${s.id}'>${s.name}</option>`).join('');}
export function renderConditions(c){document.getElementById('conditions-box').innerHTML=c.map(x=>`<label><input type='checkbox' value='${x.id}'>${x.name}</label>`).join('');}
export function renderRoutes(r){const ul=document.getElementById('routes');ul.innerHTML='';r.forEach(x=>{const li=document.createElement('li');li.className='route-card';li.textContent=`${x.tiempo} min - $${x.costo}`;ul.appendChild(li);});}