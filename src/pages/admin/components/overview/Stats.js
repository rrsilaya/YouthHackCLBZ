import React from 'react';

const Stats = () => {
  return (
    <div className="uk-section uk-section-primary uk-padding-small">
      <div className="uk-text-uppercase">
        Statistics<hr />
      </div>

      <div
        className="uk-grid uk-grid-small uk-text-center uk-child-width-expand"
        data-uk-grid>
        <div>
          <h1 className="uk-heading-primary">3</h1>
          Active Events
        </div>
        <div>
          <h1 className="uk-heading-primary">100</h1>
          Participants
        </div>
        <div>
          <h1 className="uk-heading-primary">20</h1>
          Resident Members
        </div>
      </div>
    </div>
  );
};

export default Stats;
