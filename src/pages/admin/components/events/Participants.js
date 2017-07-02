import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import EventParticipantParent from './EventParticipantParent';

class Participants extends Component {
  render() {
    return (
      <DocumentTitle title="YHCLBZ / Participants">
        <div>
          <h1 className="uk-heading-divider">Event Participants</h1>

          <EventParticipantParent />
        </div>
      </DocumentTitle>
    );
  }
}

export default Participants;
