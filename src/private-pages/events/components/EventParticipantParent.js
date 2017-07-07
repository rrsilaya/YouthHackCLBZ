import React from 'react';
import ParticipantTile from './ParticipantTile';

const EventParticipantParent = () => {
  return (
    <div>
      <h3 className="uk-heading-bullet">
        Startup Challenge <span className="uk-badge">100</span>
      </h3>

      <ul data-uk-accordion>
        <ParticipantTile />
        <ParticipantTile />
        <ParticipantTile />
        <ParticipantTile />
      </ul>

      <div className="uk-text-center">
        <button className="uk-button uk-button-default">
          Save as Spreadsheet
        </button>
      </div>
    </div>
  );
};

export default EventParticipantParent;
