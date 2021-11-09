import "./App.css";
import Display from "./components/DisplayComponent";
import Header from "./components/HeaderComponent";
import { finnhub } from "finnhub";

// const api_key = finnhub.ApiClient.instance.authentications["api_key"];
// api_key.apiKey = "X4TSRYYBY6PGI3ZG"; // Replace this
// const finnhubClient = new finnhub.DefaultApi();

// finnhubClient.stockCandles(
//   "AAPL",
//   "D",
//   1590988249,
//   1591852249,
//   {},
//   (error, data, response) => {
//     console.log(data);
//   }
// );

// fetch(
//   "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&datatype=json&output_size=compact",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
//       "x-rapidapi-key": "bb67b49074mshb55c86fa47d71d8p13c3c2jsn0f885150e028",
//     },
//   }
// )
//   .then((response) => {
//     console.log(response.json());
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  );
}

export default App;
