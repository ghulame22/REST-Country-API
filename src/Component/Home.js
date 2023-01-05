import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import DropdownButton from "./DropdownButton";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  const [data, setData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [regionList, setRegionList] = useState([]);
  const [search, setSearch] = useState("");

  const regionFilter = (index) => {
    let tempArr = [...originalData];
    let region = tempArr.filter((item) => item.region === regionList[index]);
    setData(region);
  };

  const navigate = useNavigate();
  const cardPage = () => {
    navigate("/CardPage");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search &&
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => {
          setData(res.data[0]);
        })
        .catch((err) => {
          alert("Enter a valid name");
          // console.log(err);
        });
  };
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setData(res.data);
        setOriginalData(res.data);
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
        <Navbar />
        <div className="searchSection">
          <InputSearch
            search={search}
            setSearch={(e) => setSearch(e.target.value)}
            onSubmit={handleSubmit}
          />
          <DropdownButton regionList={regionList} regionFilter={regionFilter} />
        </div>
        <div className="content">
          {(Array.isArray(data) &&
            data?.map((item, index) => (
              <Card data={item} key={index} cardPage={cardPage} />
            ))) || <Card data={data} />}
        </div>
      </div>
    </>
  );
}

export default Home;
