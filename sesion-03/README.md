# Sesión 03 — Diseñar el espacio

## Pregunta central

**¿Cómo controlamos el espacio entre los elementos de una composición?**

## Objetivo

Aprender a usar el espacio como una decisión de diseño mediante CSS.

## Aprendizaje esperado

Al terminar podrás:

- distinguir espacio interior, exterior y entre elementos;
- usar `padding`, `margin` y `gap`;
- controlar el ancho con `width` y `max-width`;
- probar valores y comparar resultados;
- explicar qué problema visual resolviste con una propiedad.

## Idea principal

```text
padding = dentro
margin = fuera
gap = entre
```

## Qué problema de diseño vamos a resolver

La portada de **Festival Forma** ya tiene estructura y apariencia, pero una versión está demasiado apretada.

Vamos a decidir:

- dónde falta aire;
- qué elementos deberían sentirse agrupados;
- qué elementos necesitan separarse;
- qué ancho hace más cómoda la composición.

## Carpetas

### `inicio/`

Abre esta carpeta al comenzar la sesión. La portada está intencionalmente apretada.

### `demo/`

Referencia utilizada durante las demostraciones del profesor.

### `ejercicio/`

Aquí realizarás el ejercicio guiado y después tu práctica individual.

### `solucion/`

Una posible solución de referencia. No es la única respuesta visual correcta.

### `assets/`

Contiene la imagen utilizada por la portada.

## Cómo ejecutar

1. Abre la carpeta correspondiente.
2. Abre `index.html` en el navegador.
3. Mantén `index.html` y `styles.css` disponibles en tu editor.
4. Modifica un valor.
5. Guarda.
6. Actualiza el navegador si es necesario.
7. Observa qué cambió.

No necesitas terminal, JavaScript ni React en esta sesión.

## Antes de modificar

Observa la portada y responde:

- ¿Qué está demasiado cerca del borde?
- ¿Qué elementos están demasiado juntos?
- ¿Dónde falta aire?
- ¿El bloque se siente demasiado ancho?

## Experimento 1 — Padding

Busca `.contenido` y cambia únicamente:

```css
padding: 4px;
```

Prueba:

```css
padding: 16px;
```

Después:

```css
padding: 48px;
```

Pregunta:

> ¿Qué espacio cambió: dentro, fuera o entre?

## Experimento 2 — Margin

Busca `.portada` y cambia:

```css
margin: 4px;
```

por:

```css
margin: 40px;
```

Pregunta:

> ¿El aire apareció dentro de la portada o alrededor de ella?

## Experimento 3 — Gap

En `.contenido`, cambia solamente el valor de `gap`.

Prueba:

```css
gap: 4px;
```

```css
gap: 20px;
```

```css
gap: 48px;
```

Pregunta:

> ¿Qué elementos se separaron?

**Importante:** en esa clase hay dos líneas marcadas como código preparado. Déjalas exactamente como están. Hoy no necesitamos modificarlas.

## Experimento 4 — Width y max-width

Prueba distintos anchos en `.portada`:

```css
width: 1100px;
```

Después:

```css
width: 760px;
max-width: 90%;
```

Pregunta:

> ¿Qué ancho facilita más la lectura de la composición?

## Ejercicio guiado — Diagnóstico de aire

Trabaja en `ejercicio/`.

### Paso 1

Antes de cambiar código, identifica tres problemas visibles de espacio.

### Paso 2

Para cada problema decide:

```text
¿dentro?  → padding
¿fuera?   → margin
¿entre?   → gap
¿ancho?   → width / max-width
```

### Paso 3

Modifica solamente las propiedades necesarias.

### Paso 4

Compara con la versión inicial.

Pregunta final:

> ¿Qué cambió en la lectura si el contenido sigue siendo el mismo?

## Práctica individual — Elige un ritmo

Crea una versión con una intención clara:

- **compacta**;
- **equilibrada**;
- **amplia**.

Puedes modificar:

- `padding`;
- `margin`;
- `gap`;
- `width`;
- `max-width`;
- propiedades visuales que ya conoces de la Sesión 02.

No agregues herramientas nuevas.

## Tarea — Respirar una portada

Entrega una versión final de la portada donde el espacio tenga una intención clara.

### Debe incluir

- `padding` al menos una vez;
- `margin` al menos una vez;
- `gap` al menos una vez;
- `width` o `max-width` para controlar un bloque;
- una captura del resultado.

### Responde también

Completa estas tres frases:

1. **Aumenté/disminuí ______ porque quería ______.**
2. **Utilicé ______ para separar ______.**
3. **Limité el ancho porque ______.**

## Resultado mínimo esperado

Tu entrega debe permitir reconocer:

- espacio interior;
- espacio exterior;
- separación entre elementos;
- un ancho controlado;
- una decisión visual intencional.

## Extensión opcional

Sin agregar propiedades nuevas, crea una segunda versión con un ritmo opuesto a la primera.

Por ejemplo:

```text
versión 1 = compacta
versión 2 = amplia
```

Compara cuál comunica mejor tu intención.

## Recursos

- este README;
- `demo/`;
- archivos de Sesión 02;
- MDN para consultar sintaxis puntual de `padding`, `margin`, `gap` y `max-width`.

Recuerda: no necesitas memorizar la sintaxis. Necesitas saber qué quieres cambiar, localizar la propiedad, probar y observar.
