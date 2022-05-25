/* eslint-disable camelcase */
import { FC } from 'react';
import './SinglePokemonCard.scss';

export type SinglePokemonCardProps = {
  id: number
  imgSrc: string
  name: string
  height: number
  weight: number
  abilitiess: string[]
  moves: string[]
  hp: number[]
  attack: number[]
  defense: number[]
  special_attack: number[]
  special_defense: number[]
  speed: number[]
  onClick: () => void
  showMore: () => void
}

const SinglePokemonCard:FC<SinglePokemonCardProps> = ({
  id, imgSrc, name, height, weight, abilitiess, hp, attack, defense,
  special_attack, special_defense, speed, onClick, moves, showMore,
}) => {
  const a = 5;

  return (
    <div className="single__poki--box">
      <div className="single__poki--box-wrapper">
        <div className="single__poki--box-left">
          <div className="single__poki--box-content">
            <p className="poki-id">{`#${id}`}</p>
            <img className="img2" src={imgSrc} alt="help" />
            <h3 className="poki-name">{name}</h3>
            <div className="single__poki--box-bmi">
              <h3>
                Height:
                <span className="w-stat">{height}</span>
              </h3>
              <h3>
                Weight:
                <span className="w-stat">{weight}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="single__poki--box-right">
          <div className="abilities">
            <h3>
              Abilities
              {abilitiess.map((ability) => (
                <li key={Math.random() * 1000}>{ability}</li>
              ))}
            </h3>
          </div>
          <div className="single__poki--box-stats">
            <h3>Base Stats</h3>
            <p>{`HP: ${hp[0]}`}</p>
            <p>{`Attack: ${attack[1]}`}</p>
            <p>{`Defense: ${defense[2]}`}</p>
            <p>{`Special Attack: ${special_attack[3]}`}</p>
            <p>{`Special Defense: ${special_defense[4]}`}</p>
            <p>{`Speed: ${speed[5]}`}</p>
            <div className="moves">
              <h3>Moves</h3>
              <p>
                {moves.map((move) => (
                  <li>{move}</li>
                ))}

              </p>
              <button className="more-button" onClick={showMore}>Show More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="single__poki--box-button">
        <button onClick={onClick} className="back-btn">Back</button>
      </div>
    </div>
  );
};

export default SinglePokemonCard;
