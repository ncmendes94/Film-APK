import { useEffect, useState } from "react";
import { estreias } from "./dados";

export default function Carousel(props) {
  const [slideAtivo, alterarSlideAtivo] = useState(0);

  function proximoSlide() {
    const proximo = slideAtivo === estreias.length - 1 ? 0 : slideAtivo + 1;
    alterarSlideAtivo(proximo);
  }

  function slideAnteriror() {
    const anterior = slideAtivo === 0 ? estreias.length - 1 : slideAtivo - 1;
    alterarSlideAtivo(anterior);
  }

  useEffect(() => {
    let timer = setInterval(
      () =>
        alterarSlideAtivo((slide) =>
          slide === estreias.length - 1 ? 0 : slide + 1
        ),
      5000
    );
    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        {props.estreiaFilmes.map((estreia, pos) => (
          <div
            className={`carousel-item ${pos === slideAtivo ? "active" : ""}`}
            key={estreia.nome}
            style={{ height: "450px" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/capas-largas/" + estreia.capa}
              className="'d-block w-100"
              alt={estreia.nome}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                minHeight: "400px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={slideAnteriror}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={proximoSlide}
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
