import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  align-items: center;
  max-width: 400px;

  input {
    flex: 1;
    height: 55px;
    width: 330px;
    padding: 0 20px;
    margin-top: 5px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border-style: solid !important;
    border-color: gray !important;
    border-width: 2px !important;
    border: ${props => (props.withError ? "2px solid #f00" : 0)};
  }
`;
