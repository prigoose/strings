import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import List from 'components/Ul';
import { HomePage, mapDispatchToProps } from '../index';
import { loadStrings } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the strings list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />,
    );
    expect(
      renderedComponent.contains(<List loading error={false} repos={[]} />),
    ).toEqual(true);
  });

  it('should render fetch the strings on mount', () => {
    // const submitSpy = jest.fn();
    mount(<HomePage />)
    setTimeout(() => {
      expect(loadStrings).toHaveBeenCalled();
    }, 2000);
  });
  //   expect(submitSpy).toHaveBeenCalled();
  // });
});
