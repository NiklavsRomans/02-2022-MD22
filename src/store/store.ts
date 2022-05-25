import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './api/Pokemon';

export default configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});
