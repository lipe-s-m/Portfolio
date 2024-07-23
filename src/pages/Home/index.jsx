import Header from "../../components/Header";
import UserPicPrincipal from "./../../icons/Icons/eu.jpeg";
import "./index.css";

export default function Home() {
  return (
    <>
      <div id="container-page">
        <Header />
        <section id="apresentacao">
          <div className="container">
            <p className="titulo-pequeno apresentacao-fade">Ola! Eu sou</p>
            <h1 className="titulo-grande apresentacao-fade">
              Felipe Serejo Monteiro!
            </h1>
            <p className="titulo-medio apresentacao-fade">
              Desenvolvedor Web | FullStack
            </p>
          </div>
          <img
            className="minha-foto-principal"
            src={UserPicPrincipal}
            alt="Foto de Perfil"
          ></img>
        </section>

        <article>
          <h3>Sobre Mim</h3>
          <h2>Desenvolvedor FullStack | Junior</h2>

          <p className="sobre-mim-descricao">
            Oi! Eu sou o Felipe, tenho 19 anos e estou cursando Ciência da
            Computação na UFRRJ há quase dois anos. A programação é minha
            paixão, e meu objetivo é solucionar desafios de maneira inovadora,
            criando sistemas completos e interfaces intuitivas e agradáveis ao
            usuário.
            <br />
            Tenho experiência tanto em Front End quanto em Back End, com
            habilidades em HTML, CSS, JavaScript, NodeJS, MySQL e frameworks
            modernos como React. Tenho a capacidade de construir e integrar
            aplicações completas, desde a interface até o gerenciamento de dados
            e lógica de servidor. <br />
            Estou sempre buscando aprender algo novo e aprimorar minhas
            habilidades. Cada projeto é uma oportunidade para crescer e
            enfrentar novos desafios.
            <br />
            Vamos juntos criar algo incrível?
            <br />
          </p>
        </article>

        <article>
          <h3 className="title">Habilidades</h3>
          <p>
            (Mudar DPS) HTML - CSS - JavaScript - NodeJS - MySQL - PostgreSQL -
            React - Java - Git
          </p>
        </article>

        <section id="projetos">
          <div className="projetos-lista">
            <h3>Projetos</h3>
            <div className="projetos-card">
              <span className="projetos-titulo">Agendamento RU</span>
              <p className="projetos-descricao">
                Adicionar a descricao aqui bla bla bla, link do projeto: link do
                coisa
              </p>
              <span>por a foto aq do projeto</span>
              <hr classname="projetos-linha"></hr>
            </div>
            <div className="projetos-card">
              <span className="projetos-titulo">Lista de Musicas</span>
              <p className="projetos-descricao">
                Adicionar a descricao aqui bla bla bla, link do projeto: link do
                coisa
              </p>
              <span>por a foto aq do projeto</span>
              <hr classname="projetos-linha"></hr>
            </div>
            <div className="projetos-card">
              <span className="projetos-titulo">Livro Jogo PE</span>
              <p className="projetos-descricao">
                Adicionar a descricao aqui bla bla bla, link do projeto: link do
                coisa
              </p>
              <span>por a foto aq do projeto</span>
              <hr classname="projetos-linha"></hr>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
