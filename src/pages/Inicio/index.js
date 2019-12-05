import React, { Component } from "react";
import { Container } from "./styles";
import { Link, withRouter } from "react-router-dom";
import EventoList from "../../components/EventoList/index";
import api from "../../services/api";
import { ButtonSet } from "../Inicio/styles";

class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      eventos: []
    };
  }

  async componentDidMount() {
    await api.get(`/eventos`).then(res => {
      console.log(res.data);
      this.setState({
        eventos: res.data,
        error: false
      });
    });
  }

  render() {
    return (
      <Container>
        <EventoList eventos={this.state.eventos} />

        <ButtonSet>
          <Link to="/addevento" style={{ textDecoration: "none" }}>
            <button id="BtnAddEvento">Adicionar evento</button>
          </Link>

          <Link to="/escolas" style={{ textDecoration: "none" }}>
            <button id="BtnVerEscolas">Ver escolas</button>
          </Link>

          <Link to="/addescola" style={{ textDecoration: "none" }}>
            <button id="BtnAddEscola">Adicionar escola</button>
          </Link>
        </ButtonSet>
      </Container>
    );
  }
}

export default withRouter(Inicio);
