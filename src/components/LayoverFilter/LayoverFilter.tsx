import { memo } from 'react';

import { LayoversOptions, Layover } from '../../types/grouping';

import './LayoverFilter.scss';

const LAYOVER_LABEL = {
  all: 'Все',
  zero: 'Без пересадок',
  one: '1 пересадка',
  two: '2 пересадки',
  three: '3 пересадки',
};

interface LayoverFilterProps {
  layover: Layover;
  toggleLayover: (value: LayoversOptions) => void;
}

function LayoverFilter({
  layover: { name, checked },
  toggleLayover,
}: LayoverFilterProps) {
  const handleChange = (): void => toggleLayover(name);

  return (
    <label className="layover-filter">
      <input
        className="layover-filter__input"
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <span className="layover-filter__checkbox" />
      <span className="layover-filter__label">{LAYOVER_LABEL[name]}</span>
    </label>
  );
}

export default memo(LayoverFilter);
