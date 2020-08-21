import React from 'react';
import PropTypes from 'prop-types';

const BirdsListItem = ({ bird }) => (
  <li className="list-item">
    <span className="circle" />
    {bird}
  </li>
);

BirdsListItem.propTypes = {
  bird: PropTypes.string.isRequired,
};

export default BirdsListItem;
