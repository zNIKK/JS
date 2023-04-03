import React from "react";
import { useDispatch } from "react-redux";

// import axios from "../../services/axios";
import * as exampleActions from "../../store/modules/example/actions";
import { Container } from "../../styles/GlobalStyles";
import { Paragrafo, Title } from "./styled";

export default function Login() {
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   async function getDate() {
  //     const response = await axios.get("/");
  //     const { data } = response.data;
  //     console.log(data);
  //   }
  //   getDate();
  // }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoSuccess());
  }

  return (
    <Container>
      <Title isRed>
        login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
