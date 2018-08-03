/**
 *
 * HomePage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import List from 'components/StringsList';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadStrings } from '../App/actions';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends PureComponent {
  componentDidMount() {
    this.props.loadStrings();
  }
  render() {
    const { loading, error, strings } = this.props;
    const listProps = {
      loading,
      error,
      strings,
    };
    return (
      <div>
        <List {...listProps} />
      </div>
    );
  }
}

//  dispatch: PropTypes.func.isRequired,
HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadStrings: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadStrings: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
