import { Dispatch } from 'react';

import { SortingOptions, SetSortingAction } from '../../types/grouping';
import SortingTab from '../SortingTab';

import './SortingTabs.scss';

const OPTIONS: { label: string; name: SortingOptions }[] = [
  {
    label: 'Самый дешевый',
    name: 'cheapest',
  },
  {
    label: 'Самый быстрый',
    name: 'fastest',
  },
  {
    label: 'Оптимальный',
    name: 'optimal',
  },
];

interface SortingTabsProps {
  sorting: SortingOptions;
  dispatch: Dispatch<SetSortingAction>;
}

export default function SortingTabs({ sorting, dispatch }: SortingTabsProps) {
  return (
    <div className="sorting-tabs">
      {OPTIONS.map(({ label, name }) => (
        <SortingTab
          key={label}
          label={label}
          name={name}
          sortBy={sorting}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
