import React from 'react';

const FourthGrid = ({ label, content }) => {
  return (
    <div className="uk-grid uk-grid-small" data-uk-grid>
      <div className="uk-width-1-4">
        {label}
      </div>
      <div className="uk-width-3-4">
        {content}
      </div>
    </div>
  );
};

export default FourthGrid;
