import React from 'react';
import PropTypes from 'prop-types';

import Ul from '../../components/Ul';
import Item from '../../components/ListItem';


function List({ loading, error, strings }) {
  let content;
  if (strings) {
    content = strings.map(item => <Item>{item.string}</Item>);
  }
  if (loading) {
    content = <Item>Loading...</Item>
  }
  if (error !== false) {
    content = <List>Something went wrong, please refresh the page!</List>
  }

  // If we have items, render them

  return (
    <Ul>{content}</Ul>
  );
}

List.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default List;
