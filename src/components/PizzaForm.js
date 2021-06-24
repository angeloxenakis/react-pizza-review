import React, { useState } from "react";

function PizzaForm({ addPizza }) {

  const [formData, setFormData] = useState({
    topping: "",
    size: "small",
    vegetarian: true
  })

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  const createPizza = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: formData.topping,
        size: formData.size,
        vegetarian: formData.vegetarian
      })
    })
    .then(res => res.json())
    .then(newPizza => addPizza(newPizza))
  }

  return (
    <form onSubmit={(e) => createPizza(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={(e) => handleChange(e)}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={(e) => handleChange(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={(e) => handleChange(e)}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
