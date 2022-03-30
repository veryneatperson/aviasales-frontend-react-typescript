import { Ticket } from '../../types/tickets';
import { SortingOptions } from '../../types/grouping';

export default function getSortedTickets(
  tickets: Ticket[],
  sortingType: SortingOptions
): Ticket[] {
  switch (sortingType) {
    case 'cheapest':
      return tickets.sort((a, b) => a.price - b.price);
    case 'fastest':
      return tickets.sort(
        (a, b) => a.segments[0].duration
          + a.segments[1].duration
          - (b.segments[0].duration + b.segments[1].duration)
      );
    default:
      return tickets;
  }
}
