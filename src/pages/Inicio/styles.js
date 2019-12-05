import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonSet = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  padding-top: 15px;

  button {
    width: 160px;
    height: 55px;
    padding: 0 20px;
    margin-right: 10px;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }

  #BtnAddEvento {
    background: #fc6963 !important;
  }

  #BtnAddEscola {
    background: #63f5b0 !important;
  }

  #BtnVerEscolas {
    background: #fda601 !important;
  }
`;
