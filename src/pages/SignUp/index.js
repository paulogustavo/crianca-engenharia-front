import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    nome: "",
    telefone: "",
    endereco: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password, nome, telefone, endereco } = this.state;
    if (!username || !email || !password || !nome || !telefone || !endereco) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", {
          username,
          email,
          password,
          nome,
          telefone,
          endereco
        });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        Cadastro de Usuário
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome completo"
            onChange={e => this.setState({ nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="telefone"
            onChange={e => this.setState({ telefone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Endereço"
            onChange={e => this.setState({ endereco: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <button>
            <Link to="/" style={{ textDecoration: "none" }}>
              Fazer login
            </Link>
          </button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
