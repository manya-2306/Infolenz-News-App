const Card=({data})=>{
    const altImage = "https://mediaengagement.org/wp-content/uploads/2022/12/News-Desert-Web-Tile-1.png";

    return(
        
        <div className="cardcontainer">

           {data.map((currelement,index,data) => {
           
           return (

                <div className="card" key={index}> 

                    <img src={currelement.urlToImage ? currelement.urlToImage : altImage} alt={currelement.title}/>
                    <div className="cardcontent">

                    <a href={currelement.title} onClick={()=>window.open(currelement.url)}>{currelement.title}</a>
                    <p>{currelement.description}  </p>
                    <button onClick={()=>window.open(currelement.url)}>READ MORE</button>
                    
                </div> 
                
            </div>

           );
           
           })}

        </div>
    );
}

export default Card