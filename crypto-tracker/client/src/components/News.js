import classes from "../css/News.module.css";
import sampleImage from "../assets/btc.png";
import { useEffect, useState } from "react";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const response = await fetch("/api/news");

        if (!response.ok) throw new Error(response.status);

        const data = await response.json();

        setNewsData(data);
      } catch (error) {
        console.log(`Failed to fetch news data: ${error}`);
      }
    };

    getNewsData();
  }, []);

  const topNews = newsData.topNews ? (
    newsData.topNews.map((news) => {
      return (
        <div key={news.id}>
          <div className={classes["news-card"]} style={{'--coin': `'${news.currency}'` }}>
            <img src={sampleImage} alt="" />
            <h3 className={classes["news-headline"]}>
              <a href={news.url}>{news.title}</a>
            </h3>
            <div className={classes["news-info"]}>
              <p className={classes["news-source"]}>FROM {news.source}</p>
              <p className={classes["news-date"]}>
                {news.publish_date}
              </p>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p>Loading...</p>
  );

  const sideNews = newsData.sideNews ? newsData.sideNews.map((news) => {
    return (
      <a href={news.url} key={news.id} >
        <div>
          <span className={classes["side-headline"]}>{news.title}</span>
          <span className={classes["side-source"]}> - from {news.source}</span>
        </div>
      </a>
    );
  }) : <p>Loading...</p>;

  console.log(newsData)
  return (
    <section className={classes["news-section"]}>

      <div className={classes["news-section__title"]}>
        <h2>Latest Cryptocurrency News </h2>
        <span>(powered by CryptoPanic)</span>
      </div>

      <div className={classes["news-container"]}>

        <div className={classes["top-news"]}>
          {topNews}
        </div>

        <div className={classes["side-news"]}>
          <h3>Other News</h3>
          {sideNews}
        </div>

      </div>

    </section>
  );
};

export default News;
