import React, { Component } from 'react';

class NewEvent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    e.target.reset();
  };

  render() {
    return (
      <div id="new-event-modal" data-uk-modal="bg-close: false">
        <form
          className="uk-modal-dialog uk-form-horizontal"
          onSubmit={this.handleSubmit}>
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          />

          <div className="uk-modal-header">
            <h2 className="uk-modal-title">New Event</h2>
          </div>

          <div className="uk-modal-body">
            <div className="uk-margin">
              <label htmlFor="event-title" className="uk-form-label">
                Title
              </label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Event Title"
                  id="event-title"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-description" className="uk-form-label">
                Description
              </label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  placeholder="Event Description"
                  id="event-description"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-thumbnail" className="uk-form-label">
                Event Thumbnail
              </label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon"
                    data-uk-icon="icon: thumbnails"
                  />
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Thumbnail URL"
                    id="event-thumbnail"
                  />
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-image" className="uk-form-label">
                Event Preview
              </label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: image" />
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Preview URL"
                    id="event-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="uk-modal-footer uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close uk-margin-small-right">
              Cancel
            </button>
            <button className="uk-button uk-button-primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewEvent;
