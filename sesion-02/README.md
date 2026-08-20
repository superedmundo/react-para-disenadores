# Sesión 02 — Diseñar con CSS

## Pregunta central

**¿Cómo hacemos que nuestra estructura tenga una apariencia visual?**

## Objetivo

Comprender CSS como una herramienta para controlar propiedades visuales y relacionar una clase del HTML con cambios visibles en la interfaz.

## Aprendizaje esperado

Al terminar podrás:

- localizar una clase en HTML;
- encontrar su selector en CSS;
- reconocer propiedad y valor;
- cambiar un color;
- cambiar un fondo;
- modificar tamaño y peso de texto;
- modificar dimensiones;
- cambiar el redondeo de una pieza;
- experimentar con valores y observar consecuencias.

## Idea principal

```text
HTML = qué hay
CSS = cómo se ve
```

## Qué carpeta abrir

### Para comenzar

Abre:

```text
sesion-02/alumno/inicio/index.html
```

en tu navegador.

En el editor abre también:

```text
sesion-02/alumno/inicio/styles.css
```

No necesitas usar terminal.

### Durante la demostración

Usaremos:

```text
demo/
```

### Para el ejercicio

Trabaja en:

```text
ejercicio/
```

### Para comparar después

Existe:

```text
solucion/
```

La solución es una referencia, no la única apariencia correcta.

## Archivos

Cada carpeta de trabajo contiene:

```text
index.html
styles.css
```

El HTML contiene la estructura y clases. El CSS controla la apariencia.

## Vocabulario mínimo

### Clase

Un nombre que asignamos a un elemento para poder localizarlo.

HTML:

```html
<h1 class="titulo">Festival Forma</h1>
```

### Selector

Indica qué pieza queremos modificar.

```css
.titulo {
}
```

### Propiedad

Qué característica visual queremos cambiar.

```css
font-size
```

### Valor

Qué decisión concreta aplicamos.

```css
72px
```

Juntos:

```css
.titulo {
  font-size: 72px;
}
```

## Propiedades de esta sesión

Trabajaremos principalmente con:

```css
color
background
font-size
font-weight
width
height
border-radius
```

También pueden aparecer:

```css
font-family
text-align
```

## Experimento 1 — Fondo

Busca:

```css
.pagina {
  background: #f3efe7;
}
```

Prueba un color muy oscuro.

Después prueba otro.

Pregúntate:

> ¿Qué parte cambió?

## Experimento 2 — Escala

Busca:

```css
.titulo {
  font-size: 72px;
}
```

Prueba:

```css
font-size: 120px;
```

Después:

```css
font-size: 36px;
```

Elige finalmente un valor que funcione para la composición.

## Experimento 3 — Peso

Compara:

```css
font-weight: 400;
```

con:

```css
font-weight: 700;
```

## Experimento 4 — Forma

En la imagen prueba:

```css
border-radius: 0;
```

y:

```css
border-radius: 40px;
```

Observa cómo cambia el carácter visual.

## Ejercicio guiado

En `demo/` transformaremos la portada Festival Forma sin cambiar su estructura HTML.

Trabajaremos:

1. fondo;
2. color;
3. tamaño tipográfico;
4. peso;
5. dimensiones;
6. esquinas;
7. alineación.

Después de cada cambio intenta responder:

> ¿Qué propiedad produjo este resultado?

## Práctica individual

Trabaja en:

```text
ejercicio/styles.css
```

**No cambies `index.html` para el ejercicio base.**

Crea tres direcciones rápidas para la misma portada. Por ejemplo:

- editorial;
- festival;
- galería.

En cada prueba modifica varios valores, pero utiliza únicamente propiedades de esta sesión.

Después elige una versión y déjala como resultado final.

## Resultado mínimo

Tu versión final debe mostrar:

- hoja CSS conectada;
- fondo modificado;
- color modificado;
- jerarquía clara mediante `font-size` y/o `font-weight`;
- una decisión de `width` o `height`;
- una decisión de `border-radius`;
- relación clara entre clases del HTML y selectores CSS.

## Extensión opcional

Sin agregar propiedades nuevas, crea una segunda identidad visual opuesta a tu versión final cambiando únicamente valores.

## Tarea — Una identidad visual con CSS

Termina una versión de la portada usando únicamente conceptos vistos hasta ahora.

Tu CSS debe utilizar al menos:

```css
background
color
font-size
font-weight
width /* o height */
border-radius
```

También puedes usar:

```css
font-family
text-align
```

### Entrega

Entrega:

- `index.html`;
- `styles.css`;
- una captura del resultado;
- respuestas a estas preguntas:

1. ¿Qué selector controla el título?
2. Escribe una propiedad y el valor que elegiste.
3. ¿Qué cambio visual produce esa propiedad?

## No utilizar todavía

No agregues:

```text
padding
margin
gap
Flexbox
Grid
responsive
hover
animaciones
JavaScript
React
```

Los veremos cuando corresponda.

## Recursos

- `demo/` para revisar un ejemplo funcional;
- `solucion/` para comparar después de intentar el ejercicio;
- `assets/festival-forma.svg` como imagen preparada;
- glosario del curso para recordar vocabulario.

## Recordatorio

No necesitas memorizar la sintaxis.

El objetivo es poder pensar:

> Sé qué parte quiero cambiar, encuentro su clase, modifico una propiedad y observo qué sucede.
