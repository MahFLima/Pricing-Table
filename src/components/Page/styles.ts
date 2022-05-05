import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-white);
  background: var(--blue);
  padding-top: 5rem;
  padding-bottom: 12rem;

  > h1 {
    font-weight: 700;
    font-size: 48px;
  }
  > p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;

export const Context = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 200px;
  left: 40px;
  gap: 20px;
`;
