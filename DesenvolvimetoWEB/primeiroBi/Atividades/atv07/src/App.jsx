import "./assets/css/App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import imagem from "./assets/images/Praia.jpg";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {

  const post = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "2026-02-25",
    dataFormatada: "25 de fevereiro de 2026",
    conteudo1: "As praias do Nordeste brasileiro são mundialmente reconhecidas por suas águas mornas, coqueirais e piscinas naturais.",
    conteudo2: "Destacam-se a Baía do Sancho (PE), Maragogi (AL), Porto de Galinhas (PE), Praia do Forte (BA), Jericoacoara (CE) e Pipa (RN)...",
    imagem: imagem,
    alt: "Praia de Jericoacoara",
    legenda: "Vista de uma das deslumbrantes praias do Nordeste brasileiro..."
  };

  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Article
          titulo={post.titulo}
          data={post.data}
          dataFormatada={post.dataFormatada}
          conteudo1={post.conteudo1}
          conteudo2={post.conteudo2}
          imagem={post.imagem}
          alt={post.alt}
          legenda={post.legenda}
        />

        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;