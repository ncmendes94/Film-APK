import { useParams } from "react-router-dom";
import LinhaInfoFilme from "./LinhaInfoFilme";
import TabelaSessoes from "./TabelaSessoes";

export default function Filme(props) {
  const urlCinema = useParams().cinema;
  const urlFilme = useParams().filme;

  const cinemaEscolhido = props.cinemas.find(
    (cinema) => cinema.url === urlCinema
  );
  console.log(props);
  const filmeEscolhido = props.filmes.find((filme) => filme.url === urlFilme);

  return (
    <div className="row">
      <div className="col col-md-4">
        <img
          style={{
            height: "450px",
            width: "300px",
          }}
          src={process.env.PUBLIC_URL + "/capas/" + filmeEscolhido.capa}
          alt={filmeEscolhido.nome}
        />
      </div>
      <div className="col col-md-8">
        <h1 style={{ fontsize: "24px", marginBottom: "20px" }}>
          {filmeEscolhido.nome}
        </h1>
        <LinhaInfoFilme titulo="Genero" texto={filmeEscolhido.genero} />
        <LinhaInfoFilme
          titulo="Atores"
          texto={filmeEscolhido.atores.join(", ")}
        />
        <LinhaInfoFilme
          titulo="Duracao"
          texto={filmeEscolhido.duracao + "minutos"}
        />
        <LinhaInfoFilme titulo="Ano" texto={filmeEscolhido.ano} />
        <LinhaInfoFilme
          style={{ marginTop: "20px" }}
          titulo="Sinopse"
          texto={filmeEscolhido.sinopse}
        />

        <h1 style={{ fontSize: "18px", marginTop: "40px" }}>Sessoes:</h1>
        <TabelaSessoes sessoes={filmeEscolhido.sessoes} />
      </div>
    </div>
  );
}
