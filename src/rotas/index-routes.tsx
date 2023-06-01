// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ClienteFormCadastro from "../front/função/cadastrar/cliente-cadastro-form";
// import PetCadastroForm from "../front/função/cadastrar/pet-cadastro-form";
// import ProdutoFormCadastro from "../front/função/cadastrar/produto-cadastro-form";
// import ServicoFormCadastro from "../front/função/cadastrar/servico-cadastro-form";
// import ClienteFormEdicao from "../front/função/editar/cliente-edicao-form";
// import PetFormEdicao from "../front/função/editar/pet-edicao-form";
// import ProdutoFormEdicao from "../front/função/editar/produto-edicao-form";
// import ServicoFormEdicao from '../front/função/editar/servico-edicao-form';
// import ClienteListarTabela from "../front/função/listar/cliente-listar-tabela";
// import PetListarTabela from "../front/função/listar/pet-listar-tabela";
// import ProdutoListarTabela from "../front/função/listar/produto-listar-tabela";
// import ServicoListarTabela from "../front/função/listar/servico-listar-tabela";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClienteFormCadastro from "../front/classe/cadastrar/cliente-cadastro-form";



export const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ClienteFormCadastro />} />
        </Routes>

        </BrowserRouter>
    )    
}