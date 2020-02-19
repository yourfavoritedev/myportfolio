import React from 'react';
import Section from '../../common/Section';
import Fade from 'react-reveal/Fade';
import ChangingWords from '../../layout/ChangingWords';
import d3cover from '../../../assets/images/d3cover.jpg';
import algocover from '../../../assets/images/algocover.jpg';
import systemcover from '../../../assets/images/systemcover.jpg';
import ScalableImage from '../../common/ScalableImage';

const Insights = () => {
  const images = [
    {
      img: d3cover,
      link:
        'https://egghead.io/podcasts/writing-the-book-on-data-visualization-with-amelia-wattenberger',
      height: '300px',
      width: '226px',
    },
    {
      img: algocover,
      link: 'https://github.com/loiane/javascript-datastructures-algorithms',
      height: '300px',
      width: '226px',
    },
    {
      img: systemcover,
      link: 'https://dataintensive.net/',
      height: '300px',
      width: '226px',
    },
  ];

  const createImages = () => {
    return images.map(item => {
      return <ScalableImage {...item} />;
    });
  };

  return (
    <Section backgroundColor="#eee">
      <div className="container">
        <div className="title-group">
          <Fade>
            <h4 className="title-content">Get into my brain</h4>
            <ChangingWords
              words={['Think', 'Learn', 'Create', 'Reshape']}
              startingWord="Think"
              preText="I like to"
            />
          </Fade>
        </div>
        <Fade>
          <div>New opportunities to grow are always welcome.</div>
          <div>Here are the current challenges on my plate:</div>
        </Fade>
        <Fade>
          <div className="flex-wrapper">{createImages()}</div>
        </Fade>
      </div>
    </Section>
  );
};

export default Insights;
