import { useEffect, useState } from "react";
import classes from "../css/CryptoTable.module.css";

import SparklineChart from "./SparklineChart";

const TABLE_DATA_API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin&order=gecko_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y";

const Information = () => {
  let [tableData, setTableData] = useState([]);
  let tableContents = [];
  let USDollarFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const getTableData = async () => {
      try {
        const response = await fetch(TABLE_DATA_API);
        const data = await response.json();

        if (!response.ok) throw new Error(response.status);

        setTableData(data);
      } catch (error) {
        console.log(`Failed to fetch data: ${error} `);
      }
    };

    getTableData();
  }, []);

  const getLogo = (name) => {
    switch (name) {
      case "Bitcoin":
        return require("../assets/btc.png");
      case "Ethereum":
        return require("../assets/eth.png");
      case "BNB":
        return require("../assets/bnb.png");
      default:
        return require("../assets/btc.png");
    }
  };

  tableContents = tableData.map((coin) => {
    return (
      <tr key={coin.id}>
        <td className={`${classes["align-left"]} ${classes["coin-col"]}`}>
          <img src={getLogo(coin.name)} alt="" />
          <span className={classes["coin-name"]}>{coin.name}</span>
          <span className={classes["coin-symbol"]}>
            {coin.symbol.toUpperCase()}
          </span>
        </td>
        <td className={classes["align-left"]}>
          {USDollarFormatter.format(coin.current_price)}
        </td>
        <td
          className={`${classes["align-right"]} ${
            coin.price_change_percentage_1h_in_currency > 0
              ? classes["green-color"]
              : classes["red-color"]
          }`}
        >{`${coin.price_change_percentage_1h_in_currency.toFixed(2)}%`}</td>
        <td
          className={`${classes["align-right"]} ${
            coin.price_change_percentage_24h_in_currency > 0
              ? classes["green-color"]
              : classes["red-color"]
          }`}
        >{`${coin.price_change_percentage_24h_in_currency.toFixed(2)}%`}</td>
        <td
          className={`${classes["align-right"]} ${
            coin.price_change_percentage_7d_in_currency > 0
              ? classes["green-color"]
              : classes["red-color"]
          }`}
        >{`${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`}</td>
        <td className={classes["align-right"]}>
          {USDollarFormatter.format(coin.total_volume)}
        </td>
        <td className={classes["align-right"]}>
          {USDollarFormatter.format(coin.market_cap)}
        </td>
        <td className={classes["align-right"]}><SparklineChart data={coin.sparkline_in_7d.price} isGreen={coin.price_change_percentage_7d_in_currency > 0}/></td>
      </tr>
    );
  });

  return (
    <section className={classes["information-section"]}>
      <div className={classes["crypto-table"]}>
        <table>
          <thead>
            <tr>
              <th className={classes["align-left"]}>Coin</th>
              <th className={classes["align-left"]}>Price</th>
              <th className={classes["align-right"]}>1h</th>
              <th className={classes["align-right"]}>24h</th>
              <th className={classes["align-right"]}>7d</th>
              <th className={classes["align-right"]}>24h Vol</th>
              <th className={classes["align-right"]}>Market Cap</th>
              <th className={classes["align-center"]}>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>{tableContents}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Information;
