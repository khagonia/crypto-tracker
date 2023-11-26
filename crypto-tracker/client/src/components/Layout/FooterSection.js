import { Link } from 'react-router-dom'

import classes from "../../css/Footer.module.css";
import logo from "../../assets/logo2.png";

const FooterSection = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-content"]}>
        <div className={classes["footer-brand"]}>
          <img src={logo} alt="" />
          <span>Crypto Tracker</span>
        </div>
        <div className={classes["footer-info"]}>
          <span>
            You one-stop information shop about the top three cryptocurrencies
            in the world
          </span>
          <p>
            Crypto tracker is a simple web application that allows you to get
            updated with the latest prices, news, and other related information
            about the top three cryptocurrencies in the world, namely: Bitcoin
            (BTC), Ethereum (ETH), and Binance Coin (BNB). This app is built
            with React and uses the Binance API and Websockets as data source.
          </p>
        </div>
      </div>

      <div>
        <nav className={classes["footer-nav"]}>
          <div className={classes["footer-nav__internal"]}>
            <span>Navigate</span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={classes["footer-nav__socials"]}>
            <span>Socials</span>
            <ul>
              <li><a href="https://www.linkedin.com/in/kaiser-hagonia/">LinkedIn</a></li>
              <li><a href="https://github.com/khagonia">GitHub</a></li>
              <li><a href="https://facebook.com/kaiser.hagonia">Facebook</a></li>
              <li><a href="mailto:dev.khagnoia@gmail.com">Email</a></li>
            </ul>
          </div>
          <div className={classes["footer-contact"]}>
          
            <h3>Want to collaborate? Have suggestions, comments, or feature requests?</h3>
            <p>
               I'd love to hear from you! I contintually want to improve my skills and my projects
              using my latest knowledge. So please don't hesitate to provide constructive criticisms 
              about my work.
            </p>
            <p>
              Hit me up through my social media channels or
              email me at dev.khagonia@gmail.com or leave your email below so that
              I can contact you. <strong> I'm currently looking for
              full-time employment and part-time gigs.</strong>
            </p>
            <form className={classes['contact-form']}>
              <div className={classes['form-control']}>
                <input className={classes['form-input']} type="email" name="email" id="email" placeholder="Your email..."/>
              </div>
              <button className={classes['form-btn']}>Contact me</button>
            </form>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default FooterSection;
