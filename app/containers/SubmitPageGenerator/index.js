/**
 *
 * SubmitPageGenerator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Input from 'components/Input';
import injectReducer from 'utils/injectReducer';
import makeSelectSubmitPageGenerator from './selectors';
import { submitString } from './actions';
import reducer from './reducer';

class SubmitPageGenerator extends React.PureComponent {
  onSubmitForm(e) {
    e.preventDefault();
    console.log('testing 1 2 3');
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmitForm}>
          <Input text type="text" name="string" placeholder="Input anything" />
          <br />
          <Input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

SubmitPageGenerator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  submitpagegenerator: makeSelectSubmitPageGenerator(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitString());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submitpagegenerator', reducer });

export default compose(
  withReducer,
  withConnect,
)(SubmitPageGenerator);
