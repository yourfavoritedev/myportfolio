import React from 'react';
import Section from '../../common/Section';
import Fade from 'react-reveal/Fade';
import facebookImage from '../../../assets/images/facebook.jpg';
import linkedinImage from '../../../assets/images/linkedin.jpg';
import stackoverflowImage from '../../../assets/images/stackoverflow.png';
import ScalableImage from '../../common/ScalableImage';

const Insights = () => {
  const images = [
    { img: linkedinImage, link: 'https://www.linkedin.com/in/ngochristopher/' },
    { img: facebookImage, link: 'https://www.facebook.com/DaKingslayer' },
    {
      img: stackoverflowImage,
      link: 'https://stackoverflow.com/users/10030970/christopher-ngo',
    },
  ];

  const createImages = () => {
    return images.map(item => {
      return <ScalableImage {...item} />;
    });
  };

  return (
    <Section>
      <div className="contact-section">
        <div className="container">
          <div className="title-group">
            <Fade>
              <h4 className="title-content">
                <div>I'm California-raised,</div>
                <div>wander between LA and the Bay,</div>
                <div>and welcome bribes in the form of Korean BBQ.</div>
              </h4>
            </Fade>
          </div>
          <Fade>
            <div className="description">
              Let's connect. I prefer{' '}
              <a
                className="Link"
                href="https://www.linkedin.com/in/ngochristopher/"
              >
                LinkedIn Messages more than anything.
              </a>
            </div>
            <div className="description">
              I will definitely 100% reply to a friendly message. :)
            </div>
          </Fade>
          <Fade>
            <div className="flex-wrapper">{createImages()}</div>
          </Fade>
        </div>
      </div>
    </Section>
  );
};

export default Insights;
