import React, { Component } from 'react';
import CardNota from "./CardNota";

export default class Listadenotas extends Component{

    render() {
        return (
            <ul>
              {Array.of("Cachorro", "Gato", "Pássaro").map((animal) => {
                return (
            <li>
              <div>{animal}</div>
            <CardNota/>
            </li>
            );
            })}
          </ul>
        )
    }
}