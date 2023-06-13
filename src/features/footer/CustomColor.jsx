import React from 'react';
import { customColorAdded } from '../filter/filterSlice';
import { useDispatch } from 'react-redux';
const additionColor = ['black', 'yellow'];
export default function CustomColor() {
  const dispatch = useDispatch();
  const addCustomColor = (event) => {
    dispatch(customColorAdded(event.target.value));
  };
  const OptionColor = () => {
    return additionColor.map((data) => <option>{data}</option>);
  };
  return (
    <select id="cars" onClick={addCustomColor}>
      <OptionColor />
    </select>
  );
}
