import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";
import { ButtonSet } from "../AddEscola/styles";

class AddEscola extends Component {
  state = {
    nome: "",
    sigla: "",
    endereco: "",
    tipo_instituicao_ensinos: [],
    tipo_instituicao_ensino_id: "",
    error: ""
  };

  async componentDidMount() {
    await api.get(`/tipo_instituicao_ensinos`).then(res => {
      console.log(res.data);
      this.setState({
        tipo_instituicao_ensinos: res.data,
        error: false
      });
    });
  }

  handleAddEscola = async () => {
    const { nome, sigla, endereco, tipo_instituicao_ensino_id } = this.state;
    if (!nome || !sigla || !endereco || !tipo_instituicao_ensino_id) {
      this.setState({
        error: "Preencha todos os dados para cadastrar a escola"
      });
    } else {
      try {
        await api.post("/instituicao_ensinos", {
          nome,
          sigla,
          endereco,
          tipo_instituicao_ensino_id
        });
        return <Redirect to={"/app"} />;
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar a escola. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        Cadastro de Escola
        <Form onSubmit={this.handleAddEscola}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome da escola"
            onChange={e => this.setState({ nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="Sigla da escola"
            onChange={e => this.setState({ sigla: e.target.value })}
          />
          <input
            type="text"
            placeholder="Endereço da escola"
            onChange={e => this.setState({ endereco: e.target.value })}
          />
          <div>
            <label htmlFor="select">Tipo escola</label>
            <select id="select">
              <option value="" />
              {this.state.tipo_instituicao_ensinos.map(option => (
                <option key={option.id} value={option.id}>
                  {option.nome}
                </option>
              ))}
            </select>
          </div>

          <ButtonSet>
            <button id="BtnSalvar" type="submit">
              Salvar Escola
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

export default withRouter(AddEscola);
