import React from 'react';
import './App.css';

import awsCloud from './graphics/aws.png';
import cybersecurity from './graphics/cybersecurity.png';
import securityPlus from './graphics/securityPlus.png';
import blankBadge from './graphics/blankBadge.png';

const Certifications2 = () => {
  return (
    <div className="certification-container">
      <div className="badge-row">
        <a href="https://www.credly.com/badges/895a5883-6fb2-4e21-8bbf-2461a2125a67" target="_blank" rel="noopener noreferrer">
          <img src={awsCloud} alt="AWS Cloud Certification" className="certification-badge" />
        </a>
        <a href="https://www.credly.com/badges/45d00fea-84e4-4c05-a8ab-0fe77ee5f8ff/public_url" target="_blank" rel="noopener noreferrer">
          <img src={cybersecurity} alt="Google Cybersecurity Certificate" className="certification-badge" />
        </a>
        <a href="https://www.credly.com/badges/ddc8413a-78b6-4dd7-938a-cf1a2b111bc5/public_url" target="_blank" rel="noopener noreferrer">
          <img src={securityPlus} alt="CompTIA Security+" className="certification-badge" />
        </a>
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
