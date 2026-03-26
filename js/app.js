function resolveStop(v, stops){
  const q = (v||'').trim().toLowerCase();
  if (!q) return null;
  const byId = stops.find(s => s.id.toLowerCase() === q);
  if (byId) return byId.id;
  const byName = stops.find(s => s.name.toLowerCase() === q);
  return byName ? byName.id : null;
}
import {loadAllData} from './dataLoader.js';
loadAllData().then(d=>{
  document.getElementById('stops-list').innerHTML = d.stops.map(s=>`<option value='${s.id}'>${s.name}</option>`).join('');
});
