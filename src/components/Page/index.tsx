import React from "react";
import { Card } from "../Card";

import { Container, Header, Context } from "./styles";

export const feedbackTypes = {
  FREE: {
    title: "Livro do mês",
    price: "R$ 40,00",
    active: "test"
  },
  BASICO: {
    title: "Meta de leitura",
    price: "R$ 110,00",
    active: "active"
  },
  PROFISSIONAL: {
    title: "Viajando nas histórias",
    price: "R$ 180,00",
    active: "test"
  },
};



const Page: React.FC = () => {
 
  return (
    <Container>
      <Header>
        <h1>Conheça nossos planos</h1>
        <p>
          Conheça nossas soluções e escolha o plano ideal para o seu próximo
          projeto.
        </p>
      </Header>
      <Context>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return <Card active={value.active} key={key} price={value.price} title={value.title} />;
        })}
      </Context>
    </Container>
  );
}; 

export default Page;
