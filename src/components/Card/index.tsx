import check from '../../assets/vector.svg'

import { Container, Header, Price, Info, List, Button, Line} from './styles';

interface CardProps{
  title: string;
  price: string;
  active: string;
}

export function Card({title, price, active}: CardProps){
  return (
    <Container>
      <Header className={active}>
        <h1>{title}</h1>
        <button>Pupular</button>
      </Header>
      <Price>
        <span>{price}<small>/mês</small></span>
      </Price>
      <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Info>
      <Line>
        <div></div>
      </Line>
      <List>
        <li>
          <img src={check}/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li>
          <img src={check}/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li>
          <img src={check}/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </List>
      <Button><button className={active}>ASSINAR</button></Button>
    </Container>
  );
}