import React from 'react';
import Section from '../../common/Section';
import particleBackground from '../../../assets/images/particles.jpg';

const HomeHeader = () => {
  return (
    <Section useParallax={true} backgroundImage={particleBackground}>
      <div className="HomeHeader parallax">
        <div className="HomeHeader-content">
          <div className="subtitle">
            <em>Hey, I'm</em>
          </div>
          <div className="HomeHeader-content-name">Chris Ngo</div>
          <div className="subtitle">
            I write code, think about data, and create user-friendly
            experiences. Currently I'm a Software Engineer - Tech Lead at{' '}
            <a className="Link" href="https://floqast.com">
              FloQast
            </a>
          </div>
          <div className="HomeHeader-description">
            Checkout my answers to{' '}
            <a
              className="Link"
              href="https://stackoverflow.com/users/10030970/christopher-ngo"
            >
              popular stackoverflow questions
            </a>{' '}
            and{' '}
            <a className="Link" href="https://www.hackerrank.com/YourFavDev">
              challenges.
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeHeader;
