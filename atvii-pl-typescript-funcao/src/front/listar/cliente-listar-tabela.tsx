import Navbar from "../componentes/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";

export default function ClienteListarTabela() {
  return (
    <div>
      <Navbar />

    
        <div>
          <h2
            className="position-absolute top-20 start-40  mt-4"
            style={{ marginLeft: "450px" }}
          >
            Listagem de Clientes
          </h2>
        </div>
        <div style={{marginTop: "100px", width: "1000px", marginLeft: "130px", borderRadius: "50px"}}>
          <table className="table table-hover table-bordered mt-5">
            <thead className="table-light">
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Perfil</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Cliente 1</td>
                <td>123.456.789-xx</td>
                <td>Visualizar 🔎</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cliente 3</td>
                <td>123.456.789-xx</td>
                <td>Visualizar 🔎</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Cliente 3</td>
                <td>123.456.789-xx</td>
                <td>Visualizar 🔎</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
  );
}
