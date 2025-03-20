import Filmes from "./Filmes";
import { useParams } from "react-router-dom";

export default function FilmesParaCinema(props) {
  const urlCinema = useParams().cinema;
  const cinemaEscolhido = props.cinemas.find(
    (cinema) => cinema.url === urlCinema
  );
  return (
    <div>
      <Filmes
        filmes={cinemaEscolhido.filmes}
        cinema={cinemaEscolhido}
        titulo={"Filmes para o cinema" + cinemaEscolhido.local}
      />
    </div>
  );
}
