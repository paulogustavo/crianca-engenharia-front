import React from "react";
import PropTypes from "prop-types";

import { Escola } from "./style";

const EscolaList = ({ escolas }) => {
  if (escolas.length > 0) {
    return (
      <>
        <Escola>
          <table>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Sigla</td>
                <td>Endereço</td>
              </tr>
            </thead>
            <tbody>
              {escolas.map(escola => (
                <tr key={escola.id}>
                  <td>{escola.nome}</td>
                  <td>{escola.sigla}</td>
                  <td>{escola.endereco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Escola>
      </>
    );
  } else {
    return <div></div>;
  }
};

EscolaList.propTypes = {
  escolas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nome: PropTypes.string,
      sigla: PropTypes.string,
      endereco: PropTypes.string
    })
  ).isRequired
};

export default EscolaList;
