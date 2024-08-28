import React from 'react';
import './App.css';

import awsCloud from './graphics/aws.png';
import blankBadge from './graphics/blankBadge.png';

const Certifications2 = () => {
  return (
    <div className="certification-container">
      <div className="badge-row">
        <a href="https://www.credly.com/badges/895a5883-6fb2-4e21-8bbf-2461a2125a67" target="_blank" rel="noopener noreferrer">
          <img src={awsCloud} alt="AWS Cloud Certification" className="certification-badge" />
        </a>
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
      </div>
      <div className="badge-row">
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
        <img src={blankBadge} alt="Empty Badge" className="certification-badge" />
      </div>
    </div>
  );
};

export default Certifications2;
