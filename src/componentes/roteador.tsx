import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Pet from "./pet";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Cadastros', 'Clientes', 'Pet']} dropdown={[]} /> 
        if (this.state.tela === 'Clientes') {
            return (
                <>
                {barraNavegacao}
                <ListaCliente tema="#e3f2fd" />
              </>
            );
          } else if (this.state.tela === 'Cadastros') {
            return (
              <>
                {barraNavegacao}
                <FormularioCadastroCliente tema="#e3f2fd" />
              </>
            );
          } else if (this.state.tela === 'Pet') {
            return (
              <>
                {barraNavegacao}
                <Pet tema="#e3f2fd" />
              </>
            );
          }
        }
    }