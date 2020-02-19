import React from 'react';

const Tile = ({
  image,
  link,
  company,
  title,
  period,
  location,
  description,
  icon,
}) => {
  return (
    <div className="tile">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="content">
        <div className="company">
          <a href={link}>{company}</a>
          <img className="icon" src={icon} />
        </div>
        <span></span>
        <div className="title">
          <span>{title}</span>, <em>{period}</em>
        </div>
        <div className="location">{location}</div>
        <br />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Tile;
