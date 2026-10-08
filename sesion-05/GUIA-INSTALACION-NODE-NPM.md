# React para Diseñadores
## Guía para instalar Node, npm y abrir la Sesión 05

En esta guía vamos a preparar tu computadora para ejecutar por primera vez un proyecto de React.

Al terminar deberás poder abrir en tu navegador el proyecto:

```text
Escritorio
└── react-para-disenadores
    └── sesion-05
        └── demo
```

No necesitas saber todavía qué es Node, npm, Vite o cómo funciona la Terminal. Sigue los pasos exactamente en orden.

---

# 1. Antes de comenzar

Comprueba que en el **Escritorio** de tu computadora tienes una carpeta llamada:

```text
react-para-disenadores
```

Dentro de ella debe existir:

```text
sesion-05
```

y dentro:

```text
demo
```

La ruta completa que queremos utilizar es:

```text
react-para-disenadores/sesion-05/demo
```

Dentro de `demo` deben existir archivos y carpetas como:

```text
index.html
package.json
public
src
```

Si no encuentras `package.json`, probablemente no estás dentro de la carpeta correcta.

---

# 2. ¿Qué vamos a instalar?

Necesitamos **Node.js**.

Node permite que nuestra computadora ejecute las herramientas necesarias para trabajar con el proyecto de React.

También vamos a utilizar **npm**.

npm sirve para instalar las piezas que necesita nuestro proyecto.

## Importante

**No tienes que instalar npm por separado.**

Cuando instalamos Node.js mediante el instalador oficial, npm también queda instalado.

---

# 3. Descargar Node.js

Abre el navegador y entra a la página oficial de Node.js:

https://nodejs.org/en/download

En la página aparecerán diferentes versiones.

Busca la versión que diga:

```text
LTS
```

**Elige LTS.**

No elijas:

```text
Current
```

El número de versión puede cambiar con el tiempo. No importa.

Lo importante es elegir la versión marcada como:

```text
LTS
```

---

# 4. Si utilizas Windows

## Paso 4.1 — Descargar el instalador

En la página de Node.js selecciona:

```text
Windows
```

y descarga el instalador.

Normalmente será un archivo terminado en:

```text
.msi
```

Por ejemplo:

```text
node-vXX.X.X-x64.msi
```

El número exacto puede ser diferente.

---

## Paso 4.2 — Abrir el instalador

Cuando termine la descarga:

1. Abre la carpeta **Descargas**.
2. Haz doble clic sobre el archivo de Node.
3. Si Windows pregunta si permites que la aplicación realice cambios, selecciona:

```text
Sí
```

Aparecerá el instalador de Node.js.

---

## Paso 4.3 — Completar la instalación

En el instalador:

1. Presiona **Next**.
2. Acepta los términos.
3. Presiona **Next**.
4. Deja la carpeta de instalación que aparece por defecto.
5. Presiona **Next**.
6. Deja seleccionadas las opciones predeterminadas.
7. Presiona **Install**.
8. Espera a que termine.
9. Presiona **Finish**.

No necesitamos modificar opciones avanzadas.

---

# 5. Comprobar Node en Windows

Ahora vamos a comprobar que la instalación funcionó.

Presiona:

```text
Windows + R
```

Aparecerá una pequeña ventana.

Escribe:

```text
cmd
```

y presiona:

```text
Enter
```

Se abrirá una ventana negra llamada **Command Prompt** o **Símbolo del sistema**.

Escribe:

```bash
node -v
```

y presiona Enter.

Deberás obtener algo parecido a:

```text
v24.21.0
```

El número puede ser diferente.

Lo importante es que aparezca una versión y **no un error**.

Ahora escribe:

```bash
npm -v
```

y presiona Enter.

Deberás obtener otro número, por ejemplo:

```text
11.6.2
```

De nuevo, el número exacto puede ser diferente.

Si ambos comandos muestran un número, la instalación fue correcta.

---

# 6. Abrir la carpeta correcta en Windows

Cierra por ahora la ventana de Command Prompt.

