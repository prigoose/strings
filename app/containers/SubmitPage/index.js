import React from 'react';
import Input from 'components/Input';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Input text type="text" name="string" placeholder="Input anything" />
        <br />
        <Input type="submit" value="Submit" />
      </div>
    );
  }
}
