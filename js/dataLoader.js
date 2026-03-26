export async function loadAllData(){
 const r=await fetch('data/stops.json');return {stops:(await r.json()).stops};}