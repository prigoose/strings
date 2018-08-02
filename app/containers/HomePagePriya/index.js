/**
 *
 * HomePagePriya
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { RESTART_ON_REMOUNT } from 'utils/constants';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import List from 'components/Ul';
import Item from 'components/ListItem';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import makeSelectHomePagePriya from './selectors';
import { loadStrings } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePagePriya extends React.Component {
  componentDidMount() {
    this.props.loadStrings();
  }
  render() {
    const { loading, error, strings } = this.props;
    // To do: add unique key
    const listItems = strings.map(item => <Item>{item.string}</Item>);
    return (
      <div>
        <List>{listItems}</List>
      </div>
    );
  }
}

//  dispatch: PropTypes.func.isRequired,
HomePagePriya.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // To investigate: why is strings sometimes an obj?
  // (it should be an array)
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadStrings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePagePriya', reducer });
const withSaga = injectSaga({ key: 'homePagePriya', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePagePriya);
