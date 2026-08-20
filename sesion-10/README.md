# Sesión 10 — Diseñar la interacción

## Pregunta central

**¿Cómo comunicamos visualmente que algo puede reaccionar?**

## Objetivo

Diseñar una microinteracción sencilla con CSS y decidir qué intensidad ayuda a comunicar interacción.

## Idea principal

> Una interfaz también se diseña en el tiempo y en respuesta a las acciones del usuario.

## Hoy trabajarás con

- `:hover`;
- `transition`;
- `transform`;
- cambios sencillos de color y opacidad.

## Carpetas

- `inicio/`: tarjetas sin microinteracción.
- `demo/`: hover y transition ya aplicados.
- `ejercicio/`: completa y ajusta la interacción.
- `solucion/`: referencia después de intentar.
- `assets/`: referencia visual.

## Cómo ejecutar

```bash
npm install
npm run dev
```

El archivo principal de trabajo es:

```text
src/styles.css
```

## Patrón de hoy

```css
.tarjeta {
  transition: transform 180ms ease;
}

.tarjeta:hover {
  transform: scale(1.03);
}
```

## Experimentos

En `demo/src/styles.css` prueba:

```css
scale(1.02)
scale(1.08)
scale(1.2)
```

Después compara `100ms`, `180ms` y `500ms`.

Pregúntate: ¿cuál comunica interacción sin resultar exagerada?

## Ejercicio

En `ejercicio/src/styles.css`:
1. completa `transition` en `.tarjeta`;
2. completa `transform` en `.tarjeta:hover`;
3. prueba tres escalas;
4. elige una;
5. agrega un cambio de color u opacidad usando CSS ya conocido;
6. explica por qué tu versión ayuda a comunicar interacción.

## Resultado mínimo

- un `:hover` funcional;
- una `transition`;
- un `transform`;
- diferencia observable entre estado normal y hover;
- una decisión visual justificable.

## No usar todavía

- `@keyframes` complejos;
- Framer Motion;
- librerías de animación;
- media queries;
- responsive.

## Tarea — Una interacción con intención

Entrega proyecto, captura normal, captura hover y responde:
1. ¿qué cambia al hacer hover?
2. ¿qué propiedad produce el cambio principal?
3. ¿por qué elegiste esa intensidad?

## Extensión opcional

Diseña una segunda versión más sutil o más intensa y compárala con la primera, sin agregar técnicas nuevas.
