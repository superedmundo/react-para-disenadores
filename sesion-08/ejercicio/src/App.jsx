const proyectos = [
  { id: 1, titulo: "Materia", categoria: "Exposición" },
  { id: 2, titulo: "Territorio", categoria: "Fotografía" },
  { id: 3, titulo: "Archivo", categoria: "Taller" },
  // Agrega aquí un cuarto proyecto siguiendo el mismo patrón.
];

function Tarjeta({ titulo, categoria }) {
  return (
    <article className="tarjeta">
      <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
      <p className="categoria">{categoria}</p>
      <h2>{titulo}</h2>
      <p>Una misma estructura con información tomada de una lista.</p>
    </article>
  );
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Agrega contenido sin copiar la tarjeta</h1>
        <p>Modifica los datos del array y observa qué cambia en la interfaz.</p>
      </header>

      <section className="galeria">
        {proyectos.map((proyecto) => (
          <Tarjeta
            key={proyecto.id}
            titulo={proyecto.titulo}
            categoria={proyecto.categoria}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
