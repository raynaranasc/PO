/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Nome</th>
                    <th scope="col">CPF</th>
                    <th scope="col">P</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Cliente 1</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Cliente 2</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Cliente 3</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Cliente 4</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Cliente 5</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>Cliente 6</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>Cliente 7</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr><tr>
                    <th scope="row">8</th>
                    <td>Cliente 8</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td>Cliente 9</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">10</th>
                    <td>Cliente 10</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
        </table>
        )
    }
}