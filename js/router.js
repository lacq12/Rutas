export function findRoutes(DATA,o,d){
 const segs=DATA.segments;const res=[];
 for(const s of segs){if(s.from===o&&s.to===d){res.push({segments:[s],transfers:0});}}
 return res;}