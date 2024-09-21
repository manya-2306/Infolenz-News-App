import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import SidePanel from './components/SidePanel/SidePanel'; 

function App() {

    const [isDark, setIsDark] = useState(true);
    const [newsData, setNewsData] = useState([]);
    const [headline,setHeadline]=useState([]);
    const [search, setSearch] = useState("India");

    const API_KEY = "95fe4b51e4904fbdb5c88d0cc64d3a5b";

    const getData = async (search) => {
        try 
        {
            const allNews = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const allNewsJsonData = await allNews.json();
            setNewsData(allNewsJsonData.articles);
        }

        catch (error) 
        {
            console.error("Error fetching news data:", error);
        }
    };


    useEffect( ()=>{

        const getHeadline= async() =>{
            const trendingNews =await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
            const trendingNewsJsonData = await trendingNews.json();
            setHeadline(trendingNewsJsonData.articles[0].title);
        }
        
        getHeadline();
    
    },[])

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
                headline={headline}
            />
            
            <Card data={newsData} />
            <SidePanel /> 
            <Footer />
        </div>
    );
}

export default App;
