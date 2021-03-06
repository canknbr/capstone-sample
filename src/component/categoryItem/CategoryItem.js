import React from 'react';
import './category.styles.scss';

const CategoryItem = ({  imageUrl, title }) => {
  return (
    <div className="category-container" >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
