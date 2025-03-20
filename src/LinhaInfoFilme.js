export default function LinhaInfoFilme(props) {
  return (
    <div style={props.style || {}}>
      <span style={{ fontWeight: "bold", marginRight: "10px" }}>
        {props.titulo}:
      </span>
      <span style={{ fontSize: "0.90em" }}>{props.texto}</span>
    </div>
  );
}
