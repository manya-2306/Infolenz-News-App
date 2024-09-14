import './Header.css';

const Header = ({ search, onSearchChange, onSearchClick,categoryclick }) => {
  return (
    <div className="header">

      <div className="navbar">
        <big><h1>FACT-LENZ</h1></big>
        <img src="" alt="" />
        <h2>YOUR LENS TO THE WORLD'S MOST IMPORTANT STORIES</h2> 
        
        <div className="searchbar">

          <input type="text" placeholder="Search News" id='searchbox' 
            value={search} 
            onChange={onSearchChange} 
          />

          <button onClick={onSearchClick}>SEARCH</button>
        </div>
      </div>

      <div className="category">
        <button onClick={()=>{categoryclick('Sports')}}>SPORTS</button>
        <button onClick={()=>{categoryclick('Pop Culture')}}>POP CULTURE</button>
        <button onClick={()=>{categoryclick('Technology')}}>TECHNOLOGY</button>
        <button onClick={()=>{categoryclick('Politics')}}>POLITICS</button>
        <button onClick={()=>{categoryclick('Health')}}>HEALTH</button>
        <button onClick={()=>{categoryclick('Lifestyle')}}>LIFESTYLE</button>
      </div>
    </div>
  );
};

export default Header;
