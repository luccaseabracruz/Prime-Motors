import { styled } from 'styled-components';

interface ProfileProps {
  color: number;
}

export const StyledMain = styled.main<ProfileProps>`
  background-color: var(--color-grey-8);
  section.container-profile {
    margin-bottom: 14rem;
    div.blue-color-box {
      position: relative;
      height: 26rem;
      background-color: var(--color-brand-1);
    }
    div.info-profile {
      position: absolute;
      width: 90%;
      max-width: 1000px;
      margin: auto;
      left: 0;
      right: 0;
      bottom: -50%;
      background-color: var(--color-grey-10);

      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      background-color: none;
      border-radius: 0.5rem;
      box-shadow: 0.1rem 0.15rem 0.3rem 0.05rem var(--color-grey-3);
      button.create-announce-btn {
        color: var(--color-brand-1);
        transition: 0.2s;
        &:hover {
          background-color: var(--color-brand-1);
          color: var(--color-white-fixed);
        }
      }
      div.initials-letter {
        height: 104px;
        width: 104px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: ${(props) => {
          const colorCode = props.color;
          return `var(--color-random-${colorCode})`;
        }};
        h2 {
          font-size: var(--font-size-32);
          color: white;
        }
      }
      div.container-name-type-user {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        span {
          width: 92px;
          text-align: center;
          color: var(--color-brand-1);
          border-radius: 0.2rem;
          background-color: var(--color-brand-4);
          padding: 0.2rem;
        }
      }

      .userDescription {
        word-wrap: break-word;
        text-align: justify;
      }
      button.create-announce-btn {
        border: 2px solid var(--color-brand-1);

        border-radius: 0.2rem;
        height: 48px;
        width: 160px;
      }
    }
  }

  .listSection {
    padding: 1rem 1rem;
    max-width: var(--content-container-limit);
  }

  div.pagination {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }

  div.pagesAndButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin: 2rem 0;
  }

  div.pagesAndButton > p,
  div.pagesAndButton span {
    color: var(--color-grey-2);
  }

  div.pagesAndButton span {
    opacity: 0.7;
  }

  div .previousNextBtnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  div.previousNextBtnContainer > button {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    background-color: transparent;
    border: none;
    color: var(--color-brand-1);
  }

  div.previousNextBtnContainer > button:hover {
    color: var(--color-brand-3);
  }

  .listingsTitle {
    margin: 1rem 0 2rem;
  }

  ul.carsList {
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding: 0 2rem 1.2rem 2rem;
    height: max-content;

    li {
      margin-bottom: 40px;
      .imageContainer {
        width: 100%;
        img {
          width: 20rem;
          height: 10rem;
          object-fit: 100%;
          border-radius: 4px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    div.listAndFilter {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
      padding-top: 2rem;
    }

    div.pagination {
      padding-top: 8rem;
    }

    ul.carsList {
      max-width: 1300px;

      margin: 0 auto 9rem;
      display: grid;
      gap: 3%;
      grid-template-columns: repeat(3, 1fr);
      overflow-x: visible;
      box-sizing: border-box;

      position: relative;
      min-height: 15rem;
    }

    section.container-profile {
      div.info-profile {
        width: 80%;
      }
      div.blue-color-box {
        height: 23rem;
      }
    }

    .listSection {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1024px) {
    ul.carsList {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 1200px) {
    padding: 0 0 1.2rem 0;
  }
`;
