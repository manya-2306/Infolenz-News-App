import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import SidePanel from './components/SidePanel/SidePanel'; 

function App() {
    const [isDark, setIsDark] = useState(true);
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

    const handleCategoryClick = (category) => {
        setSearch(category);
        getData(category);
    };

    const handleToggleDark = () => {
        setIsDark(!isDark);  
    };
 
    useEffect(() => {
        getData('India');
    }, []);

    return (
        <div className={`App ${isDark ? 'dark-mode' : 'light-mode'}`}>
            <Header 
                search={search} 
                onSearchChange={handleSearchChange} 
                onSearchClick={() => getData(search)}
                categoryclick={handleCategoryClick}
                OnToggleDark={handleToggleDark}
                isDark={isDark}
            />
            <Card data={newsData} />
            <SidePanel /> 
            <Footer />
        </div>
    );
}

export default App;
