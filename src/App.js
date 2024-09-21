import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import './components/Header/Header.css';
import Card from './components/Card/Card';
import './components/Card/Card.css'; 
import Footer from './components/Footer/Footer';
//import AboutUs from './components/Footer/Aboutus';  
//import './components/Footer/Aboutus.css';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("India");

  const API_KEY = "95fe4b51e4904fbdb5c88d0cc64d3a5b";

  const getData = async (search) => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log("Fetched data:", jsonData); // Log the entire response
        console.log("Articles:", jsonData.articles); // Log th
      setNewsData(jsonData.articles|| []);
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
    <Router>
      <div className="App">
        <Header 
          search={search} 
          onSearchChange={handleSearchChange} 
          onSearchClick={() => getData(search)}
          categoryclick={handleCategoryClick}
        />
        <Routes>
          <Route path="/" element={<Card data={newsData} />} /> 
          <Route path="/aboutus" element={<AboutUs />} />  {/* About Us page route */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
