import Trackers from "../Trackers";
import CryptoTable from "../CryptoTable";
import News from "../News";

const MainApp = () => {
  return (
    <div className="main-app">
      <Trackers />
      <CryptoTable />
      <News />
    </div>
  )
}

export default MainApp