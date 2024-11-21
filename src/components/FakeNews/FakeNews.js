import React from 'react';

const FakeNews = ({ headline }) => {
  return (
    <div className="fakenews-container">
      <h2>Fake News Detection</h2>
      <p>{headline}</p>
      <button>Check News</button>
    </div>
  );
};

export default FakeNews;
