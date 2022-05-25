import { FC } from 'react';
import { useGetPokiMoveQuery } from '../../store/api/Pokemon';
import './PokemonMoveCard.scss';

type PokemonMoveCardProps = {
    id: number
}

const PokemonMoveCard:FC<PokemonMoveCardProps> = ({ id }) => {
  const { data, isLoading, isSuccess } = useGetPokiMoveQuery(id);

  return (
    <div className="move__card--container">
      <div>
        <div className="loader">
          {isLoading && <h2>...Loading</h2>}
        </div>
      </div>
      {data && isSuccess && (
      <div className="move__card--box">
        <div className="move__card--box-content">
          <h3 className="move__card--title">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
          <div className="move__card--list">
            <p>{`Acuracy: ${data.accuracy}`}</p>
            <p>{`Power: ${data.power}`}</p>
            <p>{`PP: ${data.pp}`}</p>
            <p>{`Type: ${data.type.name}`}</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default PokemonMoveCard;