Abre el **Explorador de archivos**.

Ve a:

```text
Escritorio
```

Después abre:

```text
react-para-disenadores
```

Después:

```text
sesion-05
```

Y finalmente:

```text
demo
```

Ahora debes estar viendo algo parecido a:

```text
demo
├── index.html
├── package.json
├── public
└── src
```

## Muy importante

Necesitamos ejecutar los comandos **desde `demo`**.

No desde:

```text
react-para-disenadores
```

ni desde:

```text
sesion-05
```

sino exactamente desde:

```text
sesion-05/demo
```

---

# 7. Abrir Command Prompt directamente en `demo`

Con la carpeta `demo` abierta en el Explorador de archivos:

1. Haz clic en la **barra de dirección** de la parte superior.
2. La dirección de la carpeta quedará seleccionada.
3. Borra lo que aparece.
4. Escribe:

```text
cmd
```

5. Presiona Enter.

Se abrirá Command Prompt.

La gran ventaja es que ahora la Terminal ya se encuentra exactamente dentro de:

```text
react-para-disenadores/sesion-05/demo
```

No necesitas escribir la ruta manualmente.

---

# 8. Comprobar que estamos en el lugar correcto

En Command Prompt escribe:

```bash
dir
```

Presiona Enter.

Busca entre los resultados:

```text
package.json
```

También deberías encontrar:

```text
index.html
src
public
```

Si aparece `package.json`, puedes continuar.

Si **no aparece `package.json`**, no ejecutes todavía `npm install`.

Probablemente abriste la Terminal en la carpeta equivocada.

---

# 9. Instalar el proyecto en Windows

Ahora escribe:

```bash
npm install
```

y presiona Enter.

La primera vez pueden aparecer muchas líneas de texto.

Es normal.

npm está leyendo:

```text
package.json
```

para descubrir qué necesita el proyecto y descargar esas dependencias.

Espera hasta que vuelva a aparecer la línea donde puedes escribir comandos.

Después de la instalación aparecerá una nueva carpeta llamada:

```text
node_modules
```

No debes modificar esa carpeta.

---

# 10. Ejecutar la Sesión 05 en Windows

Cuando `npm install` haya terminado escribe:

```bash
npm run dev
```

Presiona Enter.

Deberá aparecer algo parecido a:

```text
VITE

Local:   http://localhost:5173/
```

El número puede cambiar.

Por ejemplo también podría aparecer:

```text
http://localhost:5174/
```

Utiliza **la dirección que aparezca en tu computadora**.

Copia esa dirección y pégala en Chrome, Safari, Firefox o Edge.

También puedes probar:

```text
http://localhost:5173/
```

Deberás ver el proyecto de la Sesión 05.

---

# 11. Importante: no cierres la Terminal

Mientras estés trabajando con el proyecto debes dejar abierta la ventana donde aparece:

```text
npm run dev
```

Esa ventana mantiene funcionando el proyecto.

Si cierras la Terminal, la página dejará de funcionar.

Puedes minimizarla.

No necesitas escribir más comandos mientras trabajas.

---

# 12. Detener el proyecto en Windows

Cuando termines de trabajar, regresa a la Terminal.

Presiona:

```text
Ctrl + C
```

Eso detiene el proyecto.

Después puedes cerrar la Terminal.

---

# 13. Si utilizas macOS

Entra igualmente a la página oficial:

https://nodejs.org/en/download

Selecciona:

```text
macOS
```

y elige la versión:

```text
LTS
```

Descarga el instalador para macOS.

Normalmente tendrá extensión:

```text
.pkg
```

---

# 14. Instalar Node en macOS

Cuando termine la descarga:

1. Abre **Descargas**.
2. Haz doble clic sobre el archivo `.pkg`.
3. Presiona **Continuar**.
4. Acepta los términos.
5. Presiona **Instalar**.
6. Si macOS solicita tu contraseña o Touch ID, autoriza la instalación.
7. Espera a que termine.
8. Cierra el instalador.

---

# 15. Comprobar Node en macOS

Presiona:

