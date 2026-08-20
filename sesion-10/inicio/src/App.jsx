const proyectos = [
  { id: 1, titulo: "Materia", categoria: "Exposición" },
  { id: 2, titulo: "Ritmo", categoria: "Música" },
  { id: 3, titulo: "Territorio", categoria: "Fotografía" },
];

function Tarjeta({ titulo, categoria }) {
  return <article className="tarjeta"><p className="categoria">{categoria}</p><h2>{titulo}</h2><p>Festival Forma · Programa 2026</p><button>Explorar</button></article>;
}

export default function App() {
  return <main className="pagina"><header className="encabezado"><p>Festival Forma</p><h1>Tarjetas sin respuesta visual</h1><p>Observa qué comunica la pieza antes de diseñar el hover.</p></header><section className="galeria">{proyectos.map((proyecto) => <Tarjeta key={proyecto.id} titulo={proyecto.titulo} categoria={proyecto.categoria} />)}</section></main>;
}
