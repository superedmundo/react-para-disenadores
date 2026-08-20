# Sesión 05 — Pensar en componentes

## Pregunta central

**¿Qué sucede cuando una misma pieza visual aparece varias veces?**

## Objetivo

Comprender un componente React como una pieza de interfaz reutilizable.

## Aprendizaje esperado

Al terminar podrás:

- identificar una estructura repetida;
- reconocer un componente;
- localizar dónde se define;
- utilizar un componente;
- crear uno sencillo siguiendo un ejemplo;
- observar que cambiar una sola definición modifica todas sus reutilizaciones.

## Idea principal

> Un componente es una pieza de interfaz reutilizable.

## Relación con Figma

Piensa en un componente de Figma como puente conceptual: creamos una pieza y la reutilizamos. React y Figma no funcionan técnicamente igual, pero la idea de reutilización nos ayuda a entender el problema.

## Carpetas

- `inicio/`: observa repetición escrita directamente.
- `demo/`: mira un componente sencillo ya convertido.
- `ejercicio/`: convierte una tarjeta repetida en componente.
- `solucion/`: referencia después de intentar el ejercicio.
- `assets/`: imagen utilizada por las tarjetas.

## Cómo ejecutar una carpeta

En terminal, entra a la carpeta elegida y ejecuta:

```bash
npm install
npm run dev
```

Abre la dirección local que aparece en terminal.

No necesitas entender `package.json`, `index.html` ni `src/main.jsx` en esta sesión. El archivo principal de trabajo es:

```text
src/App.jsx
```

## Patrón de hoy

```jsx
function Boton() {
  return <button className="boton">Explorar</button>;
}
```

Uso:

```jsx
<Boton />
```

## Palabras nuevas

- React: herramienta para construir interfaces mediante componentes.
- JSX: sintaxis parecida a HTML que usamos dentro de React.
- componente: pieza de interfaz reutilizable.
- `className`: forma de escribir una clase CSS en JSX.
- `return`: indica qué muestra la pieza.

## Experimentos

En `demo/src/App.jsx`:

1. cambia el texto dentro de `Boton`;
2. observa cuántos botones cambian;
3. agrega un cuarto `<Boton />`;
4. elimina una instancia;
5. restaura el archivo.

## Ejercicio

En `ejercicio/src/App.jsx` hay tres tarjetas escritas por separado.

1. identifica el bloque repetido;
2. crea `function Tarjeta()`;
3. coloca dentro una sola copia de la estructura;
4. sustituye las copias por:

```jsx
<Tarjeta />
<Tarjeta />
<Tarjeta />
```

5. cambia temporalmente el título dentro del componente;
6. observa el resultado;
7. restaura el título.

## Práctica individual

Crea uno de estos componentes sencillos:

- `Etiqueta`;
- `BotonSecundario`;
- `Sello`.

Úsalo al menos tres veces.

## Resultado mínimo

Tu proyecto debe mostrar:

- un componente definido con mayúscula inicial;
- JSX sencillo dentro de `return`;
- al menos una clase con `className`;
- al menos tres usos del mismo componente.

## No usar todavía

- props;
- state;
- arrays;
- `.map()`;
- eventos;
- hooks.

## Tarea — Una pieza, tres usos

Entrega:

1. proyecto;
2. captura;
3. tres respuestas:
   - ¿dónde defines tu componente?
   - ¿dónde lo utilizas?
   - ¿qué ventaja tuvo reutilizarlo?

## Extensión opcional

Crea un segundo componente sencillo con contenido fijo y úsalo tres veces. No agregues props.
