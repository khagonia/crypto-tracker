const express = require("express");
const app = express();

const fetchNews = async () => {
  try {
    const response = await fetch(
      "https://cryptopanic.com/api/v1/posts/?auth_token=9a923f1825b91c9337b876dbf8d0e0310b7d7d3b&currencies=BTC,ETH,BNB&region=en&filter=hot&kind=news&public=true"
    );

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Failed to fetch data: ${error}`);
  }
};

app.get("/api/news", async (req, res) => {
  const newsRaw = await fetchNews();

  const filteredNews = newsRaw.results.reduce(
    (acc, data, index) => {
      const filteredData = {
        id: data.id,
        title: data.title,
        source: data.source.domain,
        soure_name: data.source.title,
        publish_date: [new Date(data.published_at)][0].toDateString(),
        currency: data.currencies[0].code,
        url: data.url,
      };

      if (index < 3) {
        acc.topNews.push(filteredData);
        return acc;
      }

      if (index < 10) {
        acc.sideNews.push(filteredData);
        return acc;
      }

      return acc;
    },
    { topNews: [], sideNews: [] }
  );

  console.log(`Data sent to: ${req.hostname}` );

  res.json(filteredNews);
});

app.listen(5000, () => {
  console.log("Server Stated on Port 5000");
});