```text
Command + espacio
```

Escribe:

```text
Terminal
```

y presiona Enter.

En Terminal escribe:

```bash
node -v
```

Presiona Enter.

Deberá aparecer un número parecido a:

```text
v24.21.0
```

Después escribe:

```bash
npm -v
```

Presiona Enter.

Debe aparecer otro número.

Si ambos comandos producen un número, Node y npm están instalados correctamente.

---

# 16. Entrar a `sesion-05/demo` en macOS

Si la carpeta está directamente en tu Escritorio, escribe:

```bash
cd ~/Desktop/react-para-disenadores/sesion-05/demo
```

y presiona Enter.

Después escribe:

```bash
pwd
```

Deberá aparecer una ruta que termina aproximadamente en:

```text
/Desktop/react-para-disenadores/sesion-05/demo
```

Ahora escribe:

```bash
ls
```

Debes encontrar:

```text
index.html
package.json
public
src
```

Si ves `package.json`, estás en el lugar correcto.

---

# 17. Método alternativo en macOS si `cd` no funciona

Si el comando anterior dice que la carpeta no existe:

1. Abre **Finder**.
2. Ve a **Escritorio**.
3. Abre `react-para-disenadores`.
4. Abre `sesion-05`.
5. Localiza la carpeta `demo`.
6. Regresa a Terminal.
7. Escribe:

```text
cd 
```

Importante: escribe `cd` y después deja **un espacio**.

No presiones Enter todavía.

8. Arrastra la carpeta `demo` desde Finder hasta la ventana de Terminal.

Terminal escribirá automáticamente la ruta.

9. Ahora presiona Enter.

Después escribe:

```bash
ls
```

Comprueba que aparece:

```text
package.json
```

---

# 18. Instalar el proyecto en macOS

Dentro de `demo` escribe:

```bash
npm install
```

Presiona Enter.

Espera hasta que termine.

Pueden aparecer muchas líneas de texto.

Eso es normal.

No cierres Terminal durante la instalación.

Al terminar deberá existir una carpeta nueva llamada:

```text
node_modules
```

---

# 19. Ejecutar la Sesión 05 en macOS

Ahora escribe:

```bash
npm run dev
```

Presiona Enter.

Aparecerá una dirección parecida a:

```text
Local: http://localhost:5173/
```

Abre esa dirección en tu navegador.

Deberás ver la demostración de la Sesión 05.

Deja Terminal abierta mientras trabajas.

---

# 20. Detener el proyecto en macOS

Cuando termines:

1. Regresa a Terminal.
2. Presiona:

```text
Control + C
```

El servidor se detendrá.

Ahora puedes cerrar Terminal.

---

# 21. ¿Tengo que hacer `npm install` cada vez?

No.

Para este mismo proyecto normalmente necesitas hacer:

```bash
npm install
```

solo la primera vez.

En las siguientes ocasiones puedes entrar directamente a:

```text
sesion-05/demo
```

y ejecutar:

```bash
npm run dev
```

---

# 22. ¿Qué hace cada comando?

No necesitas memorizarlo todavía.

## `node -v`

```bash
node -v
```

Pregunta:

> ¿Está Node instalado y qué versión tengo?

## `npm -v`

```bash
npm -v
```

Pregunta:

> ¿Está npm instalado y qué versión tengo?

## `npm install`

```bash
npm install
```

Puede entenderse por ahora como:

> Descarga las piezas que este proyecto necesita para funcionar.

## `npm run dev`

```bash
npm run dev
```

Puede entenderse como:

> Enciende nuestro proyecto para que podamos verlo en el navegador.

## `Ctrl + C`

```text
Ctrl + C
```

Detiene el proyecto.

---

# 23. Resumen del proceso completo

La primera vez:

```text
Instalar Node
        ↓
Comprobar node -v
        ↓
Comprobar npm -v
        ↓
Entrar a sesion-05/demo
        ↓
npm install
        ↓
npm run dev
        ↓
Abrir localhost en el navegador
```

Las siguientes veces:

