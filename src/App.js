import "./App.css";
import Card from "./Component/Card";
import DropdownButton from "./Component/DropdownButton";
import InputSearch from "./Component/InputSearch";

function App() {
  return (
    <>
      <div className="main">
        <div className="title">
          <span>Where in the world?</span>
          <button className="toggleTheme">Dark Mode</button>
        </div>
        <div className="searchSection">
          <InputSearch />
          <DropdownButton />
        </div>
        <div className="content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
