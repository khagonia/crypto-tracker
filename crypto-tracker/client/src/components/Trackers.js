import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { priceActions } from "../store/prices-store";
import TrackerCard from "./TrackerCard";
import classes from "../css/Trackers.module.css";

const Trackers = () => {
  const pairs = useSelector((state) => Object.keys(state.prices));
  const dispatch = useDispatch();
  const priceRef = useRef(0);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${pairs
        .map((symbol) => {
          return symbol + "@ticker";
        })
        .join("/")}`
    );

    ws.onopen = () => {
      console.log("Connection Established");
    };

    ws.onmessage = (event) => {
      priceRef.current = JSON.parse(event.data);

      let { stream, data } = priceRef.current;
      dispatch(
        priceActions.updatePrice({
          symbol: stream.split("@")[0],
          price: parseFloat(data.c).toFixed(2),
        })
      );
    };

  }, []);

  return (
    <section className={classes["trackers-section"]}>
      <div>
        <h1> Top Cryptocurrency Price Updates and News </h1>
        <p> Get live price updates from our respectable data sources: Binance, CoinGecko and more! </p>
      </div>
      <div className={classes["trackers"]}>
        {pairs.map((symbol) => {
          return <TrackerCard symbol={symbol} key={symbol} />;
        })}
      </div>
    </section>
  );
};

export default Trackers;
