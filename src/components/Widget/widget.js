import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './dark-widget.css';
import './light-widget.css';

const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headlines, setHeadlines] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState('');

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

  // const checkFakeNews = () => {
  //   if (!selectedArticle.trim()) return;

  //   setIsChecking(true);
  //   setTimeout(() => {
  //     const isFake = Math.random() > 0.5;
  //     setResult(isFake ? 'FAKE' : 'REAL');
  //     setIsChecking(false);
  //   }, 3000); 
  // };

  return (
    <div className={`fun-widget ${isOpen ? 'open' : ''}`} onClick={toggleWidget}>
      <div className="widget-icon">
        <span role="img" aria-label="detective">🕵️‍♂️</span>
      </div>
      {isOpen && (
        <div className="widget-content" onClick={(e) => e.stopPropagation()}>
          <h1 className="widget-title">Detect Fake News!</h1>

          <div className="headline-list">
            {headlines.length ? (
              headlines.map(({ headline, content }, idx) => (
                <div
                  key={idx}
                  className="eachheadline"
                  onClick={() => handleHeadlineClick(content)}
                >
                  {headline}
                </div>
              ))
            ) : (
              <p>Loading headlines...</p>
            )}
          </div>

          <textarea
            id="article-box"
            value={selectedArticle}
            placeholder="Select or paste an article here..."
            readOnly
          />

          <button className='check'>CHECK NOW</button>

          {/* {result && (
            <div className={`result ${result.toLowerCase()}`}>
              <p>{result === 'FAKE' ? '🚫 Fake News Alert!' : '✅ Real News Verified!'}</p>
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Widget;
