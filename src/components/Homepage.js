import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';


import Carbon from '../images/reservation-background.jpg';


const FirstLeftText = () => <p>PoT component</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the{' '}
    
  </p>
);

const BannerText = () => <h1>IBM Integration PoT</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
