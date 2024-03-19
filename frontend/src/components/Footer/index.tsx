import { StyledFooter } from './style';
// import Logo from '../../utils/images/logo2.svg';
import { BiChevronUp } from 'react-icons/bi';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        {/* <img src={Logo} alt='brand logo' /> */}
        <h1 className='heading-5-600 logo'>Prime Motors</h1>
        <p className='text-style-text-body-2-400'>
          © 2024 - Todos os direitos reservados.
        </p>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
        >
          <BiChevronUp />
        </button>
      </div>
    </StyledFooter>
  );
};
