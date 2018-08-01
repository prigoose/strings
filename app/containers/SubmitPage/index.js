import React from 'react';
import INPUT from 'components/Input';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <INPUT text type="text" name="string" defaultValue="Input anything" />
        <br />
        <INPUT type="submit" value="Submit" />
      </div>
    );
  }
}
