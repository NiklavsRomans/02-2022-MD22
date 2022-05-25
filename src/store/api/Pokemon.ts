import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AllPokemons, SinglePokemon } from '../../model/PokemonModel';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<SinglePokemon, string>({
      query: (name) => `/${name}`,
    }),
    getAllPokemons: builder.query<AllPokemons, string>({
      query: (offset) => `/${offset}`,
    }),
    getPokiMove: builder.query<any, number>({
      query: (id) => `/move/${id}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery, useGetPokiMoveQuery } = pokemonApi; // HOOKS

export default pokemonApi;
