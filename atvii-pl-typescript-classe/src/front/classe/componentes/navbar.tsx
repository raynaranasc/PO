import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";

export default class Navbar extends Component {
  render(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary bg-info-subtle-primary" data-bs-theme="dark">
        <span className="navbar-brand mb-0 h1">PetLovers</span>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto m-2 mb-lg-0 ms-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  cadastrar
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      cliente
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/PetCadastroForm">
                      pet
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ProdutoFormCadastro">
                      produto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ServicoFormCadastro">
                      serviço
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  editar
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/ClienteFormEdicao">
                      cliente
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/PetFormEdicao">
                      pet
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ProdutoFormEdicao">
                      produto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ServicoFormEdicao">
                      serviço
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  listar
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/ClienteListarTabela">
                      cliente
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/PetListarTabela">
                      pet
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ProdutoListarTabela">
                      produto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ServicoListarTabela">
                      serviço
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
}
