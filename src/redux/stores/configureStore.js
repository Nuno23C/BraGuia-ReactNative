import {configureStore} from '@reduxjs/toolkit';

import appReducer from '../reducers/appReducer';
import trailsReducer from '../reducers/trailsReducer';

const store = configureStore({
  reducer: {
    app: appReducer,
    trails: trailsReducer,
  },
});

export default store;
