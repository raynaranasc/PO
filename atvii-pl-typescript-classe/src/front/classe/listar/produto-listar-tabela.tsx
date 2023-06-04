import Navbar from "../componentes/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";

export default class ProdutoListarTabela extends Component {
  render(){
  return (
    <div>
      <Navbar />

    
        <div>
          <h2
            className="position-absolute top-20 start-40  mt-4"
            style={{ marginLeft: "450px" }}
          >
            Listagem de Produtos
          </h2>
        </div>
        <div style={{marginTop: "100px", width: "1000px", marginLeft: "130px", borderRadius: "50px"}}>
          <table className="table table-hover table-bordered mt-5">
            <thead className="table-secondary">
              <tr>
                <th scope="col">Posição</th>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
                <th scope="col">Quantidade Consumida</th>
                <th scope="col">Perfil</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Produto 1</td>
                <td>R$30,00</td>
                <td>12</td>
                <td>Visualizar 🔎</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Produto 2</td>
                <td>R$20,00</td>
                <td>34</td>
                <td>Visualizar 🔎</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Produto 3</td>
                <td>R$127,00</td>
                <td>15</td>
                <td>Visualizar 🔎</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
  );
}
}