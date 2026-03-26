import {loadAllData} from './dataLoader.js';
loadAllData().then(d=>{
  document.getElementById('stops-list').innerHTML = d.stops.map(s=>`<option value='${s.id}'>${s.name}</option>`).join('');
});