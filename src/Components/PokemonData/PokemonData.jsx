import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, CardText } from "reactstrap";
import { Link } from "react-router-dom";

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
    <Container style={{ background: "darkCyan" }}>
      <Col>
        <h1 style={{ textAlign: "center", padding: "10px" }}>Pokedex Apps</h1>

        <Row
          xs="1"
          md="3"
          lg="5"
          style={{ padding: 20, justifyContent: "center" }}
        >
          {data.results !== undefined &&
            data.results.map((item) => {
              const id = item.url.split("/")[6];

              return (
                <Card
                  key={id}
                  inverse
                  color="info"
                  style={{ margin: "0.5em", textAlign: "center" }}
                >
                  <img
                    style={{ objectFit: "cover", margin: "1em" }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt="pokeimage"
                  />
                  <Link to={`/pokemondetails/${item.name}`}>
                    <CardText>{item.name}</CardText>
                  </Link>
                </Card>
              );
            })}
        </Row>
      </Col>
    </Container>
  );
}

export default PokemonData;
