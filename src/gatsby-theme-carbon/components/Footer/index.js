import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>Content</code> component receives a <code>buildTime</code> prop
      that to display your site's build time: {buildTime}
    </p>
  
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
   
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
