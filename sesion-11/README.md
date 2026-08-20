# Sesión 11 — Diseñar para diferentes pantallas

## Pregunta central

**¿Qué debe cambiar cuando nuestra interfaz tiene menos espacio?**

## Objetivo

Comprender responsive como adaptación de composición al espacio disponible.

## Idea principal

> Responsive significa adaptar la composición al espacio disponible.

## Al terminar podrás

- detectar un problema mobile;
- reconocer una media query;
- cambiar una fila por una columna;
- ajustar espacios o tamaños;
- comparar una versión desktop y una mobile.

## Carpetas

- `inicio/`: galería pensada solo para desktop.
- `demo/`: adaptación responsive completa.
- `ejercicio/`: completa la media query siguiendo las pistas.
- `solucion/`: referencia después de intentar.
- `assets/`: comparación visual desktop/mobile.

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
@media (max-width: 768px) {
  .galeria {
    flex-direction: column;
  }
}
```

## Cómo leerlo

```text
si el viewport mide 768px o menos
↓
usa estas reglas
↓
la galería se reorganiza
```

## Experimentos

En `demo/src/styles.css`:

1. reduce el ancho del navegador;
2. observa cuándo la galería cambia a columna;
3. cambia `768px` por `600px`;
4. prueba `900px`;
5. vuelve a `768px`;
6. modifica `gap` y `padding` mobile.

## Ejercicio

En `ejercicio/src/styles.css` ya existe una media query preparada.

1. localiza `@media (max-width: 768px)`;
2. completa `flex-direction: column`;
3. cambia `.tarjeta` a `width: 100%`;
4. reduce `gap`;
5. reduce `padding` de `.pagina`;
6. compara desktop y mobile.

## Resultado mínimo

- fila en desktop;
- columna en mobile;
- una media query sencilla;
- un ajuste adicional de espacio o tamaño;
- dos estados de composición observables.

## No usar todavía

- múltiples breakpoints complejos;
- container queries;
- tipografía fluida avanzada;
- sistemas responsive complejos.

## Tarea — Una composición que se adapta

Entrega:
1. proyecto React;
2. captura desktop;
3. captura mobile;
4. respuestas:
   - ¿qué problema encontraste en mobile?
   - ¿qué regla cambia la composición?
   - ¿qué otra decisión adaptaste?

## Extensión opcional

Prueba temporalmente otro breakpoint y compara cuándo cambia la composición. Después vuelve a una sola media query clara.
