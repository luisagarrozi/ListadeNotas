import React, { Component } from "react";
import Listadenotas from "./components/Listadenotas";
import { FormularioCadastro } from "./components/FormularioCadastro";

class App extends Component {
  render() {
  return (
    <section>
     <FormularioCadastro/>
      <Listadenotas/>
    </section>
  );
}}

export default App;
