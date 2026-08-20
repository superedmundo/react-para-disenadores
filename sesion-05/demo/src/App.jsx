function Boton() {
  return <button className="boton">Explorar</button>;
}

function App() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <p>Festival Forma</p>
        <h1>Un botón, varios usos</h1>
        <p>Cambia una sola definición y observa qué ocurre.</p>

        <div className="acciones">
          <Boton />
          <Boton />
          <Boton />
        </div>
      </header>
    </main>
  );
}

export default App;
