import styled from 'styled-components';

export const StyledRageFilter = styled.div`
  width: 100%;
  margin-top: 30px;
  .title {
    font-size: var(--font-size-28);
    font-family: var(--font-family-lexend);
    font-weight: var(--font-weight-600);

    margin-bottom: 0.7rem;
    color: var(--color-grey-0);
  }

  .valuesContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .valuesContainer .value {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* gap: 0.15rem; */
    box-sizing: border-box;
    max-width: 100%;
  }

  .valuesContainer .value .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-grey-0);
    border-radius: 0.25rem;
    padding: 0.2rem;
    font-size: 0.8rem;
  }
  .valuesContainer .value .inputContainer > input {
    width: 80%;
    border: none;
    outline: none;
  }
`;
