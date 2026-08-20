# Sesión 01 — El código también diseña

## Pregunta central

**¿Cómo podemos describir una pantalla utilizando código?**

## Objetivo

Comprender que una página está compuesta por elementos que pueden describirse mediante HTML y comenzar a relacionar esos elementos con partes reconocibles de una composición visual.

## Aprendizaje esperado

Al terminar la sesión podrás:

- reconocer un título, un párrafo, una imagen, un botón y un contenedor;
- identificar etiquetas de apertura y cierre;
- leer una jerarquía HTML sencilla;
- cambiar textos e imágenes siguiendo un ejemplo;
- agregar elementos básicos sin comenzar desde cero.

## Qué problema de diseño resolvemos

Cuando observamos una portada, un cartel digital o la página de una exposición, podemos reconocer distintas piezas: título, imagen, texto, acción y grupos. HTML nos ayuda a **describir qué es cada pieza y cómo está organizada**.

En esta sesión no diseñaremos todavía color, tipografía, espacio ni composición con CSS. Primero construiremos la estructura.

## Qué carpeta abrir

1. Empieza en `inicio/`.
2. Abre `index.html` en tu editor.
3. Abre el mismo archivo en el navegador.
4. Guarda cada cambio y recarga la página si es necesario.

No necesitas usar terminal en esta sesión.

## Vocabulario mínimo

- **HTML:** manera de describir la estructura y el contenido de una página.
- **Elemento:** una pieza de contenido, por ejemplo un título o una imagen.
- **Etiqueta:** la sintaxis que indica qué tipo de elemento es.
- **Apertura y cierre:** marcan dónde comienza y termina un elemento.
- **Contenido:** lo que aparece entre las etiquetas.
- **Atributo:** información adicional dentro de una etiqueta.
- **Contenedor:** elemento que agrupa otros elementos.
- **Anidación:** cuando un elemento está dentro de otro.

## Elementos que usaremos

```html
<h1>Título principal</h1>
<p>Texto</p>
<img src="ruta-de-la-imagen.svg" alt="Descripción de la imagen" />
<button>Acción</button>
<div>Grupo de elementos</div>
<section>Sección de contenido</section>
```

## Experimentos

### Experimento 1 — Cambia el contenido

En `inicio/index.html`, cambia:

```html
<h1>Festival Forma</h1>
```

por otro nombre de evento.

Observa qué cambió en el navegador y qué permaneció igual.

### Experimento 2 — Cambia el tipo de elemento

Cambia temporalmente:

```html
<h1>Festival Forma</h1>
```

por:

```html
<p>Festival Forma</p>
```

Observa la diferencia. Después vuelve a dejarlo como `h1`.

### Experimento 3 — Elimina y restaura

Elimina temporalmente:

```html
<button>Ver programa</button>
```

Guarda, observa y después restaura la línea.

### Experimento 4 — Cambia la imagen

En `demo/index.html`, localiza:

```html
<img
  src="../assets/festival-forma.svg"
  alt="Cartel abstracto del Festival Forma"
/>
```

Si tienes otra imagen local, cambia `src` siguiendo el mismo patrón. Mantén una descripción breve en `alt`.

## Ejercicio guiado

Trabaja en `ejercicio/index.html`.

Reconstruye esta estructura:

```text
SECCIÓN
├── imagen
└── contenido
    ├── fecha
    ├── título
    ├── descripción
    └── botón
```

Usa únicamente:

- `section`;
- `img`;
- `div`;
- `p`;
- `h1`;
- `button`.

## Práctica individual

Convierte la portada en una propuesta propia. Puede ser:

- una exposición;
- un festival;
- una revista;
- un proyecto fotográfico;
- un evento cultural.

Cambia como mínimo:

1. el título;
2. la fecha o categoría;
3. la descripción;
4. el texto del botón.

Puedes cambiar la imagen si tienes un archivo local, pero no es obligatorio.

## Resultado mínimo

Tu archivo debe mostrar en el navegador:

- una imagen;
- un título principal;
- dos textos breves;
- un botón;
- un contenedor que agrupe la información.

Además, debes poder señalar en el código dónde está cada una de esas partes.

## Tarea — Portada cultural en HTML

Termina tu versión personal de `ejercicio/index.html`.

### Debe incluir

- una `section` principal;
- una `img` con `src` y `alt`;
- un `div` que agrupe la información;
- un `h1`;
- al menos dos `p`;
- un `button`;
- contenido propio y coherente con una propuesta cultural o creativa.

### Entrega

Entrega:

1. tu archivo `index.html`;
2. una captura de la página abierta en el navegador;
3. dos respuestas breves:
   - ¿qué etiqueta contiene tu título principal?
   - ¿qué elemento utilizaste para agrupar la información textual?

## Extensión opcional

Sin agregar etiquetas nuevas, crea una segunda versión de la misma estructura cambiando solamente el contenido. Compara qué permanece igual y qué cambia.

## Recursos

- `demo/index.html`: ejemplo completo.
- `solucion/index.html`: solución de referencia del ejercicio.
- `assets/festival-forma.svg`: imagen preparada para la sesión.
- Glosario del curso: consulta solo los términos de HTML utilizados hoy.

## Importante

Todavía **no** necesitamos:

- CSS;
- JavaScript;
- React;
- componentes;
- props;
- Flexbox;
- Grid;
- formularios;
- DOM.

La meta de hoy es simple: **ver una interfaz, reconocer sus partes y describirlas con HTML.**