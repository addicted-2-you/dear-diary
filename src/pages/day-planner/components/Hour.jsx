import React from 'react';
import PropTypes from 'prop-types';

function Hour(props) {
  const { hourNumber } = props;

  return (
    <div className="text even:bg-gray-200">
      <strong>{hourNumber}</strong>
    </div>
  );
}

Hour.propTypes = {
  hourNumber: PropTypes.number.isRequired,
};

export default Hour;
