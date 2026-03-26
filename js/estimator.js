export function estimateRoute(r,DATA,cond){
 const t=r.segments.reduce((a,s)=>a+s.tiempo_min,0);
 const c=r.segments.reduce((a,s)=>a+s.costo,0);
 return {...r,tiempo:t,costo:c,transbordos:r.transfers};}