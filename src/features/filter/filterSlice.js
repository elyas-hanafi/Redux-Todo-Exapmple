/* eslint-disable default-case */
import { produce } from 'immer';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initState = {
  status: StatusFilters.All,
  colors: [],
  availableColors: ['green', 'blue', 'orange', 'purple', 'red', 'yellow'],
};

const filterReducer = produce((state, action) => {
  switch (action.type) {
    case 'filters/statusFilterChanged':
      state.status = action.payload;
      break;
    case 'filters/colorFilterChanged':
      const { colors } = state;
      const { color, changeType } = action.payload;
      switch (changeType) {
        case 'added':
          state.colors.push(color);
          break;
        case 'removed':
          state.colors = colors.filter((c) => c !== color);
      }
      break;
    case 'filters/colorCustom':
      const newColor = action.payload;
      if (state.availableColors.includes(newColor)) {
        return state;
      }
      state.availableColors.push(newColor);
  }
}, initState);

export default filterReducer;

export const selectStatusFilter = (state) => state.filters.status;
export const selectColorsFilter = (state) => state.filters.colors;
export const selectAvailableColors = (state) => state.filters.availableColors;

export const statusFilterChanged = (status) => ({
  type: 'filters/statusFilterChanged',
  payload: status,
});
export const customColorAdded = (color) => ({
  type: 'filters/colorCustom',
  payload: color,
});
export const colorFilterChanged = (color, changeType) => ({
  type: 'filters/colorFilterChanged',
  payload: {
    color,
    changeType,
  },
});
