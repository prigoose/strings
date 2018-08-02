import { fromJS } from 'immutable';
import homePagePriyaReducer from '../reducer';

describe('homePagePriyaReducer', () => {
  it('returns the initial state', () => {
    expect(homePagePriyaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
