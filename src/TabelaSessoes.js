export default function TabelaSessoes(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col" style={{ fontSize: "15px" }}>
            Data
          </th>
          <th scope="col" style={{ fontSize: "15px" }}>
            Hora
          </th>
          <th scope="col" style={{ fontSize: "15px" }}>
            Sala
          </th>
        </tr>
      </thead>
      <tbody>
        {props.sessoes.map((sessao, pos) => (
          <tr key={pos}>
            <td style={{ fontSize: "14px" }}>{sessao.data}</td>
            <td style={{ fontSize: "14px" }}>{sessao.hora}</td>
            <td style={{ fontSize: "14px" }}>{sessao.sala}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
