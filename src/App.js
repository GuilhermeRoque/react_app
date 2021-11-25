import {ListaDeNotas} from "./components/ListaDeNotas/ListaDeNotas";
import {FormularioCadastro} from "./components/FormularioCadastro/FormularioCadastro";
import {Component} from "react";
import "./assets/App.css";
import './assets/index.css';
// import {ListaDeCategorias} from "./components/ListaDeCategorias/ListaDeCategorias";
import Stack from '@mui/material/Stack';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notas:[]
        }
    }

    criarNota(titulo,texto){
        const novaNota = {titulo,texto}
        const novoArrayDeNotas = [...this.state.notas,novaNota]
        const novoEstado = {
            notas: novoArrayDeNotas
        }
        this.setState(novoEstado)
    }

    apagarNota(indice){
        console.log("apagar nota " + indice)
        this.state.notas.splice(indice,1)
        this.setState(this.state.notas)
    }

    render() {
        const categorias = [
            {nome:"Categoria1"},
            {nome:"Categoria2"},
        ]
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
                <main className={"conteudo-principal"}>
                    <Stack direction="row" spacing={2}>
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                    </Stack>
                    {/*<ListaDeCategorias categorias={categorias}/>*/}
                    <ListaDeNotas
                        notas={this.state.notas}
                        apagarNota={this.apagarNota.bind(this)}
                    />
                </main>
            </section>
        );
    }
}
export default App;


