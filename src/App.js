import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import { Link, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/character-list">
        <CharacterList />
      </Route>
    </main>
  );
}
