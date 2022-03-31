import { Dispatch } from 'react';

import {
  SortingOptions,
  SetSortingAction,
  GroupingActionTypes,
} from '../../types/grouping';

import './SortingTab.scss';

interface SortingTabProps {
  label: string;
  name: SortingOptions;
  sortBy: SortingOptions;
  dispatch: Dispatch<SetSortingAction>;
}

export default function SortingTab({
  label,
  name,
  sortBy,
  dispatch,
}: SortingTabProps) {
  const classes = `sorting-tab ${sortBy === name ? 'sorting-tab--active' : ''}`;

  const handleClick = (): void =>
    dispatch({ type: GroupingActionTypes.SET_SORTING, payload: name });

  return (
    <button className={classes} onClick={handleClick} type="button">
      <span className="sorting-tab__label">{label}</span>
    </button>
  );
}
