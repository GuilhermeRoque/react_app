import {ListaDeNotas} from "./components/ListaDeNotas/ListaDeNotas";
import {FormularioCadastro} from "./components/FormularioCadastro/FormularioCadastro";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';
import {ListaDeCategorias} from "./components/ListaDeCategorias/ListaDeCategorias";
import Login from "./components/Login/Login"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notas:[],
            categorias:[]
        }
    }

    criarNota(titulo,texto){
        const novaNota = {titulo,texto}
        const novoArrayDeNotas = [...this.state.notas,novaNota]
        const novoEstado = {
            notas: novoArrayDeNotas,
            categorias: this.state.categorias
        }
        this.setState(novoEstado)
    }

    criarCategoria(nome){
        const novaCategoria = {nome}
        const novoArrayDeCategorias = [...this.state.categorias, novaCategoria]
        const novoEstado = {
            notas: this.state.notas,
            categorias: novoArrayDeCategorias
        }
        this.setState(novoEstado)
    }

    apagarNota(indice){
        console.log("apagar nota " + indice)
        this.state.notas.splice(indice,1)
        this.setState(this.state.notas)
    }

    render() {   
        return (
            <Login></Login>
            // <section className="conteudo">
            //     <FormularioCadastro 
            //     categorias={this.state.categorias}
            //     criarNota={this.criarNota.bind(this)}
            //     />

            //     <main className={"conteudo-principal"}>
            //         <ListaDeCategorias 
            //             categorias={this.state.categorias}
            //             criarCategoria={this.criarCategoria.bind(this)}/>
            //         <ListaDeNotas
            //             notas={this.state.notas}
            //             apagarNota={this.apagarNota.bind(this)}
            //         />
            //     </main>
            // </section>
        );
    }
}
export default App;


