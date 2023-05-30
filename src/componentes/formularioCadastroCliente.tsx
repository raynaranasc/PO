import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>

                    <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" />
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="telefone" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Pet" aria-label="Pet" />
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col">
                    <select className="form-select" id="autoSizingSelect">
                        <option selected>Produtos</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col">
                    <select className="form-select" id="autoSizingSelect">
                        <option selected>Serviços</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    </div>
                    
                    <div className="input-group mb-3">
                        <button className="btn btn-primary" type="button">Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}