import React from 'react';
import HomeHeader from './HomeHeader';
import Resume from './Resume';
import Insights from './Insights';
import Slider from '../../common/Slider';
import Contact from './Contact';
import './App.css';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Slider useMenuWidget>
          <HomeHeader />
          <Resume />
          <Insights />
          <Contact />
        </Slider>
      </div>
    );
  }
}

export default MainPage;
