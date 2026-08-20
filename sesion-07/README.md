# Sesión 07 — Variantes con props

## Pregunta central

**¿Cómo hacemos que un mismo componente muestre contenido diferente?**

## Objetivo

Comprender que podemos utilizar una misma pieza de React con información diferente mediante props.

## Aprendizaje esperado

Al terminar podrás:

- reconocer una prop;
- cambiar el valor de una prop;
- localizar dónde se entrega y dónde se muestra;
- crear varias instancias del mismo componente con contenidos distintos;
- explicar qué permanece igual y qué cambia.

## Idea principal

> La misma pieza puede mostrar información diferente.

## Palabra clave

> Una prop es información que entregamos a un componente.

## Carpetas

- `inicio/`: observa tres tarjetas con contenido fijo.
- `demo/`: observa la misma `Tarjeta` con contenido variable.
- `ejercicio/`: convierte una segunda parte del contenido en prop.
- `solucion/`: referencia después de intentar el ejercicio.
- `assets/`: recurso visual compartido.

## Cómo ejecutar una carpeta

En terminal, entra a la carpeta que vas a trabajar:

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
function Tarjeta({ titulo }) {
  return <h2>{titulo}</h2>;
}
```

Uso:

```jsx
<Tarjeta titulo="Materia" />
<Tarjeta titulo="Territorio" />
<Tarjeta titulo="Archivo" />
```

## Cómo leerlo

```text
titulo="Materia"
=
información que entregamos

{titulo}
=
lugar donde mostramos esa información
```

## Experimentos

En `demo/src/App.jsx`:

1. cambia `titulo="Materia"` por otro título;
2. observa qué tarjeta cambia;
3. cambia una categoría;
4. intercambia los valores de dos instancias;
5. vuelve a los valores iniciales.

Antes de guardar, intenta predecir qué cambiará.

## Ejercicio

En `ejercicio/src/App.jsx` ya existe una prop llamada `titulo`, pero `categoria` todavía está escrita directamente dentro del componente.

1. localiza `function Tarjeta({ titulo })`;
2. cambia la definición para recibir también `categoria`;
3. cambia el texto fijo por `{categoria}`;
4. entrega `categoria` en cada instancia;
5. crea tres combinaciones diferentes de título y categoría;
6. comprueba que la estructura de las tarjetas sigue siendo la misma.

## Resultado mínimo

Debes tener:

- una sola definición de `Tarjeta`;
- `titulo` como prop;
- `categoria` como prop;
- al menos tres instancias;
- títulos diferentes entre las instancias.

## Práctica individual

Convierte las tres tarjetas en una pequeña programación cultural propia.

Puedes elegir contenidos de:

- exposición;
- fotografía;
- diseño editorial;
- música;
- charla;
- taller.

No necesitas cambiar los estilos para completar el objetivo, aunque puedes usar CSS ya conocido si quieres personalizar la propuesta.

## No usar todavía

- arrays;
- `.map()`;
- state;
- eventos;
- hooks;
- TypeScript;
- nuevas librerías.

## Tarea — Una pieza, tres contenidos

Entrega:

1. proyecto React;
2. captura de la interfaz;
3. tres respuestas:
   - ¿qué parte de `Tarjeta` permanece igual?
   - ¿qué valores cambian entre las instancias?
   - ¿dónde entregas y dónde utilizas una prop?

## Extensión opcional

Crea una cuarta instancia de `Tarjeta` utilizando las mismas props. No agregues arrays ni `.map()`; eso llegará en la siguiente sesión.

## Recursos

- demo de esta sesión;
- solución de referencia después de intentar;
- glosario del curso;
- materiales de Sesiones 05 y 06 para recordar componentes y composición.
