import {configureStore} from '@reduxjs/toolkit';

import trailsReducer from '../reducers/trailsReducer';

const store = configureStore({
  reducer: {
    trails: trailsReducer,
  },
});

export default store;
