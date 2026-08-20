import { useState } from "react";

const proyectos = [
  { id: 1, titulo: "Materia", categoria: "Exposición" },
  { id: 2, titulo: "Territorio", categoria: "Fotografía" },
  { id: 3, titulo: "Archivo", categoria: "Taller" },
];

function Navbar(){return <nav className="navbar"><strong>Festival Forma</strong><span>12—18 SEP 2026</span></nav>}
function Hero(){return <header className="hero"><p className="etiqueta">Diseño · imagen · cultura</p><h1>Festival Forma</h1><p>Una interfaz final construida como sistema de piezas.</p></header>}
function Tarjeta({titulo,categoria}){return <article className="tarjeta"><p className="etiqueta">{categoria}</p><h2>{titulo}</h2><p>Programa cultural de Festival Forma.</p></article>}
function Galeria(){return <section className="galeria">{proyectos.map((proyecto)=><Tarjeta key={proyecto.id} titulo={proyecto.titulo} categoria={proyecto.categoria}/>)}</section>}
function Informacion(){const[abierto,setAbierto]=useState(false);return <section className="informacion"><h2>Visita</h2><button onClick={()=>setAbierto(!abierto)}>{abierto?"Ocultar información":"Ver información"}</button>{abierto&&<div className="detalle"><p>Martes a domingo · 10:00–18:00</p><p>Centro Cultural Forma</p></div>}</section>}
function Footer(){return <footer className="footer">Festival Forma · Ciudad de México</footer>}
function App(){return <main className="pagina"><Navbar/><Hero/><Galeria/><Informacion/><Footer/></main>}
export default App;
