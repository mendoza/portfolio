import React from 'react';

const SocialIcon = ({ url, name }) => {
  return (
    <a
      className="btn btn-outline-light btn-social mx-1"
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      <i className={`fab fa-fw fa-${name}`} />
    </a>
  );
};

export default SocialIcon;
