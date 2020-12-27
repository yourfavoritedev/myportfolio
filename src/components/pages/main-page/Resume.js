import React from 'react';
import Section from '../../common/Section';
import Tile from '../../common/Tile';
import floqastImage from '../../../assets/images/floqast.jpg';
import sonyImage from '../../../assets/images/sony.jpg';
import investcloudImage from '../../../assets/images/investcloud.jpg';
import hashtagIcon from '../../../assets/images/hashtag.png';
import movieIcon from '../../../assets/images/movie.png';
import cashIcon from '../../../assets/images/cash.png';
import sonyuniverseImage from '../../../assets/images/sonyuniverse.png';
import dualshockIcon from '../../../assets/images/dualshock.png';
import expensifyImage from '../../../assets/images/expensify.png';
import uciImage from '../../../assets/images/uci.jpg';
import cloudIcon from '../../../assets/images/cloud.png';
import smileyIcon from '../../../assets/images/smiley.png';
import Fade from 'react-reveal/Fade';

const Resume = () => {
  const tiles = [
    {
      image: floqastImage,
      company: 'FloQast',
      link: 'https://floqast.com',
      title: 'Software Enginner - Tech Lead',
      period: 'Since October 2019',
      location: 'Sherman Oaks, CA',
      description:
        'My team works on building amazing user experiences for FloQast users. I help carry out the top-to-bottom design and implementation of our Email Campaign module. From database-design to component optimization, I play a lead role in integrating every feature of our application. We create automation tools to push FinTech forward.',
      icon: hashtagIcon,
    },
    {
      image: sonyImage,
      company: 'Sony Pictures',
      link: 'https://www.sonypictures.com/',
      title: 'Web Developer',
      period: 'Fall 2017 - September 2019',
      location: 'Culver City, CA',
      description:
        'Sony helped me find my passion for software-development. Initially I worked on maintaining marketing sites that were built on vanilla JavaScript. By 2018, it was time for us to introduce a much more elegant way of developing and sustatining our websites. This enabled me to apply my React and MERN stack knowledge extensively. My team and I were able to refactor all 7 portals to this new architecture within a year.',
      icon: movieIcon,
    },
    {
      image: investcloudImage,
      company: 'InvestCloud Inc.',
      link:
        'https://www.investcloud.com/Membership/Apps/v4IcHomePage_WF_App.aspx?#!/w/v4ichomepagewfapp?s=v4homeholderapp',
      title: 'Software Developer',
      period: 'Fall 2018 - September 2019',
      location: 'West Hollywood, CA',
      description:
        'InvestCloud is an LA-based startup that creates digital solutions for the banking industry. I led the development for a rich front-end prototype used to secure a partnership with Citibank. This included both a desktop and native application for both the U.S. and Asia. Serving as the lead-dev, I expedited sprints by spearheading feature-development, code-reviews and release-management.',
      icon: cloudIcon,
    },
    {
      image: sonyuniverseImage,
      company: 'Sony Universe',
      link: 'https://www.sonyuniverse.org',
      title: 'Project Lead',
      period: 'Fall 2018 - September 2019',
      location: 'Culver City, CA',
      description:
        "As a developer with Sony, I helped create an enterprise social-media application for our employees. With inspirations from Slack, LinkedIn and Twitch, I've engineered a completely new experience. Registered Sony-employees have access to all features which include chat, social-networking and streaming gameplay.",
      icon: dualshockIcon,
    },
    {
      image: expensifyImage,
      company: 'Expensify',
      link: 'https://cngo-expensify-app.herokuapp.com/',
      title: 'A New Life',
      period: 'Fall 2017',
      location: 'Los Angeles, CA',
      description:
        'This was my very first full-stack application! I learned about web-development for the first-time. From "Hello World" to "npm install" to "Why must you hurt me this way Redux?" It was a gritty experience, but I still think fondly of those times. This project helped me start as a self-taught developer. Now I can read documentation and search for the right answers on stackoverflow.',
      icon: cashIcon,
    },
    {
      image: uciImage,
      company: 'University of California, Irvine',
      link: 'https://uci.edu/',
      title: 'Business Economics',
      period: 'Earned 2016',
      location: 'Irvine, CA',
      description:
        'UCI gave me the gift of wondering what better things I can do with my time than be at lecture. Being a Slytherin at heart, I truly embraced the entrepreneurial spirit of "lets be successful outside the classroom." My four years of college taught me to think outside-the-box as well as expand, challenge, and adjust my view of traditional systems.',
      icon: smileyIcon,
    },
  ];

  const renderTiles = () => {
    return tiles.map((tile, index) => {
      return (
        <Fade key={index}>
          <Tile {...tile} />
        </Fade>
      );
    });
  };

  return (
    <Section>
      <div className="container">
        <div className="title-group">
          <Fade>
            <h4 className="title-content">Here's what I've done so far</h4>
          </Fade>
        </div>
        {renderTiles()}
      </div>
    </Section>
  );
};

export default Resume;
