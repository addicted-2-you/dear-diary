import React from 'react';
import PropTypes from 'prop-types';

function Day(props) {
  const { dayNumber } = props;

  return <div className="h-24 w-24 inline-block even:bg-gray-200">{dayNumber}</div>;
}

Day.propTypes = {
  dayNumber: PropTypes.number.isRequired,
};

export default Day;
