import { useEffect, useRef } from "react";
import classes from "../css/TrackerCard.module.css"

const Price = ({ price }) => {

  const prevPrice = useRef(0);
  const displayPrice = useRef(null);

  useEffect(() => {
    if(prevPrice.current > price) {
      displayPrice.current = <h2 className={classes['tick-green']}> 
      {parseFloat(price).toLocaleString(undefined, {minimumFractionDigits: 2})} &uarr; </h2>;
    }

    else if (prevPrice.current < price) {
      displayPrice.current = <h2 className={classes['tick-red']}> 
      {parseFloat(price).toLocaleString(undefined, {minimumFractionDigits: 2})} &darr; </h2>;
    }

    else displayPrice.current = <h2> {price} - </h2>
    
    prevPrice.current = price;
  }, [price])


  return (
    <>
      {prevPrice.current ? displayPrice.current : '-'}
    </>
  )
}

export default Price;