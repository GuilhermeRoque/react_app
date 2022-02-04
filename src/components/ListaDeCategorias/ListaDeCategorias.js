import {Component} from "react";
import "./lista-de-categorias.css"

export class ListaDeCategorias extends Component{

    _handleInput(e){
        if (e.key === "Enter"){
            this.props.criarCategoria(e.target.value)
        }
    }


    render() {
        const lista = this.props.categorias.map((categoria,index) => {
            return (
                <li key={index} className="lista-categorias_item">
                    {categoria.nome}
                </li>
            )
        });


        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {lista}
                </ul>
                <input type="text" className="lista-categorias_input" placeholder="Adicionar categoria" 
                onKeyUp={event => {this._handleInput(event)}}></input>
            </section>
        )
    }
}