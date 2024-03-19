// import Logo from '../../utils/images/prime_motors_logo.svg';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { StyledHeader } from './style';
import { useContext, useState } from 'react';
import { LinkStyledToLogin, LinkStyledToRegister } from '../../styles/Buttons';
import { useNavigate } from 'react-router-dom';
import { useAuth, useLayout } from '../../hooks';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { ModalContext } from '../../providers/ModalProvider';
// import { useAuth, useModal } from '../../hooks';

export const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, getTwoInitials, handleLogout, getRandomColor } = useAuth();
  const { windowWidth } = useLayout();
  const { handleShowModal } = useContext(ModalContext);

  const navigate = useNavigate();

  const colorCode = getRandomColor(user?.id || 1);

  return (
    <StyledHeader color={colorCode}>
      <div className='menuContainer'>
        <div className='brandAndButton'>
          <div className='brandContainer' onClick={() => navigate('/')}>
            {/* <img src={Logo} alt='brand logo' /> */}
            <h1 className='heading-5-600 logo'>Prime Motors</h1>
          </div>
          <button
            onClick={() => {
              setShowNavMenu(!showNavMenu);
            }}
          >
            {showNavMenu ? <GrClose /> : <FaBars />}
          </button>
        </div>
        <nav className={showNavMenu ? 'active' : 'hidden'}>
          {user ? (
            <div
              className='profileContainer'
              onClick={() =>
                windowWidth > 640 ? setShowProfileMenu(!showProfileMenu) : null
              }
            >
              <div className='profile'>
                <div className='initials'>{getTwoInitials(user.full_name)}</div>
                <p className='heading-7-500'>{user.full_name}</p>
                <div
                  className={
                    windowWidth > 640
                      ? 'openProfileButton active'
                      : 'openProfileButton hidden'
                  }
                >
                  {showProfileMenu ? <BiChevronUp /> : <BiChevronDown />}
                </div>
              </div>
              <div
                className='profileFeatures'
                id={
                  windowWidth > 640 && !showProfileMenu
                    ? 'hidden'
                    : 'profileFeatures'
                }
              >
                <p
                  onClick={() => {
                    handleShowModal('editUser');
                  }}
                >
                  Editar perfil
                </p>
                <p
                  onClick={() => {
                    handleShowModal('editAddress');
                  }}
                >
                  Editar endereço
                </p>
                {user.is_seller && (
                  <p onClick={() => navigate(`/profile/${user.id}`)}>
                    Meus Anúncios
                  </p>
                )}
                <p
                  onClick={() => {
                    handleLogout();
                  }}
                  className='logout'
                >
                  Sair
                </p>
              </div>
            </div>
          ) : (
            <>
              <LinkStyledToLogin
                className='loginBtn buttons-style-button-size-big'
                to={'/login'}
              >
                Fazer Login
              </LinkStyledToLogin>
              <LinkStyledToRegister
                className='buttons-style-button-size-big'
                to={'/register'}
              >
                Cadastro
              </LinkStyledToRegister>
            </>
          )}
        </nav>
      </div>
    </StyledHeader>
  );
};
