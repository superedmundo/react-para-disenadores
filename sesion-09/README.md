# Sesión 09 — Interfaces que recuerdan

## Pregunta central

**¿Cómo hacemos que una interfaz recuerde lo que hizo el usuario?**

## Objetivo

Comprender state como información que una interfaz necesita recordar.

## Idea principal

> State es información que la interfaz necesita recordar.

## Al terminar podrás

- reconocer un estado;
- identificar un valor `true` / `false`;
- modificar el estado inicial;
- localizar qué acción cambia el estado;
- hacer que una pieza se muestre y oculte;
- explicar qué necesita recordar la interfaz.

## Carpetas

- `inicio/`: observa los estados cerrado y abierto sin interacción.
- `demo/`: prueba la interacción completa.
- `ejercicio/`: completa la interacción siguiendo las pistas.
- `solucion/`: consulta después de intentar.
- `assets/`: recurso visual compartido.

## Cómo ejecutar una carpeta

```bash
npm install
npm run dev
```

El archivo principal de trabajo es:

```text
src/App.jsx
```

## Patrón de hoy

```jsx
const [abierto, setAbierto] = useState(false);
```

Cómo leerlo:

```text
abierto = lo que la interfaz recuerda ahora
setAbierto = lo que permite cambiarlo
false = comienza cerrado
```

## Experimentos

En `demo/src/App.jsx`:

1. cambia `false` por `true`;
2. observa cómo inicia;
3. vuelve a `false`;
4. haz clic varias veces;
5. antes de cada clic predice si quedará abierto o cerrado;
6. cambia el texto del contenido de visita.

## Ejercicio

En `ejercicio/src/App.jsx` ya existe `useState`.

1. localiza `abierto`;
2. completa el `onClick` siguiendo la pista;
3. completa la condición que muestra el detalle;
4. comprueba que puedes abrir y cerrar;
5. prueba `useState(true)`;
6. elige si tu versión final inicia abierta o cerrada;
7. personaliza el contenido.

## Resultado mínimo

- un estado booleano;
- un botón que cambia ese estado;
- información visible cuando está abierto;
- información oculta cuando está cerrado;
- dos estados visuales observables.

## No usar todavía

- `useEffect`;
- múltiples estados complejos;
- objetos en state;
- Context;
- Redux;
- nuevas librerías.

## Tarea — Información que recuerda si está abierta

Entrega:

1. proyecto React;
2. captura del estado cerrado;
3. captura del estado abierto;
4. respuestas:
   - ¿qué información está guardando el estado?
   - ¿qué acción lo cambia?
   - ¿qué parte visual depende de él?

## Extensión opcional

Cambia si el panel comienza abierto o cerrado y explica cuál decisión funciona mejor para tu contenido. No agregues un segundo estado.

## Recursos

- demo de esta sesión;
- glosario;
- solución después de intentar;
- sesiones anteriores para recordar componentes y JSX.
