const Card = ({ data }) => {
    const altImage = "https://mediaengagement.org/wp-content/uploads/2022/12/News-Desert-Web-Tile-1.png";

    // Check if data is undefined or not an array, and provide a fallback
    if (!Array.isArray(data) || data.length === 0) {
        return <div>No data available.</div>; // Or return null or a loading state
    }

    return (
        <div className="cardcontainer">
            {data.map((currelement, index) => (
                <div className="card" key={index}>
                    <img src={currelement.urlToImage || altImage} alt={currelement.title || "No title available"} />
                    <div className="cardcontent">
                        <a href={currelement.url} onClick={() => window.open(currelement.url)}>
                            {currelement.title || "No title available"}
                        </a>
                        <p>{currelement.description || "No description available."}</p>
                        <button onClick={() => window.open(currelement.url)}>READ MORE</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
