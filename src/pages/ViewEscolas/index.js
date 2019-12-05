import React, { Component } from "react";
import { Container } from "./styles";
import { Link, withRouter } from "react-router-dom";
import EscolaList from "../../components/EscolaList/index";
import api from "../../services/api";

class ViewEscolas extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      instituicao_ensinos: []
    };
  }

  async componentDidMount() {
    await api.get(`/instituicao_ensinos`).then(res => {
      console.log(res.data);
      this.setState({
        instituicao_ensinos: res.data,
        error: false
      });
    });
  }

  render() {
    return (
      <Container>
        <EscolaList escolas={this.state.instituicao_ensinos} />
        <hr />
        <Link to="/app">Página Inicial</Link>
      </Container>
    );
  }
}

export default withRouter(ViewEscolas);
