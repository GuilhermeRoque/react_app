import {Component} from "react";
import "./formulario-cadastro.css"
import Button from '@mui/material/Button';

export class FormularioCadastro extends Component{
    constructor(props) {
        super(props);
        this.titulo = ""
        this.texto = ""
    }

    render() {
        const lista = this.props.categorias.map((categoria,index) => {
            return (
                <option key={index}>
                    {categoria.nome}
                </option>
            )
        });
        return(
            <form className={"form-cadastro"} onSubmit={event => this.handleSubmit(event)} onError={erros =>console.log(erros)}>
                <select>
                    {lista}
                </select>
                <input 
                    type={"text"} 
                    placeholder={"Título"} 
                    className={"form-cadastro_input"} 
                    onChange={event => this.handleMudancaTitulo(event)}
                />
                <textarea 
                    rows={15} 
                    placeholder={"Escreva sua nota"} 
                    className={"form-cadastro_input"} 
                    onChange={event => this.handleMudancaTexto(event)}
                />
                <Button type="submit" variant="contained" color="success" className={"form-cadastro_submit"}>Criar Nota</Button>
                {/*<button className={"form-cadastro_submit"}>Criar Nota</button>*/}
            </form>
        )
    }

    handleMudancaTitulo(event) {
        this.titulo = event.target.value
        console.log(this.titulo)
    }

    handleMudancaTexto(event) {
        this.texto = event.target.value
        console.log(this.texto)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("Uma nova nota foi criada:\n"+this.titulo+"\n"+this.texto)
        this.props.criarNota(this.titulo,this.texto)
    }
}