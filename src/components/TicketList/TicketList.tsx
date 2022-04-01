import Ticket from '../Ticket';
import Loader from '../Loader';

import fetchData from '../../store/actions/tickets';
import { GroupingState, SortingOptions } from '../../types/grouping';
import { Ticket as TicketInterface } from '../../types/tickets';
import sortTickets from '../../helpers/sortTickets';
import filterTickets from '../../helpers/filterTickets';

import './TicketList.scss';

interface TicketListProps {
  sorting: SortingOptions;
  layovers: GroupingState['layovers'];
}

function TicketList({ sorting, layovers }: TicketListProps) {
  const { isLoading, searchIdError, ticketsError, tickets } = fetchData();

  const renderTickets = (
    ticketsArr: TicketInterface[]
  ): JSX.Element[] | undefined => {
    if (!tickets.length) return undefined;

    return sortTickets(filterTickets(ticketsArr, layovers), sorting)
      .slice(0, 5)
      .map((ticket: TicketInterface) => (
        <Ticket
          ticket={ticket}
          key={`${ticket.price}${ticket.segments[0].date}${ticket.segments[1].date}`}
        />
      ));
  };

  if (searchIdError) {
    return <div>Search Id error</div>;
  }

  if (ticketsError) {
    return <div>Tickets errror</div>;
  }

  return (
    <div className="ticket-list">
      {isLoading && <Loader />}
      {renderTickets(tickets)}
    </div>
  );
}

export default TicketList;
