# Sesión 12 — Del diseño a una interfaz

## Pregunta central

**¿Cómo combinamos todo lo aprendido para construir una interfaz completa?**

## Objetivo

Revisar, terminar, simplificar y presentar tu proyecto final de una sola página.

## Idea principal

> Diseñar con React significa construir un sistema visual con estructura, componentes, contenido y comportamiento.

## Hoy no hay conceptos técnicos nuevos

Puedes consultar sesiones anteriores. No necesitas escribir de memoria.

## Checklist final

### Diseño
- [ ] Hay jerarquía clara.
- [ ] Tipografía, color y contraste funcionan.
- [ ] Espacios y alineaciones son consistentes.
- [ ] La interfaz mantiene una identidad visual.

### Sistema
- [ ] Puedo reconocer las secciones principales.
- [ ] Existe al menos un componente reutilizado.
- [ ] Utilizo al menos una prop.
- [ ] Si repito contenido, puedo localizar dónde vive la información.

### Comportamiento
- [ ] Existe una interacción sencilla que puedo explicar.
- [ ] Sé qué valor necesita recordar la interfaz.
- [ ] Si uso hover, la respuesta visual tiene intención.

### Mobile
- [ ] Probé la interfaz en una pantalla angosta.
- [ ] La composición se adapta.
- [ ] Puedo señalar la media query o regla responsable.

### Comprensión
- [ ] Puedo cambiar un contenido.
- [ ] Puedo cambiar un espacio.
- [ ] Puedo cambiar una prop.
- [ ] Puedo explicar qué hace mi interacción.
- [ ] No agregué código que no puedo explicar.

## Referencia rápida

### Componente
```jsx
function Tarjeta() {
  return <article className="tarjeta">...</article>;
}
```

### Props
```jsx
function Tarjeta({ titulo }) {
  return <h2>{titulo}</h2>;
}
```

### Lista
```jsx
{proyectos.map((proyecto) => (
  <Tarjeta key={proyecto.id} titulo={proyecto.titulo} />
))}
```

### State
```jsx
const [abierto, setAbierto] = useState(false);
```

### Responsive
```css
@media (max-width: 768px) {
  .galeria {
    flex-direction: column;
  }
}
```

## Carpetas

- `inicio/`: proyecto integrado para comenzar una revisión.
- `demo/`: referencia de una versión revisada.
- `ejercicio/`: proyecto de referencia con checklist integrado; úsalo para comparar con tu proyecto propio.
- `solucion/`: versión final funcional de referencia.
- `assets/`: referencia visual del sistema completo.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Trabajo de hoy

1. abre tu proyecto final;
2. revisa el checklist;
3. identifica máximo dos problemas prioritarios;
4. corrígelos con herramientas ya conocidas;
5. prueba desktop y mobile;
6. prueba la interacción;
7. prepara tu explicación final.

## Entrega final

- proyecto React de una sola página;
- captura desktop;
- captura mobile;
- evidencia de interacción;
- explicación breve.

## Guion de presentación

```text
Mi proyecto es...
La interfaz está dividida en...
El componente que reutilizo es...
Estas props cambian...
La interacción hace...
En mobile cambié...
Lo que más aprendí fue...
```

## No necesitas

- routing;
- APIs;
- nuevas librerías;
- nuevos hooks;
- backend;
- autenticación;
- deployment complejo.

Una interfaz sencilla, bien diseñada y comprendida es suficiente.
