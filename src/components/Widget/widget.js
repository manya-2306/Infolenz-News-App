import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './dark-widget.css';
import './light-widget.css';

const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headlines, setHeadlines] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState('');

  useEffect(() => {
    const fetchHeadlines = () => {
      Papa.parse('/manual_testing.csv', {
        download: true,
        header: true,
        complete: ({ data }) => {
          const parsedHeadlines = data.map((row) => ({
            headline: row.title || 'Untitled',
            content: row.text || '',
          }));
          setHeadlines(parsedHeadlines);
        },
      });
    };

    fetchHeadlines();
  }, []);

  const toggleWidget = () => setIsOpen((prev) => !prev);

  const handleHeadlineClick = (content) => setSelectedArticle(content);

  return (
    <div className={`fun-widget ${isOpen ? 'open' : ''}`} onClick={toggleWidget}>
      <div className="widget-icon">
        <span role="img" aria-label="detective">🕵️‍♂️</span>
      </div>
      
      {isOpen && (
        <div className="widget-content" onClick={(e) => e.stopPropagation()}>
          <h1 className="widget-title">TRENDING NEWS!!</h1>

          <div className="headlines">
            { headlines.length ? (
              headlines.map( ({ headline, content }, idx) => (

                <div key={idx} className="eachheadline" onClick={() => handleHeadlineClick(content)}> {headline} </div>
              ))) : <p>Loading headlines...</p>
            }
          </div>

          <textarea
            id="article-box"
            value={selectedArticle}
            placeholder="Select or paste an article here..."
            readOnly
          />

          <button className='check'>CHECK NOW</button>

        </div>
      )}
    </div>
  );
};

export default Widget;
