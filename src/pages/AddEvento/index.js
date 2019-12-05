import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";
import { ButtonSet } from "../AddEvento/styles";

class AddEvento extends Component {
  state = {
    descricao: "",
    data_inicio: "",
    data_fim: "",
    error: ""
  };

  handleAddEvento = async () => {
    const { descricao, data_inicio, data_fim } = this.state;
    if (!descricao || !data_inicio || !data_fim) {
      this.setState({
        error: "Preencha todos os dados para cadastrar o evento"
      });
    } else {
      try {
        await api.post("/eventos", {
          descricao,
          data_inicio,
          data_fim
        });
        //this.props.history.push("/app");
        return <Redirect to={"/app"} />;
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar o evento. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        Cadastro de evento
        <Form onSubmit={this.handleAddEvento}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Descrição do evento"
            onChange={e => this.setState({ descricao: e.target.value })}
          />
          <input
            type="text"
            placeholder="Data de início"
            onChange={e => this.setState({ data_inicio: e.target.value })}
          />
          <input
            type="text"
            placeholder="Data de término"
            onChange={e => this.setState({ data_fim: e.target.value })}
          />

          <ButtonSet>
            <button id="BtnSalvar" type="submit">
              Salvar
            </button>
            <button id="BtnHome">
              <Link to="/app" style={{ textDecoration: "none" }}>
                Início
              </Link>
            </button>
          </ButtonSet>
        </Form>
      </Container>
    );
  }
}

export default withRouter(AddEvento);
