import React, { Component } from "react";
import { Container } from "./styles";
import { Link, withRouter } from "react-router-dom";
import EventoList from "../../components/EventoList/index";
import api from "../../services/api";

class ViewEvento extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      eventos: []
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    await api.get(`/eventos/` + id).then(res => {
      console.log(res.data);
      this.setState({
        eventos: [res.data],
        error: false
      });
    });
  }

  render() {
    return (
      <Container>
        <EventoList eventos={this.state.eventos} />
        <hr />
        <Link to="/app">Página Inicial</Link>
      </Container>
    );
  }
}

export default withRouter(ViewEvento);
