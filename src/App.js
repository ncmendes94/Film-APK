import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Cinemas from "./Cinemas";
import { cinemas } from "./dados";
import Inicio from "./Inicio";
import Filmes from "./Filmes";
import FilmesParaCinema from "./FilmesParaCinema";
import Filme from "./Filme";

function App() {
  const todosFilmes = [];
  for (let cinema of cinemas) {
    for (let filme of cinema.filmes) {
      if (!todosFilmes.find((fil) => fil.nome === filme.nome)) {
        const novoFilme = filme;
        novoFilme.cinema = cinema;
        todosFilmes.push(novoFilme);
      }
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div className="container" style={{ paddingTop: "20px" }}>
          <Routes>
            <Route path="/" element={<Inicio filmes={todosFilmes}></Inicio>} />
            <Route
              path="/inicio"
              element={<Inicio filmes={todosFilmes}></Inicio>}
            />
            <Route path="/cinemas" element={<Cinemas cinemas={cinemas} />} />
            <Route
              path="/cinemas/:cinema/filmes/:filme"
              element={<Filme cinemas={cinemas} filmes={todosFilmes}/>}
            />
            <Route
              path="/cinemas/:cinema"
              element={<FilmesParaCinema cinemas={cinemas} />}
            />
            <Route
              path="/filmes"
              element={
                <Filmes
                  filmes={todosFilmes}
                  titulo="Todos os filmes em exebicao "
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
