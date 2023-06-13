import { useDispatch, useSelector } from 'react-redux';
import {
  colorFilterChanged,
  selectAvailableColors,
  selectColorsFilter,
} from '../filter/filterSlice';

const ColorFilters = () => {
  const colors = useSelector(selectColorsFilter);
  const availableColors = useSelector(selectAvailableColors);
  const dispatch = useDispatch();

  function handlChangeColor(color, changeType) {
    dispatch(colorFilterChanged(color, changeType));
  }

  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);
    const changeType = checked ? 'removed' : 'added';

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          defaultChecked={checked}
          onChange={() => handlChangeColor(color, changeType)}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {color}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;
