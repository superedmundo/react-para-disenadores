function Navbar() {
  return <nav className="navbar"><p>Festival Forma</p><p>Programa · Archivo · Visita</p></nav>;
}

function Hero() {
  return (
    <section className="hero">
      <img src="/festival-forma.svg" alt="Composición abstracta de Festival Forma" />
      <div><p className="categoria">12—18 SEP</p><h1>Festival Forma</h1><p>Diseño, imagen y cultura contemporánea.</p></div>
    </section>
  );
}

function Tarjeta() {
  return <article className="tarjeta"><p className="categoria">Exposición</p><h2>Archivo Vivo</h2><p>Diseño y memoria gráfica.</p></article>;
}

function Galeria() {
  return <section className="galeria"><Tarjeta /><Tarjeta /><Tarjeta /></section>;
}

function Footer() {
  return <footer className="footer"><p>Festival Forma · Ciudad de México</p></footer>;
}

function App() {
  return (
    <main className="pagina">
      {/* 1. Agrega Navbar */}
      {/* 2. Agrega Hero */}
      {/* 3. Agrega Galeria */}
      {/* 4. Agrega Footer */}
    </main>
  );
}

export default App;
