import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
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
    height: 500px;
    width: 500px;
    border-radius: 100%;
    margin: 0 auto;
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
      <Div>
        <Avatar>
          {pokemon.sprites !== undefined && (
            <img src={pokemon.sprites.front_shiny} alt="pokemon" />
          )}
        </Avatar>
      </Div>
      <Hr />
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
          </Div>
        </DivArticle>
      </Div>
      <Hr />
    </div>
  );
}

export default PokemonDetails;
