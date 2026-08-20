const proyectos=[{id:1,titulo:"Materia",categoria:"Exposición"},{id:2,titulo:"Territorio",categoria:"Fotografía"},{id:3,titulo:"Archivo",categoria:"Taller"}];
function Tarjeta({titulo,categoria}){return <article className="tarjeta"><p className="categoria">{categoria}</p><h2>{titulo}</h2><p>Festival Forma · Programa 2026</p></article>}
function App(){return <main className="pagina"><header className="encabezado"><p>Festival Forma</p><h1>Una composición que se adapta</h1><p>Fila en desktop; columna y espacios ajustados en mobile.</p></header><section className="galeria">{proyectos.map((proyecto)=><Tarjeta key={proyecto.id} titulo={proyecto.titulo} categoria={proyecto.categoria}/>)}</section></main>}
export default App;
