import { fromJS } from 'immutable';
import submitPageGeneratorReducer from '../reducer';

describe('submitPageGeneratorReducer', () => {
  it('returns the initial state', () => {
    expect(submitPageGeneratorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
