import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const DivInput = styled.div`
  padding-top: 20px;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
`;

const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  &:hover {
    Button {
      background-color: #4caf50;
      color: white;
    }
  }
`;

function LoginForm() {
  let history = useHistory();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem("user", JSON.stringify(userLogin));
    history.push("/pokemonall");

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <div>
      <H1>Login</H1>
      <Div>
        <form onSubmit={handleSubmit}>
          <DivInput>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={userLogin.email}
              onChange={handleChange}
            />
          </DivInput>

          <DivInput>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={handleChange}
            />
          </DivInput>

          <DivInput>
            <Button type="submit">Login</Button>
          </DivInput>
        </form>
      </Div>
    </div>
  );
}

export default LoginForm;
