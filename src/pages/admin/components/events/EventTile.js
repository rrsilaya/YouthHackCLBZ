import React from 'react';

const EventTile = () => {
  return (
    <div
      className="uk-section uk-section-muted uk-padding-remove-vertical uk-grid uk-grid-collapse uk-margin"
      data-uk-grid>
      <div className="uk-width-1-4@m uk-visible@s tile-img" />

      <div className="uk-width-3-4@m uk-width-1-1@s uk-padding-small">
        <h3>Startup Challenge</h3>
        <p>
          The YouthHack CALABARZON Startup Challenge is a two-day event with the
          goal of helping students learn more about technology and
          entrepreneurship. We will be having various talks and workshops on
          ideation, growth hacking and marketing to aid teams formulate their
          ideas. On the second day, teams will be able to pitch to a panel of
          judges.
        </p>

        <div className="uk-grid uk-flex uk-flex-right uk-grid-medium uk-child-width-auto">
          <div>
            <button className="uk-button uk-button-text">
              <span
                className="uk-margin-small-right"
                data-uk-icon="icon: pencil; ratio: 0.7"
              />Edit
            </button>
          </div>
          <div>
            <button className="uk-button uk-button-text">
              <span
                className="uk-margin-small-right"
                data-uk-icon="icon: trash; ratio: 0.7"
              />Remove
            </button>
          </div>
          <div>
            <button className="uk-button uk-button-text">
              <span
                className="uk-margin-small-right"
                data-uk-icon="icon: bolt; ratio: 0.7"
              />Launch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
