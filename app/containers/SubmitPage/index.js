/**
 *
 * SubmitPage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Input from 'components/Input';
import injectReducer from 'utils/injectReducer';
import { postStringToDb } from 'containers/App/actions';
import { changeString } from './actions';
import { makeSelectCurrentString } from './selectors';
import reducer from './reducer';

class SubmitPage extends PureComponent {
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

SubmitPage.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
  currentString: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  currentString: makeSelectCurrentString(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => {
      evt.preventDefault();
      dispatch(changeString(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(postStringToDb());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submitpage', reducer });

export default compose(
  withReducer,
  withConnect,
)(SubmitPage);
