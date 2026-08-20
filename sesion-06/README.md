# Sesión 06 — Construir una interfaz con componentes

## Pregunta central

**¿Cómo construimos una pantalla completa a partir de piezas?**

## Objetivo

Comprender que una interfaz puede construirse combinando componentes React.

## Aprendizaje esperado

Al terminar podrás:

- identificar las secciones principales de una pantalla;
- reconocer `App` como la pieza que reúne la interfaz;
- organizar componentes dentro de `App`;
- reconocer que un componente puede contener otros componentes;
- cambiar el orden de las secciones y observar el resultado.

## Idea principal

> Una pantalla puede construirse combinando piezas.

## Árbol de referencia

```text
App
├── Navbar
├── Hero
├── Galeria
│   ├── Tarjeta
│   ├── Tarjeta
│   └── Tarjeta
└── Footer
```

## Carpetas

- `inicio/`: observa componentes ya definidos y una pantalla incompleta.
- `demo/`: mira la pantalla completa organizada en `App`.
- `ejercicio/`: completa la composición.
- `solucion/`: referencia después de intentar.
- `assets/`: recurso visual de apoyo.

## Cómo ejecutar

En la carpeta elegida:

```bash
npm install
npm run dev
```

El archivo principal de trabajo es:

```text
src/App.jsx
```

No necesitas comprender `package.json`, `index.html` ni `src/main.jsx` en esta sesión.

## Patrón de hoy

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Galeria />
      <Footer />
    </>
  );
}
```

## Experimentos

En `demo/src/App.jsx`:

1. cambia el orden de `<Hero />` y `<Galeria />`;
2. observa el navegador;
3. elimina temporalmente `<Footer />`;
4. restaura el archivo;
5. dentro de `Galeria`, agrega una cuarta `<Tarjeta />` y vuelve a dejar tres.

## Ejercicio

En `ejercicio/src/App.jsx` las piezas ya existen.

Completa `App` con:

```jsx
<Navbar />
<Hero />
<Galeria />
<Footer />
```

en un orden coherente.

## Resultado mínimo

- `App` muestra las cuatro secciones;
- `Galeria` contiene varias `Tarjeta`;
- puedes señalar dónde cambiarías el orden de la pantalla;
- puedes dibujar el árbol básico.

## No usar todavía

- props;
- arrays;
- `.map()`;
- state;
- eventos;
- hooks;
- routing;
- Context.

## Tarea — Una pantalla hecha de piezas

Entrega:

1. proyecto React;
2. captura de la pantalla completa;
3. árbol de componentes;
4. tres respuestas:
   - ¿qué contiene `App`?
   - ¿qué contiene `Galeria`?
   - ¿dónde cambiarías el orden de las secciones?

## Extensión opcional

Prueba otra secuencia de secciones, observa qué cambia y después vuelve a una jerarquía que tenga sentido visual. No agregues conceptos nuevos.
