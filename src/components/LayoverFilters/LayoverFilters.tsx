import { useCallback, Dispatch, memo } from 'react';

import isEqual from 'lodash.isequal';

import LayoverFilter from '../LayoverFilter';

import {
  GroupingState,
  GroupingActionTypes,
  LayoversOptions,
  ToggleLayoverAction,
} from '../../types/grouping';

import './LayoverFilters.scss';

interface LayoverFiltersProps {
  layovers: GroupingState['layovers'];
  dispatch: Dispatch<ToggleLayoverAction>;
}

function LayoverFilters({ layovers, dispatch }: LayoverFiltersProps) {
  const toggleLayover = useCallback(
    (value: LayoversOptions) =>
      dispatch({
        type: GroupingActionTypes.TOGGLE_LAYOVER,
        payload: value,
      }),
    [dispatch]
  );

  return (
    <section className="layover-filters">
      <h2 className="layover-filters__title">Количество пересадок</h2>
      {layovers.map(({ name, checked }) => (
        <LayoverFilter
          key={name}
          name={name}
          checked={checked}
          toggleLayover={toggleLayover}
        />
      ))}
    </section>
  );
}

function areEqual(
  prevProps: LayoverFiltersProps,
  nextProps: LayoverFiltersProps
): boolean {
  return isEqual(prevProps.layovers, nextProps.layovers);
}

export default memo(LayoverFilters, areEqual);
