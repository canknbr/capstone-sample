import React from 'react';
import CategoryItem from '../categoryItem/CategoryItem.js';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(category => {
        return <CategoryItem {...category} />;
      })}
    </div>
  );
};

export default Directory;
