import {Component} from "react";
import {CardNota} from "../CardNota/CardNota";
import "./lista-de-notas.css"

export class ListaDeNotas extends Component{
    // constructor(props) {
    //     super(props);
    //     // this.listaDeNotas = [
    //     //     {titulo:'Titulo1',texto:"Nota1"},
    //     //     {titulo:'Titulo2',texto:"Nota2"},
    //     // ]
    // }

    // teste(){
    //     console.log("Testando 123")
    // }
    render() {
        const lista = this.props.notas.map(function (nota,index) {
            return (
                <li className={"lista-notas_item"} key={index}>
                    <CardNota
                        indice={index}
                        titulo={nota.titulo}
                        texto={nota.texto}
                        apagarNota={this.props.apagarNota}
                    />
                </li>
            )
        });

        return(<ul className={"lista-notas"}>{lista}</ul>)
    }
}