import { Link } from "react-router-dom";

export default function FilmeGrelha(props) {

  return (
    <div className="card" style={{ margin: "10px" }}>
      <Link to={"/cinemas/" + props.cinema.url + "/filmes/" + props.filme.url}>
        <img
          style={{ width: "195px", height: "265px" }}
          src={process.env.PUBLIC_URL + "/capas/" + props.filme.capa}
          alt={props.filme.nome}
        />
        <h1
          style={{
            fontSize: "16px",
            textAlign: "center",
            marginTop: "10px",
            width: "195px",
          }}
        >
          {props.filme.nome}
        </h1>
        <div
          style={{
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {props.filme.genero}
        </div>
      </Link>
    </div>
  );
}
