import {Component} from "react";
import "./card-nota.css"
import {ReactComponent as DeleteSVG} from "../../assets/delete.svg";

export class CardNota extends Component{
    render() {
        return(
            <section className={"card-nota"}>
                <header className={"card-nota_cabecalho"}>
                    <h3 className={"card-nota_titulo"}>{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.props.apagarNota}/>
                </header>
                <p className={"card-nota_texto"}>{this.props.texto}</p>
            </section>
        )
    }
}