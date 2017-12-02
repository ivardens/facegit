import {createActions} from 'redux-actions';

export const {isFetched, isFetching, data, error} = createActions(
  'IS_FETCHED',
  'IS_FETCHING',
  'DATA',
  'ERROR'
);
