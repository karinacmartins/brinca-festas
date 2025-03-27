import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Products() {
  return (
    <div
      className="container mt-5"
      id="produtos"
      style={{ paddingTop: "110px", marginTop: "-110px" }}
    >
      {/* Seção de Produtos */}
      <h2 className="text-center fw-bold mb-4">Nossos Produtos</h2>
      <div className="text-center mb-4" >
        <img
          src="https://i.pinimg.com/1200x/87/74/80/87748040e10ad874251c2cbe756c2489.jpg"
          alt="Brinquedos"
          className="img-fluid rounded"
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>

      <ul className="list-group list-group-flush fs-4 mb-5" >
        <li className="list-group-item">
          <strong>Piscina de Bolinhas:</strong> Perfeita para garantir a
          diversão das crianças com segurança e conforto.
        </li>
        <li className="list-group-item">
          <strong>Cama Elástica:</strong> Ideal para gastar energia e
          proporcionar momentos inesquecíveis.
        </li>
        <li className="list-group-item">
          <strong>Cavalinhos:</strong> Brinquedos encantadores para os pequenos
          se divertirem com imaginação e alegria.
        </li>
        <li className="list-group-item">
          <strong>Escorregador:</strong> Uma opção divertida para a criançada
          aproveitar momentos de pura alegria.
        </li>
      </ul>

      {/* Seção de Perguntas Frequentes */}
      <h2 className="text-center fw-bold mb-4">Perguntas Frequentes</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Aluga os brinquedos avulsos ou só o kit?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Oferecemos ambas as opções! Você pode alugar os brinquedos
              individualmente ou optar pelo kit completo, garantindo mais
              diversão com um ótimo custo-benefício.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Como funciona a entrega e retirada no local?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              A entrega e retirada são feitas pela nossa equipe dentro do
              horário combinado.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Existe taxa de entrega?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Sim, cobramos taxa de entrega para distâncias acima de 5 km.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              Vocês oferecem monitor infantil?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Sim, temos monitores disponíveis por um valor adicional.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              Quais regiões vocês atendem?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Atendemos São Paulo e Grande São Paulo.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
            >
              Quais são as opções de tempo de evento?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Os eventos podem ter duração de 3 horas, 6 horas ou o dia todo.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
            >
              Quais são as formas de pagamento?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Trabalhamos com pagamento via PIX, dinheiro ou cartão, podendo
              parcelar em até 3x sem juros. É necessário um sinal para reserva.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
