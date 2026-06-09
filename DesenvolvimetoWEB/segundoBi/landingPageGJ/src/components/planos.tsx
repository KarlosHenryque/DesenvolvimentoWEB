import "../style/planos.css";

export default function Planos() {
  return (
    <section id="planos" className="planos">
      <div className="planos__header">
        <span>INVESTIMENTO</span>
        <h2>Soluções Estratégicas</h2>
      </div>

      <div className="planos__grid">
        <div className="planos__card">
          <h3>Essencial</h3>

          <div className="planos__preco">
            R$ 2.500 <span>/projeto</span>
          </div>

          <ul>
            <li>Alinhamento da identidade visual</li>
            <li>Materiais visuais básicos</li>
            <li>Conteúdo inicial personalizado</li>
          </ul>

          <button>ESCOLHER ESSENCIAL</button>
        </div>

        <div className="planos__card ativo">
          <h3>Autoridade</h3>

          <div className="planos__preco">
            R$ 3.500 <span>/projeto</span>
          </div>

          <ul>
            <li>Direcionamento estratégico da marca</li>
            <li>Produção completa de conteúdo</li>
            <li>Sistema avançado de identidade</li>
            <li>Estratégia de distribuição</li>
          </ul>

          <button>ESCOLHER AUTORIDADE</button>
        </div>

        <div className="planos__card">
          <h3>Legado</h3>

          <div className="planos__preco">Personalizado</div>

          <ul>
            <li>Direção criativa em larga escala</li>
            <li>Parceria contínua de mídia</li>
            <li>Estratégia multiplataforma</li>
          </ul>

          <button>SOLICITAR ORÇAMENTO</button>
        </div>
      </div>
    </section>
  );
}
