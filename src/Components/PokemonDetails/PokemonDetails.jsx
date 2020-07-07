import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const DivTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DivValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

const H2Sub = styled.h2`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  padding-left: 30px;
`;

const H3Sub = styled.h3`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  padding-left: 30px;
`;

const Avatar = styled.div`
  & img {
    height: 400px;
    width: 400px;
  }
`;

const AvatarMini = styled.div`
  & img {
    height: 200px;
    width: 200px;
  }
`;

const DivArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const Hr = styled.hr`
  display: flex;
  flex-wrap: wrap;
  border: 5px solid grey;
  border-radius: 5px;
  width: 50%;
`;

function PokemonDetails() {
  let { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  function fetchSinglePokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => setPokemon(result));
  }

  useEffect(() => {
    fetchSinglePokemon();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <H1>Pokemon Detail</H1>
      {pokemon.sprites !== undefined && (
        <DivTitle>
          <Avatar>
            <img src={pokemon.sprites.front_shiny} alt="pokemon" />
            <AvatarMini>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
              <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            </AvatarMini>
          </Avatar>
        </DivTitle>
      )}
      <Hr />
      {pokemon.sprites !== undefined && (
        <Div>
          <DivArticle>
            <Div>
              <DivValue>
                <H3Sub>Name</H3Sub>
                <H2Sub>{pokemon.name}</H2Sub>
              </DivValue>

              <DivValue>
                <H3Sub>Experience</H3Sub>
                <H2Sub>{pokemon.base_experience}</H2Sub>
              </DivValue>

              <DivValue>
                <H3Sub>Weight</H3Sub>
                <H2Sub>{pokemon.weight}</H2Sub>
              </DivValue>

              <DivValue>
                <H3Sub>Height</H3Sub>
                <H2Sub>{pokemon.height}</H2Sub>
              </DivValue>

              <DivValue>
                <H3Sub>Move</H3Sub>
                <H2Sub>{pokemon.moves[0].move.name}</H2Sub>
              </DivValue>

              <DivValue>
                <H3Sub>Ability</H3Sub>
                <H2Sub>{pokemon.abilities[0].ability.name}</H2Sub>
              </DivValue>

              <DivValue>
                <H3Sub>Stats</H3Sub>
                <H2Sub>{pokemon.stats[0].base_stat}</H2Sub>
              </DivValue>
            </Div>
          </DivArticle>
        </Div>
      )}
      <Hr />
    </div>
  );
}

export default PokemonDetails;
