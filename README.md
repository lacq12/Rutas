# Transporte SD – Demo (GitHub Pages, 100% navegador)

App de mapas y ruteo multimodal (concho, guagua, carro público, motoconcho) **sin frameworks ni backend**, pensada para publicarse en **GitHub Pages**. Todos los datos provienen de archivos `.json` locales.

## Estructura

```
index.html
/nojekyll (archivo oculto .nojekyll)
/data/
  network.json
  pois.json
```

> La app trae datos de **demo embebidos**. Si existen `data/network.json` y `data/pois.json`, los cargará automáticamente.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo (p. ej., `transporte-sd`).
2. Sube estos archivos a la **raíz** del repo (incluye la carpeta `data/`).
3. En **Settings → Pages**:
   - *Source*: **Deploy from a branch**
   - *Branch*: **main** / **root**
4. Guarda. En 1–2 minutos tendrás la URL tipo:
   - `https://<usuario>.github.io/transporte-sd/`

**Alternativa:** usar la rama `gh-pages` con la misma estructura. 

## Uso
- Doble clic sobre el mapa: fija **origen** y **destino**.
- Busca POIs, nodos o paradas en el cuadro de texto.
- Ajusta parámetros por modo (velocidad, tarifa, transbordo).
- **Exporta** la ruta seleccionada a **GeoJSON**.

## Esquemas de datos

### `data/network.json`
```json
{
  "meta": {"name": "…", "crs": "WGS84", "version": 1},
  "modes": { "concho": {"speed_kmh": 25, "fare_per_km": 20, "currency": "DOP", "transfer_penalty_min": 4, "avg_headway_min": 5} },
  "nodes": [ {"id":"…","name":"…","lat":18.4,"lon":-69.9} ],
  "edges": [ {"id":"e1","from":"nodeA","to":"nodeB","modes":["guagua"],"distance_m":1200,"name":"Av. Ejemplo","headway_min":{"guagua":8}} ],
  "stops": [ {"id":"st1","node":"nodeA","name":"Parada X"} ]
}
```

### `data/pois.json`
```json
{ "meta": {"name": "…", "crs": "WGS84", "version": 1}, "places": [ {"id":"poi1","name":"Lugar","lat":18.47,"lon":-69.93} ] }
```

## Notas
- El mapa es vectorial en `<canvas>` (pan/zoom). Sin tiles ni servicios externos.
- El ruteo usa **Dijkstra** (prioriza tiempo) y genera **3 alternativas** (una principal + 2 variantes).
- Si el canvas no se ve, el CSS y los parches JS incluidos mitigan problemas de altura/layout típicos en estáticos.

## Licencia
Este demo es de libre uso en tu entorno. Si vas a publicarlo, añade la licencia que prefieras (MIT, Apache-2.0, etc.).
