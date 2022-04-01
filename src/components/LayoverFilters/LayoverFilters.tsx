import { useCallback, Dispatch } from 'react';

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

export default function LayoverFilters({
  layovers,
  dispatch,
}: LayoverFiltersProps) {
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
      {layovers.map((el) => (
        <LayoverFilter
          key={el.name}
          layover={el}
          toggleLayover={toggleLayover}
        />
      ))}
    </section>
  );
}
