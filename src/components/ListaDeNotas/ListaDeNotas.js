import {Component} from "react";
import {CardNota} from "../CardNota/CardNota";
import "./lista-de-notas.css"

export class ListaDeNotas extends Component{
    render() {
        const lista = this.props.notas.map((nota,index) => {
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