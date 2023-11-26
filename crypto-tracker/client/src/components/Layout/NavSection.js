import classes from '../../css/NavSection.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';

const NavSection = () => {
  return (
    <header className={classes['nav-header']}>
      <nav className={classes['nav-section']}>
        <div className={classes['nav-brand']}>
          <img src={logo} alt="" />
          <span>Crypto Tracker</span>
        </div>
        <ul className={classes['nav-links']}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Looking for Work:
            <Link style={{
            backgroundColor: 'rgb(57,97,251)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '3px',
            textDecoration: 'none',
            marginLeft: '1rem'}} to="/contact">Contact me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavSection;