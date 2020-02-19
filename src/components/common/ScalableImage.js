import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: ${props => props.height || '100px'};
  width: ${props => props.width || '100px'};
`;

const ScalableImage = ({ img, link, height, width }) => {
  return (
    <div className="scalable-image">
      <a href={link}>
        <Image height={height} width={width} src={img} />
      </a>
    </div>
  );
};

export default ScalableImage;
