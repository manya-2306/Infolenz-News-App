import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Card from './components/Card/Card';
import './components/Card/Card.css'; 
import Footer from './components/Footer/Footer';


function App() {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("India");

  const API_KEY = "95fe4b51e4904fbdb5c88d0cc64d3a5b";

  const getData = async (search) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } 

    catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick=(category)=>{

    setSearch(category);
    getData(category);
  }

  useEffect(()=>{
    getData('India')
  },[])

  return (
    <div className="App">
      <Header 
        search={search} 
        onSearchChange={handleSearchChange} 
        onSearchClick={() => getData(search)}
        categoryclick={handleCategoryClick}
      />
      <Card data={newsData} />
      <Footer/>
    </div>
  );
}

export default App;