import FilmeGrelha from "./FilmeGrelha";
import { useState, useEffect } from "react";

export default function Filmes(props) {
  const todosFilmes = props.filmes;

  const generos = ["Ação", "Terror", "Thriller", "Comédia"];
  const [movies, setMovies] = useState(todosFilmes);
  const [selectedGenres, setSelectedGenres] = useState([]);

  console.log(todosFilmes);
  useEffect(() => {
    if (selectedGenres.length === 0) {
      setMovies(todosFilmes);
    } else {
      let filmes = todosFilmes.filter((filme) =>
        selectedGenres.includes(filme.genero)
      );
      setMovies(filmes);
    }
  }, [selectedGenres]);

  return (
    <div>
      <div className="row">
        <div className="col col-2">
          {generos.map((genero) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="boxe"
                value={genero}
                onClick={() => {
                  if (!selectedGenres.includes(genero)) {
                    setSelectedGenres([...selectedGenres, genero]);
                  } else {
                    const temp = selectedGenres.filter(
                      (generoClicakdo) => generoClicakdo !== genero
                    );
                    setSelectedGenres(temp);
                  }
                }}
              />
              <label className="form-check-label">{genero}</label>
            </div>
          ))}
        </div>
        <div className="col col-8">
          <h1 className="text-center">{props.titulo}</h1>
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            {movies.map((filme) => (
              <FilmeGrelha
                key={filme.nome}
                filme={filme}
                cinema={props.cinema || filme.cinema}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
