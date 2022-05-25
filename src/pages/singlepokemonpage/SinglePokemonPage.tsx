/* eslint-disable no-shadow */
/* eslint-disable max-len */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SinglePokemonCard from '../../components/singlepokemoncard/SinglePokemonCard';
import { useGetPokemonByNameQuery } from '../../store/api/Pokemon';
import './SinglePokemonPage.scss';

const SinglePokemonPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  // @ts-ignore
  const { data, isSuccess, isLoading } = useGetPokemonByNameQuery(name);

  // States
  // const [move, setMove] = useState(0);
  const [visible, setVisible] = useState(5);

  // handle base stats
  const baseStats = () => {
    const stats = data!.stats.map((stat) => stat.base_stat);
    return stats;
  };

  const pokiId = data?.id;
  const pokiImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokiId}.png`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="single-poki--page">
            <div className="loader">
              {isLoading && <h2>...Loading</h2>}
            </div>
            {data && isSuccess && (
            <SinglePokemonCard
              name={data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              id={data.id}
              height={data.height}
              weight={data.weight}
              imgSrc={pokiImg}
              abilitiess={data.abilities.map(({ ability }) => ability.name)}
              hp={baseStats()}
              attack={baseStats()}
              defense={baseStats()}
              special_attack={baseStats()}
              special_defense={baseStats()}
              speed={baseStats()}
              onClick={() => { navigate('/'); }}
              moves={data.moves.slice(0, visible).map(({ move }) => move.name)}
              showMore={() => setVisible(visible + 4)}
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemonPage;
