import './Header.scss';
import PokeLogo from '../../images/pokiLogo.png';

const Header = () => {
  const a = 5;

  return (
    <div className="header">
      <div className="logo-box">
        <img className="logo" src={PokeLogo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
