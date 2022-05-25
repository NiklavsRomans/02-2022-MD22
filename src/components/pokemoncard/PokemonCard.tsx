import './PokemonCard.scss';
import { FC } from 'react';

type PokemonCardProps = {
    imgSrc: string
    name: string
    onClick: () => void
}

const PokemonCard:FC<PokemonCardProps> = ({ imgSrc, name, onClick }) => {
  const a = 5;

  return (
    <div className="poki__box">
      <div className="poki__box--content">
        <div className="poki__box--content-img">
          <img className="img" src={imgSrc} alt="Help" />
        </div>
        <div className="poki__box--content-title">
          <h3>{name}</h3>
        </div>
        <div className="poki__box--content-button">
          <button className="button" onClick={onClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
