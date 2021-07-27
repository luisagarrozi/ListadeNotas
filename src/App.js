import React, { Component } from "react";
import Listadenotas from "./components/Listadenotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render() {
  return (
    <section className="conteudo">
     <FormularioCadastro/>
      <Listadenotas/>
    </section>
  );
}}

export default App;
