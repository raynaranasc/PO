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

                 
                </form>
            </div>
        )
    }
}