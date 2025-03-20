import { estreias } from "./dados";
import Carousel from "./Carousel";

export default function Inicio(props) {
  const estreiaFilmes = props.filmes.filter((filme) =>
    estreias.includes(filme.nome)
  );

  return (
    <div>
      <h1
        className="text-center"
        style={{ margin: "20px 0 20px 0", fontSize: "24px" }}
      >
        Estreias da Semana
      </h1>
      <Carousel estreiaFilmes={estreiaFilmes} />
    </div>
  );
}
