import React, { Component } from "react";
import "./index.js";
import "./FormularioCadastro.css";
class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Titulo" className="form-cadastro_input" />
        <textarea placeholder="Escreva sua nota" className="form-cadastro_input"></textarea>
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
