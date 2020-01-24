import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('http://localhost:7777/api/conversions');
        setIngredients(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  while (!ingredients) {
    return <option>Loading ingredients...</option>;
  }

  return (
    <>
      {ingredients.map((ingredient) => (
        <option value={ingredient.gramspertsp} key={ingredient.id}>
          {ingredient.ingredient}
        </option>
      ))}
    </>
  );
};

export default Ingredients;
