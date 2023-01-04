import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import DropdownButton from "./Component/DropdownButton";
import InputSearch from "./Component/InputSearch";

function App() {
  const [data, setData] = useState({});
  const [regionList, setRegionList] = useState([]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    search &&
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => {
          setData(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setData(res.data);
        let obj = {};
        res.data.map((item) => {
          obj[item.region] = item.region;
        });
        setRegionList(Object.keys(obj));
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="main">
        <div className="title">
          <span>Where in the world?</span>
          <button className="toggleTheme">Dark Mode</button>
        </div>
        <div className="searchSection">
          <InputSearch
            search={search}
            setSearch={(e) => setSearch(e.target.value)}
            onSubmit={handleSubmit}
          />
          <DropdownButton regionList={regionList} />
        </div>
        <div className="content">
          {(Array.isArray(data) &&
            data?.map((item, index) => <Card data={item} key={index} />)) || (
            <Card data={data} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
