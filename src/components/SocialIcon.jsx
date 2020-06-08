import React from 'react';

const SocialIcon = ({ url, name, light, brand }) => {
  return (
    <a
      className={`btn btn-outline${light ? '-light' : '-dark'} btn-social mx-1`}
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      <i className={`${brand ? 'fab' : 'fas'} fa-fw fa-${name}`} />
    </a>
  );
};

export default SocialIcon;
