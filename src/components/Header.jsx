import logo from '../assets/img/blue.png';
import text from '../assets/img/text.png';
import './header.css';

export const Header = () => (
  <div className='header'>
    <div className='header-logo'>
      <img src={logo} alt='' className='header-logo_img' />
      <img src={text} alt='' className='header-logo_text' />
    </div>
    <div className='header-nav'></div>
  </div>
);
