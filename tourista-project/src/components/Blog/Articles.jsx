import React, { useState } from 'react';
import './Articles.css';
import ArticleBtn from './ArticleBtn';

const Articles = () => {
  const [activeButton, setActiveButton] = useState('All articles');

  const handleButtonClick = (btnTitle) => {
    setActiveButton(btnTitle);
  };

  const buttons = [
    'All articles',
    'Food & Drink',
    'Inspiration',
    'Local Guides',
    'See & Do',
    'Travel Tips',
    'Where to stay',
  ];

  return (
    <div className="articles">
      <div className="container">
        <div className="articles-wrapper">
          {buttons.map((btnTitle) => (
            <ArticleBtn
              key={btnTitle}
              btnTitle={btnTitle}
              active={activeButton === btnTitle}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
