import React, { Component } from 'react';
import CardNota from "../CardNota";
import "./Listadenotas.css"
export default class Listadenotas extends Component{

    render() {
        return (
            <ul className="lista-notas">
              {Array.of("Cachorro", "Gato", "Pássaro").map((animal, index) => {
                return (
            <li className="lista-notas_item" key={index}>
              <div>{animal}</div>
            <CardNota/>
            </li>
            );
            })}
          </ul>
        )
    }
}