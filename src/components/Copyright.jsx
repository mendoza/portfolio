import React from 'react';

const Copyright = () => {
  return (
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>{`Copyright © David Mendoza ${new Date().getFullYear()}`}</small>
      </div>
    </div>
  );
};
export default Copyright;
