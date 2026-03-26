
export function renderMiniMap(DATA) {
  const W=600, H=280, pad=20;
  const lats = DATA.stops.map(s=>s.lat), lngs = DATA.stops.map(s=>s.lng);
  const latMin=Math.min(...lats), latMax=Math.max(...lats);
  const lngMin=Math.min(...lngs), lngMax=Math.max(...lngs);
  const x = lng => pad + ( (lng - lngMin)/(lngMax - lngMin || 1) ) * (W-2*pad);
  const y = lat => pad + ( 1 - (lat - latMin)/(latMax - latMin || 1) ) * (H-2*pad);

  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', '100%'); svg.setAttribute('height', '260');

  for (const seg of DATA.segments) {
    const a = DATA.stops.find(s=>s.id===seg.from);
    const b = DATA.stops.find(s=>s.id===seg.to);
    const line = DATA.lines.find(l=>l.id===seg.line);
    if (!a || !b) continue;
    const path = document.createElementNS(svg.namespaceURI,'line');
    path.setAttribute('x1', x(a.lng)); path.setAttribute('y1', y(a.lat));
    path.setAttribute('x2', x(b.lng)); path.setAttribute('y2', y(b.lat));
    path.setAttribute('stroke', line?.color || '#888'); path.setAttribute('stroke-width','3');
    svg.appendChild(path);
  }

  for (const s of DATA.stops) {
    const c = document.createElementNS(svg.namespaceURI,'circle');
    c.setAttribute('cx', x(s.lng)); c.setAttribute('cy', y(s.lat));
    c.setAttribute('r','4'); c.setAttribute('fill','#111');
    svg.appendChild(c);
  }

  const el = document.getElementById('map-container');
  if (el) { el.innerHTML = ''; el.appendChild(svg); }
}
