import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

class EditEvent extends Component {
  render() {
    const title = 'Startup Challenge';
    const description =
      'The YouthHack CALABARZON Startup Challenge is a two-day event with the goal of helping students learn more about technology and entrepreneurship. We will be having various talks and workshops on ideation, growth hacking and marketing to aid teams formulate their ideas. On the second day, teams will be able to pitch to a panel of judges.';

    return (
      <DocumentTitle title={`YHCLBZ / ${title}`}>
        <div>
          <h1 className="uk-heading-divider">
            {this.props.match.params.id}
          </h1>

          <form className="uk-form uk-form-horizontal">
            <h3 className="uk-heading-bullet">Event Defaults</h3>

            <div className="uk-margin">
              <label htmlFor="event-title-edit" className="uk-form-label">
                Title
              </label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  id="event-title-edit"
                  value={title}
                  disabled
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-description-edit" className="uk-form-label">
                Description
              </label>
              <div className="uk-form-controls">
                <textarea
                  id="event-description-edit"
                  className="uk-textarea uk-width-1-1"
                  rows="8"
                  value={description}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-form-note-edit" className="uk-form-label">
                Form Note
              </label>
              <div className="uk-form-controls">
                <textarea
                  id="event-form-note-edit"
                  className="uk-textarea uk-width-1-1"
                  rows="5">
                  By submitting this form, I agree to pay the registration fee
                  of P400 (each member) via bank deposit to Queenie Dian
                  Pamatian BPI Acct No: 0919 2886 55. I will send a scanned copy
                  of the bank deposit by August 20,11:59PM. Only those who
                  accomplished the payment of registration fee will be
                  considered official participants of the YouthHack CALABARZON
                  Startup Challenge.
                </textarea>
              </div>
            </div>

            <h3 className="uk-heading-bullet">Event Details</h3>

            <div className="uk-margin">
              <label htmlFor="event-date-edit" className="uk-form-label">
                Event Date
              </label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon"
                    data-uk-icon="icon: calendar"
                  />
                  <input
                    type="text"
                    className="uk-input"
                    id="event-date-edit"
                    placeholder="January 1 - January 2"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-venue-edit" className="uk-form-label">
                Event Venue
              </label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon"
                    data-uk-icon="icon: location"
                  />
                  <input
                    type="text"
                    className="uk-input"
                    id="event-venue-edit"
                    placeholder="University of the Philippines"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-price-edit" className="uk-form-label">
                Registration Fee
              </label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon"
                    data-uk-icon="icon: credit-card"
                  />
                  <input
                    type="text"
                    className="uk-input"
                    id="event-price-edit"
                    placeholder="Php 100.00"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="event-info-edit" className="uk-form-label">
                Information
              </label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: link" />
                  <input
                    type="text"
                    className="uk-input"
                    id="event-info-edit"
                    placeholder="http://bit.ly/usdf"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="uk-margin uk-text-right">
              <button className="uk-button uk-button-primary">Save</button>
              <Link
                className="uk-button uk-button-default uk-margin-small-left"
                to="/admin/events/list">
                Discard
              </Link>
            </div>
          </form>
        </div>
      </DocumentTitle>
    );
  }
}

export default EditEvent;
