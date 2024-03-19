import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 1rem;
  height: 15rem;
  background-color: var(--color-grey-0);
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .container {
    width: 100%;
    max-width: var(--content-container-limit);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .logo {
    color: var(--color-brand-4);
  }

  img {
    height: 1.5rem;
  }

  button {
    background-color: var(--color-grey-1);
    color: white;
    height: 2.8rem;
    width: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button > svg {
    height: 70%;
    width: 70%;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
    height: 8rem;

    .container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
