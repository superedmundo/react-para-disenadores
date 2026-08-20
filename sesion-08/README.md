# Sesión 08 — Repetir contenido sin copiar

## Pregunta central

**¿Qué hacemos cuando tenemos muchas piezas similares?**

## Objetivo

Comprender que podemos guardar información en una lista y dejar que React genere una tarjeta por cada elemento.

## Aprendizaje esperado

Al terminar podrás:

- localizar un array;
- reconocer objetos sencillos dentro de la lista;
- cambiar un dato y observar una tarjeta;
- agregar o eliminar un objeto siguiendo un patrón;
- reconocer `.map()` como la parte que repite la estructura;
- explicar por qué no necesitamos copiar manualmente `Tarjeta`.

## Idea principal

> Diseñamos una tarjeta una vez; la lista decide cuántas aparecen y qué información muestran.

## Carpetas

- `inicio/`: tres tarjetas escritas manualmente con props.
- `demo/`: la información está en un array y React repite `Tarjeta` con `.map()`.
- `ejercicio/`: modifica datos y agrega un cuarto proyecto.
- `solucion/`: referencia después de intentar el ejercicio.
- `assets/`: recurso visual compartido.

## Cómo ejecutar una carpeta

En terminal, entra a la carpeta elegida:

```bash
npm install
npm run dev
```

Abre la dirección local que aparece en terminal.

El archivo principal de trabajo es:

```text
src/App.jsx
```

No necesitas estudiar `package.json`, `index.html` ni `src/main.jsx` hoy.

## Patrón de hoy

```jsx
const proyectos = [
  { id: 1, titulo: "Materia", categoria: "Exposición" },
  { id: 2, titulo: "Territorio", categoria: "Fotografía" },
];
```

```jsx
{proyectos.map((proyecto) => (
  <Tarjeta
    key={proyecto.id}
    titulo={proyecto.titulo}
    categoria={proyecto.categoria}
  />
))}
```

## Cómo leerlo

```text
proyectos = lista de información
cada { ... } = una ficha
.map() = una Tarjeta por ficha
```

## Experimentos

En `demo/src/App.jsx`:

1. cambia el título de un objeto;
2. cambia una categoría;
3. agrega un cuarto objeto siguiendo el patrón;
4. observa una cuarta tarjeta;
5. elimina temporalmente un objeto;
6. observa que desaparece una tarjeta;
7. restaura el archivo.

## Ejercicio

En `ejercicio/src/App.jsx` ya existe el array y el `.map()`.

1. localiza `const proyectos`;
2. cambia el título del segundo proyecto;
3. guarda y observa qué tarjeta cambia;
4. agrega un cuarto objeto con `id: 4`;
5. escribe un título y categoría propios;
6. guarda;
7. comprueba que aparece una cuarta tarjeta sin copiar `Tarjeta`;
8. no cambies el `.map()` para completar el objetivo.

## Resultado mínimo

- un array `proyectos`;
- al menos cuatro objetos;
- cada objeto tiene `id`, `titulo` y `categoria`;
- una sola definición de `Tarjeta`;
- `.map()` genera las tarjetas;
- la interfaz muestra cuatro tarjetas.

## Práctica individual

Convierte la galería en una pequeña selección cultural propia. Edita únicamente los datos del array.

Puedes usar contenidos de:

- exposición;
- fotografía;
- música;
- taller;
- publicación;
- charla.

## No usar todavía

- `filter`;
- `reduce`;
- APIs;
- fetch;
- state;
- eventos;
- hooks.

## Tarea — Cuatro proyectos, una sola estructura

Entrega:

1. proyecto React;
2. captura con cuatro tarjetas;
3. tres respuestas:
   - ¿dónde está la lista de información?
   - ¿qué cambiaste para crear una tarjeta nueva?
   - ¿qué parte del código no tuviste que copiar?

## Extensión opcional

Agrega un quinto objeto siguiendo exactamente el mismo patrón. No uses métodos nuevos de arrays.

## Recursos

- demo de esta sesión;
- solución después de intentar;
- glosario;
- Sesión 07 para recordar props.
