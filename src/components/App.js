import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setPizzaList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(pizzaData => setPizzaList(pizzaData))
  }, []) 
  
  const addPizza = (newPizza) => {
    setPizzaList([...pizzaList, newPizza])
  }

  return (
    <>
      <Header />
      <PizzaForm addPizza={addPizza}/>
      <PizzaList pizzaList={pizzaList}/>
    </>
  );
}

export default App;
