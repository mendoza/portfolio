import React from 'react';

const Divider = ({ light }) => {
  return (
    <div className={`divider-custom ${light ? 'divider-light' : ''}`}>
      <div className="divider-custom-line" />
      <div className="divider-custom-icon">
        <i className="fas fa-star" />
      </div>
      <div className="divider-custom-line" />
    </div>
  );
};

export default Divider;
