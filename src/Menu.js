import { Link, useLocation } from "react-router-dom";

export default function Menu(props) {
  const rota = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">
          CineTop
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={"nav-link" + (rota === "/inicio" ? "active" : "")}
                to="/inicio"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link" + (rota === "/cinemas" ? "active" : "")}
                to="/cinemas"
              >
                Cinemas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link" + (rota === "/filmes" ? "active" : "")}
                to="filmes"
              >
                Filmes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
