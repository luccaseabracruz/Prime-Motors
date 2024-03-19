import { styled } from 'styled-components';

export const StyledMain = styled.main`
  /* Welcome Box */
  .welcomeBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    color: var(--color-white-fixed);
    background-image: url('https://images.pexels.com/photos/3221165/pexels-photo-3221165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    background-position: 53% 70%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  .welcomeBox:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 60%,
      #000 100%
    );
  }

  .welcomeBox h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  .welcomeBox p {
    text-align: center;
  }

  .listAndFilter {
    padding: 1rem;
    max-width: var(--content-container-limit);
    margin: 0 auto;
  }

  /* Filter */
  .filterContainer {
    width: 100%;
    max-width: 400px;
    height: max-content;
    margin: 0 auto;
    padding: 1rem;

    background-color: var(--color-white-fixed);

    border-radius: 8px;

    position: absolute;
    top: 128px;
    left: 0;

    z-index: 10;

    box-shadow: 0px 0px 19px 3px rgba(0, 0, 0, 0.6);
  }

  .filterHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .filterHeader > .filterTitle {
    color: var(--color-grey-1);
  }

  .filterHeader > .closeBtn {
    background-color: transparent;
  }

  .filterHeader > .closeBtn > svg {
    color: var(--color-grey-3);
    height: 1.1rem;
    width: 1.1rem;
  }
  /* apagar pra baixo */
  .attribute {
    margin-bottom: 1.5rem;
  }

  .attribute > .title {
    font-size: var(--font-size-28);
    font-family: var(--font-family-lexend);
    font-weight: var(--font-weight-600);

    margin-bottom: 0.7rem;
    color: var(--color-grey-0);
  }
  .attribute > .attributeOption {
    font-size: var(--font-size-16);
    font-family: var(--font-family-lexend);
    font-weight: var(--font-weight-500);

    margin: 0.5rem 0;
    margin-left: 10px;
    color: var(--color-grey-3);
    cursor: pointer;

    &:hover {
      color: var(--color-brand-1);
    }
  }

  /* Cars List */
  .carsList {
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding: 0 2rem 1.2rem 2rem;
    height: max-content;

    position: relative;
    min-height: 15rem;
  }

  /* Pagination */
  .pagination {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }

  .filterBtn {
    width: 85%;
    max-width: 30rem;
    font-size: 1.2rem;
    margin: 2.5rem 0 0;
    border: 2px solid black;
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
    border: none;
  }

  .pagesAndButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin: 2rem 0;
  }

  .pagesAndButton > p,
  .pagesAndButton span {
    color: var(--color-grey-2);
  }

  .pagesAndButton span {
    opacity: 0.7;
  }

  .previousNextBtnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .previousNextBtnContainer > button {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    background-color: transparent;
    border: none;
    color: var(--color-brand-1);
  }

  .previousNextBtnContainer > button:hover {
    color: var(--color-brand-3);
  }

  .showFilters {
    display: block;
  }

  .hideFilters {
    display: none;
  }

  @media (min-width: 768px) {
    .welcomeBox {
      height: 30rem;
      background-image: url('https://images.pexels.com/photos/1179579/pexels-photo-1179579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    }

    .listAndFilter {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      padding: 3rem 0;
    }

    .carsList {
      display: grid;
      gap: 3%;
      grid-template-columns: repeat(3, 1fr);
      overflow-x: visible;
      box-sizing: border-box;
    }

    .pagination {
      padding-top: 8rem;
    }
  }

  @media (min-width: 1024px) {
    .filterContainer {
      width: 25%;
      margin: 0;
      padding: 0 2rem 1rem 2rem;

      background-color: var(--color-white-fixed);

      position: static;

      display: block;
      box-shadow: none;
    }

    .attribute > .title {
    }
  }

  @keyframes modalAppear {
    0% {
      transform: translateX(-200%);
    }

    100% {
      transform: translate(0);
    }
  }

  .slideRigth {
    animation: modalAppear;
    animation-duration: 0.5s;
  }
`;
