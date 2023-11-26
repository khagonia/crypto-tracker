import Card from "../utilities/Card";
import classes from "../css/TrackerCard.module.css"
import { useSelector } from "react-redux";
import Price from "./Price";

const TrackerCard = ({ symbol }) => {

  const price = useSelector(state => state.prices[symbol])

  let logo = '';
  switch(symbol.substr(0,3)){
    case 'btc':
      logo = require('../assets/btc.png');
      break;
    case 'eth':
      logo = require('../assets/eth.png');
      break;
    case 'bnb':
      logo = require('../assets/bnb.png');
      break;
    case 'xrp':
      logo = require('../assets/xrp.png');
      break;
    default:
      logo = require('../assets/eth.png');
  }

  
  return (
    <Card className={classes['tracker-card']}>
      <div className={classes['tracker-container']}>
        <div className={classes['tracker-logo']}>
          <img src={logo} alt="" />
        </div>
        <div className={classes['tracker-info']}>
          <p>{symbol.substr(0,3) + "/" + symbol.substr(3)}</p>
          <Price price={price} />
        </div>
      </div>
    </Card> 
  );
}

export default TrackerCard;