import { SortingOptions } from '../types/grouping';
import { Ticket } from '../types/tickets';

const sortByFastest = (a: Ticket, b: Ticket): number =>
  a.segments[0].duration +
  a.segments[1].duration -
  (b.segments[0].duration + b.segments[1].duration);

const sortByCheapest = (a: Ticket, b: Ticket): number => a.price - b.price;

export default function sortTickets(
  tickets: Ticket[],
  sorting: SortingOptions
): Ticket[] {
  switch (sorting) {
    case 'fastest':
      return tickets.sort(sortByFastest);
    case 'cheapest':
      return tickets.sort(sortByCheapest);
    case 'optimal':
      return tickets.sort(sortByFastest).slice(0, 5).sort(sortByCheapest);
    default:
      return tickets;
  }
}
