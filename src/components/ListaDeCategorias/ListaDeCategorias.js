import {Component} from "react";
import "./lista-de-categorias.css"

export class ListaDeCategorias extends Component{
    render() {
        const lista = this.props.categorias.map((categoria,index) => {
            return (
                // <li className={"lista-notas_item"} key={index}>
                <li key={index}>
                    {categoria.nome}
                    {/*<CardNota*/}
                    {/*    indice={index}*/}
                    {/*    titulo={nota.titulo}*/}
                    {/*    texto={nota.texto}*/}
                    {/*    apagarNota={this.props.apagarNota}/>*/}
                </li>
            )
        });

        return(
            <section>
                <ul className={"lista-notas"}>
                    {lista}
                </ul>
                <input type={"text"}/>
            </section>
        )
    }
}