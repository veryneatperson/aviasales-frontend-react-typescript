import { GroupingState, LayoversOptions } from '../types/grouping';
import { Ticket } from '../types/tickets';

const layoversMapping: Record<LayoversOptions, number> = {
  all: Infinity,
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
};

export default function filterTickets(
  tickets: Ticket[],
  layovers: GroupingState['layovers']
): Ticket[] {
  if (layovers.find(({ checked, name }) => name === 'all' && checked)) {
    return tickets;
  }

  if (!layovers.find(({ checked }) => checked)) {
    return [];
  }

  const activeLayovers = layovers
    .filter((el) => el.checked)
    .map((el) => layoversMapping[el.name]);

  return tickets.filter(
    (el) =>
      activeLayovers.includes(el.segments[0].stops.length) ||
      activeLayovers.includes(el.segments[1].stops.length)
  );
}
