import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 70px 0px;
  background: url(${props => props.backgroundImage});
  background-attachment: ${props => (props.useParallax ? 'fixed' : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${props => props.backgroundColor};
`;

const Section = ({
  children,
  useParallax,
  backgroundImage,
  backgroundColor,
}) => {
  return (
    <Container
      useParallax={useParallax}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
    >
      {children}
    </Container>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.array,
  useParallax: PropTypes.bool,
  backgroundImage: PropTypes.string,
};
