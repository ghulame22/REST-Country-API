import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import DropdownButton from "./DropdownButton";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import { Dark } from "./Dark";
import { Light } from "./Light";
import Layout from "./Layout/Layout";

function Home({thisTheme}) {
  const [data, setData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [regionList, setRegionList] = useState([]);
  const [search, setSearch] = useState("");
  // const [theme, setTheme] = useState("dark");
  // const [thisTheme, setThisTheme] = useState({});

  // const toggleTheme = () => {
  //   if (theme === "Dark") {
  //     setTheme("Light");
  //     setThisTheme({ ...Light });
  //   } else {
  //     setTheme("Dark");
  //     setThisTheme({ ...Dark });
  //   }
  // };

  // useEffect(() => {
  //   setTheme("Dark");
  //   setThisTheme(Dark);
  // }, []);

  const regionFilter = (index) => {
    let tempArr = [...originalData];
    let region = tempArr.filter((item) => item.region === regionList[index]);
    setData(region);
  };

  const navigate = useNavigate();

  const cardPage = (index) => {
    // console.log("HomePage", data[index].capital);
    // let obj = {};
    // data.map((item) => {
    //   if(item.name.nativeName)
    //   console.log("Kagaj",Object.values(item.name.nativeName)[0].common)
    // });
    // console.log("Teja",Object.entries(obj));
    navigate("/CardPage", {
      state: { data: data[index], thisTheme: { thisTheme } },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search &&
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => {
          setData(res.data);
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
      <Layout>
        <div className="main">
          {/* <Navbar toggleTheme={toggleTheme} thisTheme={thisTheme} /> */}
          <div className="searchSection">
            <InputSearch
              search={search}
              setSearch={(e) => setSearch(e.target.value)}
              onSubmit={handleSubmit}
              thisTheme={thisTheme}
            />
            <DropdownButton
              regionList={regionList}
              regionFilter={regionFilter}
              thisTheme={thisTheme}
            />
          </div>
          <div className="content">
            {(Array.isArray(data) &&
              data?.map((item, index) => (
                <Card
                  data={item}
                  key={index}
                  cardPage={cardPage}
                  index={index}
                  thisTheme={thisTheme}
                />
              ))) || <Card data={data} thisTheme={thisTheme} />}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
