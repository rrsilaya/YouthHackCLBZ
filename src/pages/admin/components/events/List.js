import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import EventTile from './EventTile';
import NewEvent from './NewEvent';

class List extends Component {
  render() {
    return (
      <DocumentTitle title="YHCLBZ / Events">
        <div>
          <h1 className="uk-heading-divider">Events List</h1>

          <EventTile />
          <EventTile />
          <EventTile />

          <div className="uk-text-center">
            <button
              className="uk-button uk-button-primary"
              data-uk-toggle="target: #new-event-modal">
              New Event
            </button>
          </div>

          <NewEvent />
        </div>
      </DocumentTitle>
    );
  }
}

export default List;
