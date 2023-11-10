import React from 'react';
import './ArticleBtn.css';

const ArticleBtn = ({ btnTitle, active, onClick }) => {
  return (
    <div className="article-btn">
      <button
        className={active ? 'button-active' : ''}
        onClick={() => onClick(btnTitle)}
        type="button"
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default ArticleBtn;
