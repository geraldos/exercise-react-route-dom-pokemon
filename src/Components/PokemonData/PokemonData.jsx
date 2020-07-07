import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  & img {
    width: 100%;
  }
`;

function PokemonData() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url);
    const results = await response.json();

    await setData(results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Div>
      <H1>Pokedex</H1>
      <Div>
        <CardList>
          {data.results !== undefined &&
            data.results.map((item) => {
              const id = item.url.split("/")[6];

              return (
                <Card key={id}>
                  <Link to={`/pokemondetails/${item.name}`}>
                    <Img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                      alt="pokeimage"
                    />
                    <H1>{item.name}</H1>
                  </Link>
                </Card>
              );
            })}
        </CardList>
      </Div>
    </Div>
  );
}

export default PokemonData;
