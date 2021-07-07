import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {props.tabs.map(tab => (
              <Tab prop1={selectTabHandler} prop2={selectedTab} prop3={tab}/>)
            )
        };
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

tabs.propTypes.array(
  PropTypes.shape({
  healine: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}));