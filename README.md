# Transporte SD – Tiles externos provisionales (GitHub Pages)

Este build añade una **capa base de mosaicos** (tiles) usando `https://tile.openstreetmap.org/{z}/{x}/{y}.png` para que el mapa luzca tipo callejero al estilo Waze/Google. 

> **Nota**: Esto **sí usa un servicio externo** (OpenStreetMap). Está pensado como **provisional**. Añadí la atribución "© OpenStreetMap contributors" en la esquina inferior derecha.

## Publicación
1. Sube `index.html`, `.nojekyll` y (opcional) `/data/*.json` a la **raíz** del repositorio.
2. Activa **GitHub Pages** → *Deploy from a branch* → `main` / root.
3. Abre la URL y prueba: doble clic para origen/destino → **Calcular ruta**.

## Cambiar a 100% local después
Cuando tengas un paquete de tiles propios en `/tiles/{z}/{x}/{y}.png`, cambia en el código la función `urlFor` dentro de `drawTiles`:

```js
// Antes (externo):
const urlFor = (x,y,z)=> `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
// Después (local):
const urlFor = (x,y,z)=> `./tiles/${z}/${x}/${y}.png`;
```

Mantengo todo lo demás (ruteo, export GeoJSON, parámetros) igual al build previo.
