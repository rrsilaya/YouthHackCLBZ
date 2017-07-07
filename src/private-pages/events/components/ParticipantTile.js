import React from 'react';
import FourthGrid from '../../../global/FourthGrid';

const ParticipantTitle = () => {
  return (
    <li>
      <h5 className="uk-accordion-title">Juan Dela Cruz</h5>
      <div className="uk-accordion-content">
        <ul className="uk-list uk-list-divider">
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
          <li>
            <FourthGrid label="Email" content="juandelacruz@up.edu.ph" />
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ParticipantTitle;
