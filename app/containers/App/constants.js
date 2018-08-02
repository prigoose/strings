/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_STRINGS = 'strings/App/LOAD_STRINGS';
export const LOAD_STRINGS_SUCCESS = 'strings/App/LOAD_STRINGS_SUCCESS';
export const LOAD_STRINGS_ERROR = 'strings/App/LOAD_STRINGS_ERROR';
export const INSERT_STRING = 'strings/App/INSERT_STRING';
export const INSERT_STRING_SUCCESS = 'strings/App/INSERT_STRING_SUCCESS';
export const INSERT_STRING_ERROR = 'strings/App/INSERT_STRING_ERROR';
export const UPDATE_VALUE = 'strings/App/UPDATE_VALUE';
