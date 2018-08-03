import React from 'react';
import { mount } from 'enzyme';

import { HomePage, mapDispatchToProps } from '../index';
import { loadStrings } from '../../App/actions';

describe('<HomePage />', () => {
  it('should load the strings', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage loading error={false} repos={[]} loadStrings={submitSpy} />,
    );
    expect(submitSpy).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  describe('loadStrings', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.loadStrings).toBeDefined();
    });

    it('should dispatch loadStrings when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.loadStrings();
      expect(dispatch).toHaveBeenCalledWith(loadStrings());
    });
  });
});
