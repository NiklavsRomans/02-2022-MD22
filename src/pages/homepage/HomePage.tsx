import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../../components/pokemoncard/PokemonCard';
import { useGetAllPokemonsQuery } from '../../store/api/Pokemon';
import './HomePage.scss';

/* eslint-disable max-len */
export const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const HomePage = () => {
  const [pokis, setPokis] = useState(0);

  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery(`?offset=${pokis}&limit=20`);

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="homepage">
            <div className="loader">
              {isLoading && <h2>...Loading</h2>}
            </div>
            <div className="page-buttos">
              <button
                className="page-btn"
                disabled={pokis === 0}
                onClick={() => setPokis(pokis - 20)}
              >
                Prev

              </button>
              <button
                className="page-btn"
                onClick={() => setPokis(pokis + 20)}
              >
                Next

              </button>
            </div>
            <div className="homepage__poki--cards">
              {data && isSuccess && data.results.map(({ name, url }) => {
                const array = url.split('/');
                const id = array[array.length - 2];
                return (
                  <PokemonCard
                    name={name.charAt(0).toUpperCase() + name.slice(1)}
                    imgSrc={`${imgBaseUrl}${id}.png`}
                    onClick={() => { navigate(`/pokemon/${name}`); }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
