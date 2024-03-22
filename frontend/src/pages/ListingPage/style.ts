import { FieldError } from 'react-hook-form';
import { styled } from 'styled-components';

interface StyledMainProps {
  error?: FieldError;
}

export const StyledMain = styled.main<StyledMainProps>`
  flex-grow: 1;
  background-color: var(--color-grey-7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 0;
  padding: 2rem 0;

  .blueBox {
    position: absolute;
    width: 100%;
    height: 20rem;
    background-color: var(--color-brand-1);
    z-index: -1;
  }

  .contentContainer {
    width: 90%;
    max-width: var(--content-container-limit);
  }

  .carSection {
    padding-top: 5rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .carInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .imageContainer {
      max-width: 100%;
      height: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
        max-width: 100%;
      }
    }
  }

  .imageContainer,
  .carData,
  .description,
  .photosContainer,
  .profileContainer,
  .posts,
  .commentInput {
    width: 100%;
    padding: 1rem;
    background-color: var(--color-grey-10);
    border-radius: 0.3rem;
  }

  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carData {
    h1 {
      color: var(--color-grey-1);
      margin-bottom: 1rem;
    }
    .tagsContainer {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tag {
      background-color: var(--color-brand-4);
      color: var(--color-brand-1);
      padding: 0.3rem;
      border-radius: 0.25rem;
    }

    button {
      cursor: pointer;
      padding: 0.4rem 0.5rem;
      border: 0.1rem solid var(--color-grey-3);
      border-radius: 0.3rem;

      text-align: center;
      font-size: 1rem;
      font-weight: 500;

      background-color: var(--color-brand-1);
      color: var(--color-white-fixed);
      margin-top: 2rem;

      transition: 0.2s;
      &:hover {
        opacity: 0.95;
        border-color: var(--color-brand-2);
        background-color: var(--color-brand-2);
      }
    }
  }

  .description {
    .title {
      margin-bottom: 1rem;
    }
  }

  .photosContainer {
    padding-bottom: 2.5rem;
  }

  .photosAndProfileSection {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .grid {
    margin-top: 1rem;
    display: grid;
    gap: 3%;
    grid-row-gap: 12%;
    grid-template-columns: repeat(3, 1fr);
    overflow-x: visible;
    max-width: 100%;
    li {
      background-color: var(--color-grey-7);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li > img {
      max-width: 100%;
      height: auto;
      width: auto;
    }
  }

  .profileContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    .initials {
      background-color: var(--color-brand-1);
      padding: 1rem;
      border-radius: 50%;
      color: var(--color-white-fixed);
      font-size: 1.5rem;
      font-weight: 500;
    }

    .profileDescription {
      color: var(--color-grey-2);
      text-align: justify;
      text-justify: inter-word;
      padding: 1rem;

      word-wrap: break-word;
      max-width: 100%;
    }

    button {
      background-color: var(--color-grey-0);
      color: var(--color-white-fixed);
      padding: 0.5rem 1rem;
      font-weight: 600;
      transition: 0.2s;

      &:hover {
        background-color: var(--color-grey-5);
        color: var(--color-grey-0);
      }
    }
  }

  .commentsSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .commentsTitle {
      margin-bottom: 1.4rem;
    }

    .userProfile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      margin-bottom: 1rem;

      .userInitials {
        background-color: var(--color-brand-1);
        padding: 0.4rem;
        border-radius: 50%;
        color: var(--color-white-fixed);
        font-size: 0.8rem;
        font-weight: 400;
      }
    }

    textarea {
      width: 100%;
      resize: none;
      padding: 0.5rem;
      box-sizing: border-box;

      outline: none;

      border: 0.122rem solid
        ${(props) =>
          props.error ? 'var(--color-alert-2)' : 'var(--color-grey-6)'};
      border-radius: 0.3rem;

      color: var(--color-grey-3);
      font-size: 0.8rem;
      font-family: var(--font-family-inter);

      &::placeholder {
        color: var(--color-grey-4);
      }

      &:focus {
        border-color: ${(props) =>
          props.error ? 'var(--color-alert-1)' : 'var(--color-brand-2)'};
      }
    }

    .inputErrorMessage {
      color: var(--color-alert-1);
      height: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .shortcutAndButton {
      align-items: center;
      margin-top: 0.8rem;

      button {
        margin-bottom: 1rem;
        padding: 0.5rem;
        color: var(--color-white-fixed);
        background-color: var(--color-brand-1);
        font-size: 0.8rem;
        font-weight: 600;
        border: 0.15rem solid transparent;

        transition: 0.2s;
        &:hover {
          background-color: var(--color-grey-5);
          border-color: var(--color-brand-1);
          color: var(--color-brand-1);
        }
      }

      .shortcutsContainer {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-size: 0.7rem;
        font-family: var(--font-family-inter);
        color: var(--color-grey-3);

        .shortcut {
          background-color: var(--color-grey-7);
          padding: 0.2rem 0.4rem;
          border-radius: 2rem;

          cursor: pointer;
          transition: 0.1s;
          &:hover {
            background-color: var(--color-grey-5);
            color: var(--color-grey-0);
          }
        }
      }
    }
  }

  @media (min-width: 640px) {
    .contentContainer {
      padding-top: 2rem;
    }
  }
  @media (min-width: 769px) {
    .blueBox {
      height: 25rem;
    }
    .contentContainer {
      position: relative;
      align-items: flex-start;
    }

    .carInfo {
      .imageContainer {
        height: 15rem;
      }
    }

    .photosAndProfileSection {
      gap: 1rem;
      margin-bottom: 0;
      position: absolute;
      top: 8rem;
      right: 0;

      width: 35%;
    }

    .tagsPriceContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
    }

    .carSection {
      width: 62%;
    }
    .commentsSection {
      width: 62%;
    }
  }

  @media (min-width: 1024px) {
    .carSection {
      width: 70%;
    }

    .carInfo {
      width: 100%;
      .imageContainer {
        height: 25rem;
      }
    }
    .commentsSection {
      width: 70%;
    }

    .photosAndProfileSection {
      width: 28%;
    }
  }
`;