```text
Entrar a sesion-05/demo
        ↓
npm run dev
        ↓
Abrir localhost
```

---

# 24. Problemas frecuentes

## Error: `node is not recognized`

En Windows puede aparecer algo parecido a:

```text
'node' is not recognized as an internal or external command
```

Significa que Windows todavía no encuentra Node.

Prueba primero:

1. Cierra todas las Terminales.
2. Abre una nueva ventana de `cmd`.
3. Ejecuta otra vez:

```bash
node -v
```

Si continúa el error, instala nuevamente Node LTS.

---

## Error: `command not found: node`

En macOS puede aparecer:

```text
command not found: node
```

Cierra Terminal completamente.

Ábrela de nuevo y prueba:

```bash
node -v
```

Si continúa el problema, vuelve a instalar Node LTS.

---

## Error relacionado con `npm.ps1`

En Windows podrías encontrar un mensaje parecido a:

```text
npm.ps1 cannot be loaded because running scripts is disabled
```

No cambies la seguridad de Windows.

En este curso utiliza **Command Prompt (`cmd`)** en lugar de PowerShell.

Recuerda el método:

```text
Abrir carpeta demo
↓
clic en barra de dirección
↓
escribir cmd
↓
Enter
```

Después ejecuta:

```bash
npm install
```

---

## Error: `package.json` no encontrado

Puede aparecer algo parecido a:

```text
ENOENT
Could not read package.json
```

Casi siempre significa que ejecutaste:

```bash
npm install
```

en la carpeta equivocada.

Debes estar exactamente en:

```text
react-para-disenadores
└── sesion-05
    └── demo
```

Ejecuta:

Windows:

```bash
dir
```

macOS:

```bash
ls
```

y comprueba que aparezca:

```text
package.json
```

---

## `localhost:5173` no abre

Observa la Terminal.

Quizá Vite utilizó otro número.

Por ejemplo:

```text
Local: http://localhost:5174/
```

Abre **la dirección que muestre la Terminal**, aunque no termine en `5173`.

---

## Cerré la Terminal y la página dejó de funcionar

Es normal.

Abre nuevamente Terminal dentro de `demo` y ejecuta:

```bash
npm run dev
```

---

## La página está completamente en blanco

Si:

```bash
npm run dev
```

funciona, aparece la dirección `localhost`, pero la pantalla está completamente en blanco, **no vuelvas a instalar Node inmediatamente**.

Detén el proyecto con:

```text
Ctrl + C
```

y avisa al profesor.

Probablemente existe un error dentro del código y no un problema con Node o npm.

---

# 25. Algo muy importante sobre las carpetas del curso

Dentro de una sesión puedes encontrar:

```text
inicio
demo
ejercicio
solucion
```

Son proyectos separados.

Si quieres ejecutar:

```text
sesion-05/demo
```

la Terminal debe estar dentro de:

```text
demo
```

Si después quieres ejecutar:

```text
sesion-05/ejercicio
```

deberás abrir la Terminal dentro de:

```text
ejercicio
```

y, la primera vez, ejecutar ahí:

```bash
npm install
```

Después:

```bash
npm run dev
```

La regla sencilla es:

> Antes de ejecutar `npm install`, comprueba siempre que puedes ver `package.json` dentro de la carpeta en la que estás trabajando.

---

# Checklist final

Antes de comenzar la Sesión 05 comprueba:

- [ ] Tengo `react-para-disenadores` en el Escritorio.
- [ ] Tengo instalada la versión LTS de Node.
- [ ] `node -v` muestra un número.
- [ ] `npm -v` muestra un número.
- [ ] Estoy dentro de `sesion-05/demo`.
- [ ] Puedo ver `package.json`.
- [ ] Ejecuté `npm install`.
- [ ] Ejecuté `npm run dev`.
- [ ] La Terminal muestra una dirección `localhost`.
- [ ] Abrí esa dirección en mi navegador.
- [ ] Puedo ver la demostración de la Sesión 05.

## Si todo esto funciona

Tu computadora está lista para trabajar con los proyectos de React del curso.
