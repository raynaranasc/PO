import { NOMEM, resolveCaa } from "dns";
import Cliente from "./cliente";
import { traceDeprecation } from "process";

export default class pet{
    private nome: String
    private tipo: String
    private raca: String
    private genero: String

    constructor(nome: String, tipo:String, raca: String, genero: String){
        this.nome = nome
        this.tipo = tipo 
        this.raca = raca 
        this.genero = genero
    }
    public get getNome() {
        return this.nome
    }
    public get getTipo() {
        return this.tipo
    }
    public get getRaca() {
        return this.raca
    }
    public get getGenero() {
        return this.genero
    }

        

} 