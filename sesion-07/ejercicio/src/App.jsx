function Tarjeta({ titulo }) {
  return (
    <article className="tarjeta">
      <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
      <p className="categoria">Exposición</p>
      <h2>{titulo}</h2>
      <p>Una misma estructura puede recibir información distinta.</p>
    </article>
  );
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Convierte la categoría en una prop</h1>
        <p>El título ya cambia. Haz que la categoría también pueda cambiar.</p>
      </header>

      <section className="galeria">
        <Tarjeta titulo="Materia" />
        <Tarjeta titulo="Territorio" />
        <Tarjeta titulo="Archivo" />
      </section>
    </main>
  );
}

export default App;
