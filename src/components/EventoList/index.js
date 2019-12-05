import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { Evento } from "./style";

const EventoList = ({ eventos }) => {
  if (eventos.length > 0) {
    return (
      <>
        <Evento>
          <table>
            <thead>
              <tr>
                <td>Descrição</td>
                <td>Ano</td>
                <td>Opções</td>
              </tr>
            </thead>
            <tbody>
              {eventos.map(evento => (
                <tr key={evento.id}>
                  <td>{evento.descricao}</td>
                  <td>{evento.ano}</td>
                  <td>
                    <Link to={`/evento/${evento.id}`}>Visualizar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Evento>
      </>
    );
  } else {
    return <div></div>;
  }
};

EventoList.propTypes = {
  eventos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      descricao: PropTypes.string,
      ano: PropTypes.number
    })
  ).isRequired
};

export default withRouter(EventoList);
