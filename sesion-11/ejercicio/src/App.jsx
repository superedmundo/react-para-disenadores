const proyectos=[{id:1,titulo:"Materia",categoria:"Exposición"},{id:2,titulo:"Territorio",categoria:"Fotografía"},{id:3,titulo:"Archivo",categoria:"Taller"}];
function Tarjeta({titulo,categoria}){return <article className="tarjeta"><p className="categoria">{categoria}</p><h2>{titulo}</h2><p>Festival Forma · Programa 2026</p></article>}
function App(){return <main className="pagina"><header className="encabezado"><p>Festival Forma</p><h1>Haz que esta galería funcione en mobile</h1><p>Reduce el viewport y completa las pistas en CSS.</p></header><section className="galeria">{proyectos.map((proyecto)=><Tarjeta key={proyecto.id} titulo={proyecto.titulo} categoria={proyecto.categoria}/>)}</section></main>}
export default App;
