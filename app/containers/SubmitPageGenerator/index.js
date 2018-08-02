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
import {
  makeSelectInsertingToDb,
  makeSelectDbError,
  makeSelectValue,
} from 'containers/App/selectors';
import { submitString } from 'containers/App/actions';
import { changeString } from './actions';
import { makeSelectCurrentString } from './selectors';
import reducer from './reducer';

class SubmitPageGenerator extends React.PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={evt => this.props.onSubmitForm(evt)}>
          <Input
            text
            type="text"
            id="inputString"
            name="string"
            placeholder="Input anything"
            value={this.props.currentString}
            onChange={this.props.onChangeString}
          />
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
  onChangeString: PropTypes.func,
  currentString: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  // string: makeSelectCurrentString(),
  // posting: makeSelectInsertingToDb(),
  // error: makeSelectDbError(),
  currentString: makeSelectCurrentString(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => {
      evt.preventDefault();
      console.log('in change string: ', evt.target.value);
      dispatch(changeString(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // const value = event.target.find([name='string'].val);
      console.log('submitString', submitString());
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
