import React, { useState, Fragment } from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import Ingredients from './Ingredients';
import Units from './Units';

const ConvertForm = () => {
  const initialConversion = {
    quantity: '',
    units: 1,
    ingredients: 0
  };
  const [conversion, setConversion] = useState(initialConversion);
  const [display, setDisplay] = useState('0');
  const { units, quantity, ingredients } = conversion;

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay((quantity * units * ingredients).toFixed(0));
  };

  const handleChange = (e) => {
    setConversion({ ...conversion, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='quantity'
          value={quantity}
          min='0'
          step='.01'
          placeholder='0'
          autoComplete='off'
          onChange={handleChange}
        />
        <select name='units' value={units} onChange={handleChange}>
          <Units />
        </select>{' '}
        <select name='ingredients' value={ingredients} onChange={handleChange}>
          <Ingredients />
        </select>
        <button color='success' type='submit'>
          Submit
        </button>
        <button
          type='clear'
          color='#ff11ff'
          onClick={() => {
            setConversion(initialConversion);
            setDisplay('0');
          }}>
          Clear
        </button>
      </form>

      <h2>{display} grams</h2>
    </Fragment>
  );
};

export default ConvertForm;
