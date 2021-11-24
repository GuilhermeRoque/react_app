import {ListaDeNotas} from "./components/ListaDeNotas/ListaDeNotas";
import {FormularioCadastro} from "./components/FormularioCadastro/FormularioCadastro";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notas:[]
        }
    }

    criarNota(titulo,texto){
        console.log("Uma nova nota foi criada:\n"+titulo+"\n"+texto)
        const novaNota = {titulo,texto}
        const novoArrayDeNotas = [...this.state.notas,novaNota]
        const novoEstado = {
            notas: novoArrayDeNotas
        }
        this.setState(novoEstado)
    }

    apagarNota(){
        console.log("apagar nota")
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
                <ListaDeNotas
                    notas={this.state.notas}
                    apagarNota={this.apagarNota.bind(this)}
                />
            </section>
        );
    }
}
export default App;


