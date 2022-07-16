import styled from "styled-components";

export const DivPai = styled.div`
  display: flex;
  border: solid 3px;
  width: 360px;
  height: 584px;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;
export const DivFormNovaTarefa = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex-direction: column;
  margin-top: 67px;
  width: 292px;
  height: 54px;
`;

export const FormNT= styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 67px;
  width: 292px;
  height: 54px;
`;
export const HeaderApp = styled.header`
  background-color: #5600e8;
  width: 360px;
  height: 6vh;
`;
export const InputTarefa = styled.input`
  height: 400px;
  border: 1px solid #5500e8;
  min-height: 4.5vh;
  border-radius: 3px;
`;

export const BottaoTarefa = styled.button`
  box-shadow: inset 0px 1px 0px 0px #efdcfb;
  background: linear-gradient(to bottom, #5500e8 5%, #5500e8 100%);
  background-color: #5500e8;
  border-radius: 5px;
  border: 1px solid #5500e8;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 46px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #5500e8;
  text-align: center;
  font-weight: normal;
  padding-top: 10px;
  letter-spacing: 1px;
  margin-top: 20px;
`;

export const ListaTarefas = styled.ul`
  margin-top: 100px;
  font-size: 18px;
  li{
    font-weight: bold;
    list-style: none;
  }
`;
export const InputListaTarefa = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;
export const InputLabel = styled.label`
  align-items: center;
  color: black;
  font-weight: normal;
`;
