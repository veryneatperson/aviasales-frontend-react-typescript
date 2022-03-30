import {
  GroupingAction,
  GroupingState,
  LayoversOptions,
  GroupingActionTypes,
} from '../../types/grouping';

export const initState: GroupingState = {
  sorting: 'cheapest',
  layovers: [
    {
      name: 'all',
      checked: false,
    },
    {
      name: 'zero',
      checked: true,
    },
    {
      name: 'one',
      checked: true,
    },
    {
      name: 'two',
      checked: true,
    },
    {
      name: 'three',
      checked: false,
    },
  ],
};

const isAllOptionChecked = (layovers: GroupingState['layovers']) => layovers
  .filter((el) => el.name !== 'all')
  .every((el) => el.checked);

const updateLayovers = (
  layovers: GroupingState['layovers'],
  key: LayoversOptions
): GroupingState['layovers'] => {
  if (key === 'all') {
    const newValue = !layovers.find((el) => el.name === 'all')?.checked;
    return layovers.map((el) => ({ ...el, checked: newValue }));
  }

  const upd = layovers.map((el) => (el.name === key
    ? { ...el, checked: !el.checked }
    : el));

  return isAllOptionChecked(upd)
    ? upd.map((el) => (el.name === 'all' ? { ...el, checked: true } : el))
    : upd;
};

export const reducer = (state: GroupingState, action: GroupingAction): GroupingState => {
  switch (action.type) {
    case GroupingActionTypes.SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };
    case GroupingActionTypes.TOGGLE_LAYOVER:
      return {
        ...state,
        layovers: updateLayovers(state.layovers, action.payload),
      };
    default:
      return state;
  }
};
