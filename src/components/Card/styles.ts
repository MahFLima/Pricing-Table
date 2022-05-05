import styled from "styled-components";

export const Container = styled.div`
  width: min(350px, 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--text-white);
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(142, 150, 185, 0.25);
  color: var(--text-blue);

  .active {
    background: var(--text-blue);
    color: white;
  }
  .test {
    > button {
      display: none;
    }
  }
`;

export const Header = styled.header`
  padding: 20px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-weight: 600;
    font-size: 18px;
  }
  > button {
    padding: 8px 24px;
    text-align: center;
    border: none;
    border-radius: 40px;
    color: white;
    background: var(--blue);
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 12px;
  }
`;
export const Price = styled.div`
  padding: 10px 30px;
  > span {
    font-weight: 700;
    font-size: 36px;

    > small {
      font-weight: 400;
      font-size: 18px;
      color: var(--text-gray);
      padding-left: 5px;
    }
  }
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--text-gray);
  padding: 0 30px;
  padding-top: 10px;
`;

export const Line = styled.div`
  width: 100%;
  padding: 20px 30px;

  > div {
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;

  > li {
    list-style: none;
    font-weight: 600;
    font-size: 14px;
    color: var(--text-gray);
    display: flex;
    gap: 0.5rem;
  }
`;
export const Button = styled.div`
  width: 100%;
  padding: 20px 30px;

  > button {
    width: 100%;
    padding: 12px 0;
    border: 1px solid var(--text-blue);
    background: transparent;
    border-radius: 10px;
    margin-top: 20px;
    color: var(--text-blue);

    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
