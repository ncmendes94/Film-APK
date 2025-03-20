import { Link } from "react-router-dom";

export default function Cinemas(props) {
  return (
    <div>
      <h1 className="text-center">Cinemas Disponiveis</h1>
      <ul className="list-group" style={{ marginTop: "30px" }}>
        {props.cinemas.map((cinema) => (
          <li className="list-group-item" key={cinema.local}>
            <Link to={"/cinemas/" + cinema.url}>{cinema.local}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
