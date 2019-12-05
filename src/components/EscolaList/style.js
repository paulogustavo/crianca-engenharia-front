import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-style: solid;
  border-color: gray;
  border-width: 2px;

  margin-top: 50px;
`;

export const Escola = styled.div`
  width: 600px;
  background: #fff;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  margin: 0 10px;

  tr {
    padding: 12px 20px;
    border-right: 2px;

    &:nth-child(2n-1) {
      background: #f5f5f5;
    }
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
`;
