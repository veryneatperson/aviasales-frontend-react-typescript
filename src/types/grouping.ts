export type SortingOptions = 'cheapest' | 'fastest' | 'optimal';
export type LayoversOptions = 'all' | 'zero' | 'one' | 'two' | 'three';

export interface Layover {
  name: LayoversOptions;
  checked: boolean;
}

export interface GroupingState {
  sorting: SortingOptions;
  layovers: Layover[];
}

export enum GroupingActionTypes {
  SET_SORTING = 'SET_SORTING',
  TOGGLE_LAYOVER = 'TOGGLE_LAYOVER',
}

export interface SetSortingAction {
  type: GroupingActionTypes.SET_SORTING;
  payload: SortingOptions;
}

export interface ToggleLayoverAction {
  type: GroupingActionTypes.TOGGLE_LAYOVER;
  payload: LayoversOptions;
}

export type GroupingAction = ToggleLayoverAction | SetSortingAction;
